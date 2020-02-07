function renderFeaturesHtml(selFeatures) {
    let html = "<div>";
    html += "<table>";
    let showFeatureHeader = (selFeatures.length > 1);

    let noAttributeCount = 0;
    for (let i = 0; i < selFeatures.length; i++) {
        let feat = selFeatures[i];
        let names = feat.getKeys();
        if (names.length == 1 && names[0] == feat.getGeometryName()) {
            noAttributeCount++;
        }
    }

    if (noAttributeCount == selFeatures.length) {
        return null;
    }

    for (let i = 0; i < selFeatures.length; i++) {
        let feat = selFeatures[i];
        if (showFeatureHeader) {
            html += "<tr><td colspan='2'>Feature" + (i + 1) + "</td></tr>";
        }
        let props = feat.getProperties();
        for (let key in props) {
            //Skip geometry
            if (key == feat.getGeometryName()) {
                continue;
            }
            html += "<tr>";
            html += "<td class='popup-attribute-key'>" + key + "</td>";
            html += "<td class='popup-attribute-value'>" + props[key] + "</td>";
            html += "</tr>";
        }
    }
    html += "</table>";
    html += "</div>";
    return html;
}

function strIsNullOrEmpty(str) {
    return str == null || str == "";
}

function tryReadCSVFeatures(previewSettings, previewContent, formatOptions, callback) {
    let aliases = previewSettings.csvColumnAliases;
    Papa.parse(previewContent, {
        header: true,
        complete: function (results) {
            if (!results.data || results.data.length == 0) {
                callback({ error: "No data parsed. Probably not a CSV file" });
            } else {
                if (results.meta.fields) {
                    let parsed = null;
                    //Run through the alias list and see if we get any matches
                    //for (let alias of aliases) {
                    aliases.forEach(function (alias) {
                        if (parsed) {
                            return;
                        }
                        let xc = results.meta.fields.filter(function (s) { return s.toLowerCase() == alias.xColumn.toLowerCase(); })[0];
                        let yc = results.meta.fields.filter(function (s) { return s.toLowerCase() == alias.yColumn.toLowerCase(); })[0];
                        // We found the columns, but before we accept this set, the columns
                        // in question must be numeric. Being CSV and all, we'll use the most
                        // scientific method to determine this: Sample the first row of data /s
                        if (!strIsNullOrEmpty(xc) && !strIsNullOrEmpty(yc)) {
                            let first = results.data[0];
                            let firstX = parseFloat(first[xc]);
                            let firstY = parseFloat(first[yc]);
                            if (first && !isNaN(firstX) && !isNaN(firstY)) {
                                let json = {
                                    type: 'FeatureCollection',
                                    features: []
                                };
                                results.data.forEach(function (d) {
                                    let x = parseFloat(d[xc]);
                                    let y = parseFloat(d[yc]);
                                    if (!isNaN(x) && !isNaN(y)) {
                                        let f = {
                                            type: 'Feature',
                                            geometry: {
                                                coordinates: [x, y],
                                                type: 'Point'
                                            },
                                            properties: d
                                        }
                                        delete f.properties[xc];
                                        delete f.properties[yc];
                                        json.features.push(f);
                                    }
                                });
                                let fmt = new ol.format.GeoJSON();
                                parsed = fmt.readFeatures(json, formatOptions);
                                return;
                            }
                        }
                    });
                    if (parsed) {
                        callback({ features: parsed });
                    } else {
                        callback({ error: "Data successfully parsed as CSV, but coordinate columns could not be found" });
                    }
                } else {
                    callback({ error: "No fields found in CSV metadata" });
                }
            }
        }
    })
}

function tryReadFeatures(format, text, options) {
    try {
        return format.readFeatures(text, options);
    } catch (e) {
        return null;
    }
}

