"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessorTypeToNumComponents = exports.ComponentTypeToBytesPerElement = void 0;
exports.getFromJsonPointer = getFromJsonPointer;
exports.truncateJsonPointer = truncateJsonPointer;
exports.atob = atob;
exports.btoa = btoa;
exports.getAccessorData = getAccessorData;
exports.getAccessorElement = getAccessorElement;
exports.setAccessorElement = setAccessorElement;
exports.guessFileExtension = guessFileExtension;
exports.guessMimeType = guessMimeType;
exports.parseJsonMap = parseJsonMap;
const jsonMap = require("json-source-map");
const gltf_import_export_1 = require("gltf-import-export");
exports.ComponentTypeToBytesPerElement = {
    5120: Int8Array.BYTES_PER_ELEMENT,
    5121: Uint8Array.BYTES_PER_ELEMENT,
    5122: Int16Array.BYTES_PER_ELEMENT,
    5123: Uint16Array.BYTES_PER_ELEMENT,
    5125: Uint32Array.BYTES_PER_ELEMENT,
    5126: Float32Array.BYTES_PER_ELEMENT
};
exports.AccessorTypeToNumComponents = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
};
function getFromJsonPointer(glTF, jsonPointer) {
    let result = glTF;
    jsonPointer.split('/').slice(1).forEach(element => result = result[element]);
    return result;
}
function truncateJsonPointer(value, level) {
    const components = value.split('/');
    components.splice(level + 1);
    return components.join('/');
}
function atob(str) {
    return Buffer.from(str, 'base64').toString('binary');
}
function btoa(str) {
    return str.toString('base64');
}
function buildArrayBuffer(typedArray, data, byteOffset, count, numComponents, byteStride) {
    byteOffset += data.byteOffset;
    const targetLength = count * numComponents;
    if (byteStride === undefined || byteStride === numComponents * typedArray.BYTES_PER_ELEMENT) {
        return new typedArray(data.buffer, byteOffset, targetLength);
    }
    const elementStride = byteStride / typedArray.BYTES_PER_ELEMENT;
    const sourceBuffer = new typedArray(data.buffer, byteOffset, elementStride * count);
    const targetBuffer = new typedArray(targetLength);
    let sourceIndex = 0;
    let targetIndex = 0;
    while (targetIndex < targetLength) {
        for (let componentIndex = 0; componentIndex < numComponents; componentIndex++) {
            targetBuffer[targetIndex] = sourceBuffer[sourceIndex + componentIndex];
            targetIndex++;
        }
        sourceIndex += elementStride;
    }
    return targetBuffer;
}
function getAccessorData(fileName, gltf, accessor) {
    if (accessor.bufferView === undefined) {
        return undefined;
    }
    const bufferView = gltf.bufferViews[accessor.bufferView];
    if (!bufferView) {
        return undefined;
    }
    const buffer = (0, gltf_import_export_1.getBuffer)(gltf, bufferView.buffer, fileName);
    const bufferOffset = bufferView.byteOffset || 0;
    const bufferLength = bufferView.byteLength;
    const bufferStride = bufferView.byteStride;
    const bufferViewBuf = buffer.subarray(bufferOffset, bufferOffset + bufferLength);
    const accessorByteOffset = accessor.byteOffset || 0;
    switch (accessor.componentType) {
        case 5120 /* GLTF2.AccessorComponentType.BYTE */:
            return buildArrayBuffer(Int8Array, bufferViewBuf, bufferOffset + accessorByteOffset, accessor.count, exports.AccessorTypeToNumComponents[accessor.type], bufferStride);
        case 5121 /* GLTF2.AccessorComponentType.UNSIGNED_BYTE */:
            return buildArrayBuffer(Uint8Array, bufferViewBuf, accessorByteOffset, accessor.count, exports.AccessorTypeToNumComponents[accessor.type], bufferStride);
        case 5122 /* GLTF2.AccessorComponentType.SHORT */:
            return buildArrayBuffer(Int16Array, bufferViewBuf, accessorByteOffset, accessor.count, exports.AccessorTypeToNumComponents[accessor.type], bufferStride);
        case 5123 /* GLTF2.AccessorComponentType.UNSIGNED_SHORT */:
            return buildArrayBuffer(Uint16Array, bufferViewBuf, accessorByteOffset, accessor.count, exports.AccessorTypeToNumComponents[accessor.type], bufferStride);
        case 5125 /* GLTF2.AccessorComponentType.UNSIGNED_INT */:
            return buildArrayBuffer(Uint32Array, bufferViewBuf, accessorByteOffset, accessor.count, exports.AccessorTypeToNumComponents[accessor.type], bufferStride);
        case 5126 /* GLTF2.AccessorComponentType.FLOAT */:
            return buildArrayBuffer(Float32Array, bufferViewBuf, accessorByteOffset, accessor.count, exports.AccessorTypeToNumComponents[accessor.type], bufferStride);
    }
}
function getAccessorElement(data, elementIndex, numComponents, componentType, normalized) {
    const normalize = (value) => {
        switch (componentType) {
            case 5120 /* GLTF2.AccessorComponentType.BYTE */: return Math.max(value / 127.0, -1.0);
            case 5121 /* GLTF2.AccessorComponentType.UNSIGNED_BYTE */: return value / 255.0;
            case 5122 /* GLTF2.AccessorComponentType.SHORT */: return Math.max(value / 32767.0, -1.0);
            case 5123 /* GLTF2.AccessorComponentType.UNSIGNED_SHORT */: return value / 65535.0;
        }
        return value;
    };
    const values = new Array(numComponents);
    const startIndex = elementIndex * numComponents;
    for (let index = 0; index < numComponents; index++) {
        const value = data[startIndex + index];
        values[index] = normalized ? normalize(value) : value;
    }
    return values;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function setAccessorElement(data, elementIndex, numComponents, componentType, normalized, values) {
    const denormalize = (value) => {
        switch (componentType) {
            case 5120 /* GLTF2.AccessorComponentType.BYTE */: return Math.round(value * 127.0);
            case 5121 /* GLTF2.AccessorComponentType.UNSIGNED_BYTE */: return Math.round(value * 255.0);
            case 5122 /* GLTF2.AccessorComponentType.SHORT */: return Math.round(value * 32767.0);
            case 5123 /* GLTF2.AccessorComponentType.UNSIGNED_SHORT */: return Math.round(value * 65535.0);
        }
        return value;
    };
    if (values.length !== numComponents) {
        throw new Error("Supplied values must equal numComponents.");
    }
    const startIndex = elementIndex * numComponents;
    for (let index = 0; index < numComponents; index++) {
        const value = values[index];
        data[startIndex + index] = normalized ? denormalize(value) : value;
    }
}
const gltfMimeTypes = {
    'image/png': ['png'],
    'image/jpeg': ['jpg', 'jpeg'],
    'image/ktx': ['ktx'],
    'image/ktx2': ['ktx2'],
    'image/webp': ['webp'],
    'image/vnd-ms.dds': ['dds'],
    'text/plain': ['glsl', 'vert', 'vs', 'frag', 'fs', 'txt'],
    'audio/wav': ['wav'],
    'application/gltf-buffer': ['glbuf', 'glbin']
};
function guessFileExtension(mimeType) {
    if (gltfMimeTypes.hasOwnProperty(mimeType)) {
        return '.' + gltfMimeTypes[mimeType][0];
    }
    return '.bin';
}
function guessMimeType(filename) {
    for (const mimeType in gltfMimeTypes) {
        for (const extensionIndex in gltfMimeTypes[mimeType]) {
            const extension = gltfMimeTypes[mimeType][extensionIndex];
            if (filename.toLowerCase().endsWith('.' + extension)) {
                return mimeType;
            }
        }
    }
    return 'application/octet-stream';
}
// NOTE: jsonMap.parse() makes a bad assumption that every `\t` char is
// four columns, and it's not configurable. But we need character offset,
// not column index, so here we replace every `\t` with a single space.
// The resulting "columns" are actually chars-within-line counts.
const everySingleTab = new RegExp('\\t', 'g');
function parseJsonMap(content) {
    return jsonMap.parse(content.replace(everySingleTab, ' '));
}
//# sourceMappingURL=utilities.js.map