function createPreviewSource(previewContent, formatOptions, previewSettings, callback) {
    let projections = previewSettings.projections || [];
    if (projections.length > 0) {
        for (let i = 0; i < projections.length; i++) {
            let pj = projections[i];
            proj4.defs("EPSG:" + pj.epsgCode, pj.definition);
        }
        ol.proj.proj4.register(proj4);
    }
    let formats = {
        "GPX": ol.format.GPX,
        "GeoJSON": ol.format.GeoJSON,
        "IGC": ol.format.IGC,
        "KML": ol.format.KML,
        "TopoJSON": ol.format.TopoJSON,
        "WFS": ol.format.WFS,
        "GML": ol.format.GML,
        "GML2": ol.format.GML2,
        "GML3": ol.format.GML3,
        "WKT": ol.format.WKT
    };
    let features = null;
    let driverName = null;
    // CSV has no dedicated OL format driver. It requires a combination of papaparse and feeding
    // its parsed result (if successful) to the GeoJSON format driver. Thus we will test for this
    // format first before trying the others one-by-one
    tryReadCSVFeatures(previewSettings, previewContent, formatOptions, function (res) {
        features = res.features;
        if (features && features.length > 0) {
            driverName = "CSV";
        } else {
            for (let formatName in formats) {
                let format = formats[formatName];
                let driver = new format();
                features = tryReadFeatures(driver, previewContent, formatOptions);
                if (features && features.length > 0) {
                    driverName = formatName;
                    break;
                }
            }
        }
        if (!features || features.length == 0) {
            let attemptedFormats = ["CSV"].concat(Object.keys(formats));
            throw new Error("Could not load preview content. Attempted the following formats:<br/><br/><ul><li>" + attemptedFormats.join("</li><li>") + "</ul></li><p>Please make sure your document content is one of the above formats</p>");
        }
        callback({
            source: new ol.source.Vector({
                features: features
            }),
            driver: driverName
        });
    });
}

function makeSelectInteraction(previewSettings) {
    let polygonStyle = new ol.style.Style({
        stroke: new ol.style.Stroke(previewSettings.selectionStyle.polygon.stroke),
        fill: new ol.style.Fill(previewSettings.selectionStyle.polygon.fill)
    });
    let lineStyle = new ol.style.Style({
        fill: new ol.style.Stroke({
            color: previewSettings.selectionStyle.line.stroke.color
        }),
        stroke: new ol.style.Stroke(previewSettings.selectionStyle.line.stroke)
    });
    let pointStyle = new ol.style.Style({
        image: new ol.style.Circle({
            radius: previewSettings.selectionStyle.point.radius || 5,
            stroke: new ol.style.Stroke(previewSettings.selectionStyle.point.stroke),
            fill: new ol.style.Fill(previewSettings.selectionStyle.point.fill)
        })
    });
    return new ol.interaction.Select({
        style: function (feature, resolution) {
            let geom = feature.getGeometry();
            if (geom) {
                let geomType = geom.getType();
                if (geomType.indexOf("Polygon") >= 0) {
                    return polygonStyle;
                } else if (geomType.indexOf("Line") >= 0) {
                    return lineStyle;
                } else if (geomType.indexOf("Point") >= 0) {
                    return pointStyle;
                }
            }
            return null;
        }
    });
}

function initPreviewMap(domElId, preview, previewSettings) {
    let vertexStyle = null;
    if (previewSettings.style.vertex.enabled === true) {
        vertexStyle = new ol.style.Style({
            image: new ol.style.Circle({
                radius: previewSettings.style.vertex.radius,
                fill: new ol.style.Fill({
                    color: previewSettings.style.vertex.fill.color
                })
            }),
            geometry: function (feature) {
                let g = feature.getGeometry();
                let gt = g.getType();
                switch (gt) {
                    case "MultiPolygon":
                        {
                            let coords = g.getCoordinates();
                            let geoms = [];
                            for (let i = 0; i < coords.length; i++) {
                                let polyCoords = coords[i];
                                for (let j = 0; j < polyCoords.length; j++) {
                                    let pts = polyCoords[j];
                                    geoms.push(new ol.geom.MultiPoint(pts));
                                }
                            }
                            return new ol.geom.GeometryCollection(geoms);
                        }
                    case "MultiLineString":
                    case "Polygon":
                        {
                            let coords = g.getCoordinates();
                            let geoms = [];
                            for (let i = 0; i < coords.length; i++) {
                                let pts = coords[i];
                                geoms.push(new ol.geom.MultiPoint(pts));
                            }
                            return new ol.geom.GeometryCollection(geoms);
                        }
                    case "LineString":
                        {
                            let coords = g.getCoordinates();
                            let geoms = [];
                            for (let i = 0; i < coords.length; i++) {
                                let pts = coords[i];
                                geoms.push(new ol.geom.Point(pts));
                            }
                            return new ol.geom.GeometryCollection(geoms);
                        }
                }
                return g;
            }
        });
    }
    let polygonStyle = [new ol.style.Style({
        stroke: new ol.style.Stroke(previewSettings.style.polygon.stroke),
        fill: new ol.style.Fill(previewSettings.style.polygon.fill)
    })];
    if (vertexStyle) {
        polygonStyle.push(vertexStyle);
    }
    let lineStyle = [new ol.style.Style({
        fill: new ol.style.Stroke({
            color: previewSettings.style.line.stroke.color
        }),
        stroke: new ol.style.Stroke(previewSettings.style.line.stroke)
    })];
    if (vertexStyle) {
        lineStyle.push(vertexStyle);
    }
    let pointStyle = new ol.style.Style({
        image: new ol.style.Circle({
            radius: previewSettings.style.point.radius || 5,
            stroke: new ol.style.Stroke(previewSettings.style.point.stroke),
            fill: new ol.style.Fill(previewSettings.style.point.fill)
        })
    });
    let previewLayer = new ol.layer.Vector({
        source: preview.source,
        //NOTE: Has no effect for KML, which is fine because it has its own style def that OL
        //wisely steps aside
        style: function (feature, resolution) {
            let geom = feature.getGeometry();
            if (geom) {
                let geomType = geom.getType();
                if (geomType.indexOf("Polygon") >= 0) {
                    return polygonStyle;
                } else if (geomType.indexOf("Line") >= 0) {
                    return lineStyle;
                } else if (geomType.indexOf("Point") >= 0) {
                    return pointStyle;
                } else { //GeometryCollection
                    return [pointStyle, lineStyle, polygonStyle];
                }
            }
            return null;
        }
    });
    let map = new ol.Map({
        target: 'map',
        controls: ol.control.defaults({
            attributionOptions: {
                collapsible: true
            }
        }).extend([
            new ol.control.ScaleLine(),
            new ol.control.MousePosition({
                projection: (previewSettings.coordinateDisplay.projection || 'EPSG:4326'),
                coordinateFormat: function (coordinate) {
                    return ol.coordinate.format(coordinate, (previewSettings.coordinateDisplay.format || 'Lat: {y}, Lng: {x}'), 4);
                }
            }),
            new ol.control.ZoomSlider(),
            new ol.control.ZoomToExtent()
        ]),
        layers: [
            new ol.layer.Group({
                title: "Base Maps",
                layers: [
                    new ol.layer.Tile({
                        title: 'Stamen Toner',
                        type: 'base',
                        visible: (previewSettings.defaultBaseLayer == "stamen-toner"),
                        source: new ol.source.Stamen({
                            layer: 'toner'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Stamen Watercolor',
                        type: 'base',
                        visible: (previewSettings.defaultBaseLayer == "stamen-water"),
                        source: new ol.source.Stamen({
                            layer: 'watercolor'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'Stamen Terrain',
                        type: 'base',
                        visible: (previewSettings.defaultBaseLayer == "stamen-terrain"),
                        source: new ol.source.Stamen({
                            layer: 'terrain'
                        })
                    }),
                    new ol.layer.Tile({
                        title: 'OpenStreetMap',
                        type: 'base',
                        visible: (previewSettings.defaultBaseLayer == "osm"),
                        source: new ol.source.OSM()
                    })
                ]
            }),
            new ol.layer.Group({
                title: "Map Preview",
                layers: [
                    previewLayer
                ]
            })
        ]
    });
    let mapView = new ol.View();
    mapView.fit(preview.source.getExtent(), map.getSize());
    map.setView(mapView);
    let popup = new Popup();
    map.addOverlay(popup);
    let layerSwitcher = new ol.control.LayerSwitcher({
        tipLabel: 'Legend' // Optional label for button
    });
    map.addControl(layerSwitcher);

    let select = makeSelectInteraction(previewSettings);
    map.addInteraction(select);

    select.on('select', function (evt) {
        let selFeatures = evt.selected;
        let html = renderFeaturesHtml(selFeatures);
        if (html)
            popup.show(evt.mapBrowserEvent.coordinate, html);
    });
}