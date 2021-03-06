/**
 *  Copyright 2017 Mapper Inc. Part of the mapper-annotator project.
 *  CONFIDENTIAL. AUTHORIZED USE ONLY. DO NOT REDISTRIBUTE.
 */

// import * as React from "react";
// export default
// class Annotator extends React.Component<{}, {}> {
// 	render() { return 'hello' }
// }


import config from '@/config'
import * as $ from 'jquery'
import * as Electron from 'electron'
// import * as electronUnhandled from 'electron-unhandled'
import MousePosition from '../util/MousePosition'
import mousePositionToGLSpace from '../util/mousePositionToGLSpace'
import {AnimationLoop} from 'animation-loop'
import {GUI as DatGui, GUIParams} from 'dat.gui'
import {UtmCoordinateSystem} from "../mapper-annotated-scene/UtmCoordinateSystem"
import {AnnotationType} from '../mapper-annotated-scene/annotations/AnnotationType'
import {AnnotationManager, OutputFormat} from '../mapper-annotated-scene/AnnotationManager'
import {NeighborLocation, NeighborDirection} from '../mapper-annotated-scene/annotations/Lane'
import Logger from '@/util/log'
import {isNullOrUndefined} from "util"
import * as MapperProtos from '@mapperai/mapper-models'
import Models = MapperProtos.mapper.models
import * as THREE from 'three'
import {ImageManager} from "./image/ImageManager"
import {ImageScreen} from "./image/ImageScreen"
import {CalibratedImage} from "./image/CalibratedImage"
import * as Stats from 'stats.js'
import toProps from '@/util/toProps'
import LayerToggle from "@/mapper-annotated-scene/src/models/LayerToggle";
import {KeyboardEventHighlights} from "@/electron-ipc/Messages"

import * as React from "react";
import AnnotatedSceneState from "@/mapper-annotated-scene/src/store/state/AnnotatedSceneState";
import {typedConnect} from "@/mapper-annotated-scene/src/styles/Themed";
import {createStructuredSelector} from "reselect";
import AnnotatedSceneActions from "@/mapper-annotated-scene/src/store/actions/AnnotatedSceneActions";
import StatusWindowState from "@/mapper-annotated-scene/src/models/StatusWindowState";
import {FlyThroughState} from "@/mapper-annotated-scene/src/models/FlyThroughState";
import AnnotatedSceneController from '@/mapper-annotated-scene/src/services/AnnotatedSceneController'
import {Events} from "@/mapper-annotated-scene/src/models/Events";
import {Layer as AnnotatedSceneLayer} from "@/mapper-annotated-scene/src/services/LayerManager";
import {v4 as UUID} from 'uuid'

import AnnotatorMenuView from "./AnnotatorMenuView";

import {dateToString} from "../util/dateToString"
import {scale3DToSpatialTileScale, spatialTileScaleToString} from "../mapper-annotated-scene/tile/ScaleUtil"
import {ScaleProvider} from "../mapper-annotated-scene/tile/ScaleProvider"
import {THREEColorValue} from "@/mapper-annotated-scene/src/THREEColorValue-type";

const dialog = Electron.remote.dialog

// electronUnhandled()

const log = Logger(__filename)

const Layers = {
	...AnnotatedSceneLayer,
	IMAGE_SCREENS: UUID(),
}

type Layer = string

let allLayers: Layer[] = []

// Now let javascript show you how easy it is to work with enums:
for (let key in Layers) {
	const layer = Layers[key]
	allLayers.push(layer)
}

// Groups of layers which are visible together. They are toggled on/off with the 'show/hide' command.
// - all visible
// - annotations hidden
// - everything but annotations hidden
const layerGroups: Layer[][] = [
	allLayers,
	[Layers.POINT_CLOUD, Layers.IMAGE_SCREENS],
	[Layers.ANNOTATIONS],
]

const defaultLayerGroupIndex = 0

/**
 * The Annotator class is in charge of rendering the 3d Scene that includes the point clouds
 * and the annotations. It also handles the mouse and keyboard events needed to select
 * and modify the annotations.
 */

interface AnnotatorState {
	background: THREEColorValue
	layerGroupIndex: number

	lastMousePosition: MousePosition | null
	numberKeyPressed: number | null

	imageScreenOpacity: number

	///////////////////////////

	annotationManager: AnnotationManager | null
	annotatedSceneController: AnnotatedSceneController | null

	lockBoundaries: boolean
	lockLanes: boolean
	lockTerritories: boolean
	lockTrafficDevices: boolean
	isImageScreensVisible: boolean
}

interface AnnotatorProps {
	statusWindowState ?: StatusWindowState
	uiMenuVisible ?: boolean
	flyThroughState ?: FlyThroughState
	carPose ?: Models.PoseMessage
	isLiveMode: boolean
	rendererSize: { width: number, height: number }
	camera: THREE.Camera

	isShiftKeyPressed: boolean
	isAddMarkerMode: boolean
	isAddConnectionMode: boolean
	isConnectLeftNeighborKeyPressed: boolean
	isConnectRightNeighborKeyPressed: boolean
	isConnectFrontNeighborMode: boolean
	isJoinAnnotationKeyPressed: boolean
	isAddConflictOrDeviceKeyPressed: boolean
	isRotationModeActive: boolean
	isMouseButtonPressed: boolean
	isMouseDragging: boolean

}

@typedConnect(toProps(
	'uiMenuVisible',
	'statusWindowState',
	'flyThroughState',
	'carPose',
	'isLiveMode',
	'rendererSize',
	'camera',

	'isShiftKeyPressed',
	'isAddMarkerMode',
	'isAddConnectionMode',
	'isConnectLeftNeighborKeyPressed',
	'isConnectRightNeighborKeyPressed',
	'isConnectFrontNeighborMode',
	'isJoinAnnotationKeyPressed',
	'isAddConflictOrDeviceKeyPressed',
	'isRotationModeActive',
	'isMouseButtonPressed',
	'isMouseDragging',
))
export default class Annotator extends React.Component<AnnotatorProps, AnnotatorState> {
	private annotatorCamera: THREE.Camera
	private flyThroughCamera: THREE.Camera
	private renderer: THREE.WebGLRenderer
	private raycasterImageScreen: THREE.Raycaster // used to highlight ImageScreens for selection
	private scaleProvider: ScaleProvider
	private imageManager: ImageManager
	private plane: THREE.Mesh // an arbitrary horizontal (XZ) reference plane for the UI
	private stats: Stats
	private transformControls: any // controller for translating an object within the scene
	private highlightedImageScreenBox: THREE.Mesh | null // image screen which is currently active in the Annotator UI
	private highlightedLightboxImage: CalibratedImage | null // image screen which is currently active in the Lightbox UI
	private lightboxImageRays: THREE.Line[] // rays that have been formed in 3D by clicking images in the lightbox
	private gui: DatGui | null
	private loop: AnimationLoop
	private root: HTMLElement

	constructor(props) {
		super(props)

		if (!isNullOrUndefined(config['output.trajectory.csv.path']))
			log.warn('Config option output.trajectory.csv.path has been removed.')
		if (!isNullOrUndefined(config['annotator.generate_voxels_on_point_load']))
			log.warn('Config option annotator.generate_voxels_on_point_load has been removed.')
		if (config['startup.animation.fps'])
			log.warn('Config option startup.animation.fps has been removed. Use startup.render.fps.')

		this.raycasterImageScreen = new THREE.Raycaster()
        this.scaleProvider = new ScaleProvider()
		this.highlightedImageScreenBox = null
		this.highlightedLightboxImage = null
		this.lightboxImageRays = []

		this.state = {
			background: 'pink',
			layerGroupIndex: defaultLayerGroupIndex,

			lastMousePosition: null,
			numberKeyPressed: null,
			imageScreenOpacity: parseFloat(config['image_manager.image.opacity']) || 0.5,

			annotationManager: null,
			annotatedSceneController: null,

			isImageScreensVisible: true,

			lockBoundaries: false,
			lockLanes: false,
			lockTerritories: true,
			lockTrafficDevices: false,
		}
	}

	// Create a UI widget to adjust application settings on the fly.
    // JOE, this is Annotator app-specific
	createControlsGui(): void {
		// Add panel to change the settings
		if (!isNullOrUndefined(config['startup.show_color_picker']))
			log.warn('config option startup.show_color_picker has been renamed to startup.show_control_panel')

		if (!config['startup.show_control_panel']) {
			this.gui = null
			return
		}

		const gui = this.gui = new DatGui({
			hideable: false,
			closeOnTop: true,
		} as GUIParams)
		gui.domElement.className = 'threeJs_gui'

		gui.domElement.setAttribute('style', `
			width: 245px;
			position: absolute;
			top: 13px;
			left: 13px;
			right: initial;
			bottom: initial;
			background: rgba(0,0,0,0.5);
			padding: 10px;
		`)

		const closeButton = gui.domElement.querySelector('.close-button')

		closeButton!.setAttribute('style', `
			padding-bottom: 5px;
			cursor: pointer;
		`)

		gui.addColor(this.state, 'background').name('Background').onChange(() => {
			// TODO this ends up changing only the renderer background color, but not he skybox background color in SceneManager
			this.forceUpdate()
		})

		gui.add(this.state, 'imageScreenOpacity', 0, 1).name('Image Opacity').onChange((value: number) => {
			this.imageManager.setOpacity(value)
		})

		const folderLock = gui.addFolder('Lock')
		folderLock.add(this.state, 'lockBoundaries').name('Boundaries').onChange((value: boolean) => {
			if (value && this.state.annotationManager!.getActiveBoundaryAnnotation()) {
				this.state.annotatedSceneController!.cleanTransformControls()
				this.escapeSelection()
			}
		})
		folderLock.add(this.state, 'lockLanes').name('Lanes').onChange((value: boolean) => {
			if (value && (this.state.annotationManager!.getActiveLaneAnnotation() || this.state.annotationManager!.getActiveConnectionAnnotation())) {
				this.state.annotatedSceneController!.cleanTransformControls()
				this.escapeSelection()
			}
		})
		folderLock.add(this.state, 'lockTerritories').name('Territories').onChange((value: boolean) => {
			if (value && this.state.annotationManager!.getActiveTerritoryAnnotation()) {
				this.state.annotatedSceneController!.cleanTransformControls()
				this.escapeSelection()
			}
		})
		folderLock.add(this.state, 'lockTrafficDevices').name('Traffic Devices').onChange((value: boolean) => {
			if (value && (this.state.annotationManager!.getActiveTrafficDeviceAnnotation())) {
				this.state.annotatedSceneController!.cleanTransformControls()
				this.escapeSelection()
			}
		})
		folderLock.open()

		const folderConnection = gui.addFolder('Connection params')
		folderConnection.add(this.state.annotationManager, 'bezierScaleFactor', 1, 30).step(1).name('Bezier factor')
		folderConnection.open()
	}

	private destroyControlsGui(): void {
		if (!config['startup.show_control_panel']) return
		if (this.gui) this.gui.destroy()
	}

    // TODO REORG JOE generic event state, can go somewhere for use by all.
	private setLastMousePosition = (event: MouseEvent | null): void => {
		this.setState({ lastMousePosition: event })
	}

	// When ImageManager loads an image, add it to the scene.
    //
    // TODO JOE The UI can have check boxes for showing/hiding layers.
	private onImageScreenLoad: (imageScreen: ImageScreen) => void =
		(imageScreen: ImageScreen) => {
			this.state.annotatedSceneController!.setLayerVisibility([Layers.IMAGE_SCREENS])
			new AnnotatedSceneActions().addObjectToScene( imageScreen )
		}

	// When a lightbox ray is created, add it to the scene.
	// On null, remove all rays.
	private onLightboxImageRay: (ray: THREE.Line | null) => void =
		(ray: THREE.Line | null) => {
			if (ray) {
				// Accumulate rays while shift is pressed, otherwise clear old ones.
				if (!this.props.isShiftKeyPressed)
					this.clearLightboxImageRays()
				this.state.annotatedSceneController!.setLayerVisibility([Layers.IMAGE_SCREENS])
				this.lightboxImageRays.push(ray)
				new AnnotatedSceneActions().addObjectToScene( ray )
			} else {
				this.clearLightboxImageRays()
			}
		}
	private clearLightboxImageRays(): void {
		if (!this.lightboxImageRays.length) return

		this.lightboxImageRays.forEach(r => new AnnotatedSceneActions().removeObjectFromScene( r ))
		this.lightboxImageRays = []
		// this.renderAnnotator()
	}

	private checkForImageScreenSelection = (mousePosition: MousePosition): void => {
		if (this.props.isLiveMode) return
		if (!this.props.isShiftKeyPressed) return
		if (this.props.isMouseButtonPressed) return
		if (this.props.isAddMarkerMode) return
		if (this.props.isAddConnectionMode) return
		if (this.props.isConnectLeftNeighborKeyPressed ||
			this.props.isConnectRightNeighborKeyPressed ||
			this.props.isConnectFrontNeighborMode) return
		if (this.props.isJoinAnnotationKeyPressed) return
		if (!this.state.isImageScreensVisible) return

		if (!this.imageManager.imageScreenMeshes.length) return this.unHighlightImageScreenBox()

		const mouse = mousePositionToGLSpace(mousePosition, this.props.rendererSize!)
		this.raycasterImageScreen.setFromCamera(mouse, this.props.camera)
		const intersects = this.raycasterImageScreen.intersectObjects(this.imageManager.imageScreenMeshes)

		// No screen intersected
		if (!intersects.length) {
			this.unHighlightImageScreenBox()
		} else {
			// Get intersected screen
			const first = intersects[0].object as THREE.Mesh
			const image = first.userData as CalibratedImage

			// Unhighlight previous screen
			if (
				this.highlightedImageScreenBox && this.highlightedImageScreenBox.id !== first.id
				|| this.highlightedLightboxImage && this.highlightedLightboxImage !== image
			)
				this.unHighlightImageScreenBox()

			// Highlight new screen
			this.highlightImageScreenBox(first)
		}
	}

	private clickImageScreenBox = (event: MouseEvent): void => {
		if (this.props.isLiveMode) return
		if (this.props.isMouseDragging) return
		if (!this.state.isImageScreensVisible) return

		switch (event.button) {
			// Left click released
			case 0: {
				if (!this.highlightedImageScreenBox) return

				const mouse = mousePositionToGLSpace(event, this.props.rendererSize)
				this.raycasterImageScreen.setFromCamera(mouse, this.props.camera)
				const intersects = this.raycasterImageScreen.intersectObject(this.highlightedImageScreenBox)

				if (intersects.length) {
					const image = this.highlightedImageScreenBox.userData as CalibratedImage
					this.unHighlightImageScreenBox()
					// this.renderAnnotator()
					this.imageManager.loadImageIntoWindow(image)
				}
				break
				// Middle click released
			} case 1: {
				// no actions
				break
			// Right  click released
			} case 2: {
				if (this.props.isShiftKeyPressed) return

				const mouse = mousePositionToGLSpace(event, this.props.rendererSize)
				this.raycasterImageScreen.setFromCamera(mouse, this.props.camera)
				const intersects = this.raycasterImageScreen.intersectObjects(this.imageManager.imageScreenMeshes)
				// Get intersected screen
				if (intersects.length) {
					const first = intersects[0].object as THREE.Mesh
					const material = first.material as THREE.MeshBasicMaterial
					material.opacity = this.state.imageScreenOpacity

					const screen = this.imageManager.getImageScreen(first)
					if (screen) screen.unloadImage()

					// this.renderAnnotator()
				}
				break
			} default:
				log.warn('This should never happen.')
		}
	}

	// Draw the box with max opacity to indicate that it is active.
	private highlightImageScreenBox(imageScreenBox: THREE.Mesh): void {
		if (this.props.isLiveMode) return
		if (!this.props.isShiftKeyPressed) return

		// Note: image loading takes time, so even if image is marked as "highlighted"
		// it is required to continue to renderAnnotator until the image is actually loaded and rendered
		if (imageScreenBox === this.highlightedImageScreenBox) {
			// this.renderAnnotator()
			return
		}
		this.highlightedImageScreenBox = imageScreenBox

		const screen = this.imageManager.getImageScreen(imageScreenBox)
		if (screen)
			screen.loadImage()
				.then(loaded => {if (loaded) { /*this.renderAnnotator() */ }})
				.catch(err => log.warn('getImageScreen() failed', err))

		const image = imageScreenBox.userData as CalibratedImage
		// If it's already loaded in the lightbox, highlight it in the lightbox.
		// Don't allow it to be loaded a second time.
		if (this.imageManager.loadedImageDetails.has(image)) {
			if (this.imageManager.highlightImageInLightbox(image))
				this.highlightedLightboxImage = image
			return
		}

		const material = imageScreenBox.material as THREE.MeshBasicMaterial
		material.opacity = 1.0
		// this.renderAnnotator()
	}

	// Draw the box with default opacity like all the other boxes.
	private unHighlightImageScreenBox(): void {
		if (this.highlightedLightboxImage) {
			if (this.imageManager.unhighlightImageInLightbox(this.highlightedLightboxImage))
				this.highlightedLightboxImage = null
		}

		if (!this.highlightedImageScreenBox) return

		const material = this.highlightedImageScreenBox.material as THREE.MeshBasicMaterial
		material.opacity = this.state.imageScreenOpacity
		this.highlightedImageScreenBox = null
		// this.renderAnnotator()
	}

	// ANNOTATOR ONLY, because Kiosk doesn't have annotation editing
	//  {{{

	/*
	 * Make a best effort to save annotations before exiting. There is no guarantee the
	 * promise will complete, but it seems to work in practice.
	 */
	private onBeforeUnload: (e: BeforeUnloadEvent) => void = (_: BeforeUnloadEvent) => {
		this.state.annotationManager!.immediateAutoSave()
	}

    // TODO REORG JOE move to AnnotationManager?
    //
    // TODO REORG JOE instead of enabling/disabling autosave, just have auto-save
    // configured not to save when unfocused unless there's changes.
	private onFocus = (): void => {
		this.state.annotationManager!.enableAutoSave()
	}
	private onBlur = (): void => {
		this.setLastMousePosition(null)
		this.state.annotationManager!.disableAutoSave()
	}

	// }}}

	/**
	 * Handle keyboard events
	 */
	private onKeyDown = (event: KeyboardEvent): void => {
		if (event.defaultPrevented) return
		if (event.altKey) return
		if (event.ctrlKey) return
		if (event.metaKey) return

		this.onKeyDownInteractiveMode(event)
	}

    // TODO REORG JOE move some of this event state to shared lib, perhaps a
    // KeyboardManager, and some of it is Annotation stuff.
	private onKeyDownInteractiveMode = (event: KeyboardEvent): void => {
		if (event.repeat) {
			// tslint:disable-line:no-empty
		} else if (event.keyCode >= 48 && event.keyCode <= 57) { // digits 0 to 9
			this.setState({ numberKeyPressed: parseInt(event.key, 10) })
		} else {
		}
	}

	private onKeyUp = (event: KeyboardEvent): void => {
		if (event.defaultPrevented) return

		// TODO JOE THURSDAY longer term, generic stuff, perhaps re-usable from shared lib
		this.state.numberKeyPressed = null

		// TODO JOE THURSDAY longer term, less generic, maybe lives inside AnnotatedSceneController
		this.props.isConnectLeftNeighborKeyPressed = false
		this.props.isConnectRightNeighborKeyPressed = false
		this.props.isConnectFrontNeighborMode = false
		this.props.isAddConflictOrDeviceKeyPressed = false
		this.props.isJoinAnnotationKeyPressed = false

		if ( event.shiftKey ) this.onShiftKeyUp()
	}

	/**
	 * Unselect whatever is selected in the UI:
	 *  - an active control point
	 *  - a selected annotation
	 */
	escapeSelection(): void {
		if (this.transformControls.isAttached()) {
			this.state.annotatedSceneController!.cleanTransformControls()
		} else if (this.state.annotationManager!.activeAnnotation) {
			this.state.annotationManager!.unsetActiveAnnotation()
			this.deactivateAllAnnotationPropertiesMenus()
			// GONE this.renderAnnotator()
		}
	}

	private onShiftKeyDown = (): void => {
		if (this.state.lastMousePosition)
			this.checkForImageScreenSelection(this.state.lastMousePosition)
	}

	private onShiftKeyUp = (): void => {
		this.unHighlightImageScreenBox()
	}

	private onDeleteActiveAnnotation(): void {
		// Delete annotation from scene
		if (this.state.annotationManager.deleteActiveAnnotation()) {
			log.info("Deleted selected annotation")
            // TODO JOE this will trigger state change which in turn updates the UI.
			this.deactivateLanePropUI()
			this.hideTransform()
			// this.renderAnnotator()
		}
	}

	private deleteAllAnnotations(): void {
		this.state.annotationManager.immediateAutoSave()
			.then(() => {
				this.state.annotationManager.unloadAllAnnotations()
			})
	}

	// Create an annotation, add it to the scene, and activate (highlight) it.
	private uiAddAnnotation(annotationType: AnnotationType): void {
		if (this.state.annotationManager.createAndAddAnnotation(annotationType, true)[0]) {
			log.info(`Added new ${AnnotationType[annotationType]} annotation`)
			this.deactivateAllAnnotationPropertiesMenus(annotationType)
			this.resetAllAnnotationPropertiesMenuElements()
			this.hideTransform()
		}
        else {
            throw new Error( 'unable to add annotation of type ' + AnnotationType[annotationType] )
        }
	}

	// Save all annotation data.
	private saveToFile(format: OutputFormat): Promise<void> {
		// Attempt to insert a string representing the coordinate system format into the requested path, then save.
		const basePath = config['output.annotations.json.path']
		const i = basePath.indexOf('.json')
		const formattedPath = i >= 0
			? basePath.slice(0, i) + '-' + OutputFormat[format] + basePath.slice(i, basePath.length)
			: basePath
		log.info(`Saving annotations JSON to ${formattedPath}`)
		return this.state.annotationManager.saveAnnotationsToFile(formattedPath, format)
			.catch(error => log.warn("save to file failed: " + error.message))
	}

	private exportAnnotationsTiles(format: OutputFormat): Promise<void> {
		const basePath = config['output.annotations.tiles_dir']
		const scale = scale3DToSpatialTileScale(this.scaleProvider.utmTileScale)
		if (isNullOrUndefined(scale))
			return Promise.reject(Error(`1can't create export path because of a bad scale: ${this.scaleProvider.utmTileScale}`))
		const scaleString = spatialTileScaleToString(scale)
		if (isNullOrUndefined(scaleString))
			return Promise.reject(Error(`2can't create export path because of a bad scale: ${this.scaleProvider.utmTileScale}`))
		const dir = basePath + '/' + dateToString(new Date()) + scaleString
		log.info(`Exporting annotations tiles to ${dir}`)
		return this.state.annotationManager.exportAnnotationsTiles(dir, format)
			.catch(error => log.warn("export failed: " + error.message))
	}

	// Save lane waypoints only.
	private saveWaypointsKml(): Promise<void> {
		const basePath = config['output.annotations.kml.path']
		log.info(`Saving waypoints KML to ${basePath}`)
		return this.state.annotationManager.saveToKML(basePath)
			.catch(err => log.warn('saveToKML failed: ' + err.message))
	}

    // TODO REORG JOE remove?
	private addFront(): void {
		log.info("Adding connected annotation to the front")
		if (this.state.annotationManager.addConnectedLaneAnnotation(NeighborLocation.FRONT, NeighborDirection.SAME)) {
			Annotator.deactivateFrontSideNeighbours()
		}
		// this.renderAnnotator()
	}

    // TODO REORG JOE remove?
	private addLeftSame(): void {
		log.info("Adding connected annotation to the left - same direction")
		if (this.state.annotationManager.addConnectedLaneAnnotation(NeighborLocation.LEFT, NeighborDirection.SAME)) {
			Annotator.deactivateLeftSideNeighbours()
		}
		// this.renderAnnotator()
	}

    // TODO REORG JOE remove?
	private addLeftReverse(): void {
		log.info("Adding connected annotation to the left - reverse direction")
		if (this.state.annotationManager.addConnectedLaneAnnotation(NeighborLocation.LEFT, NeighborDirection.REVERSE)) {
			Annotator.deactivateLeftSideNeighbours()
		}
		// this.renderAnnotator()
	}

    // TODO REORG JOE remove?
	private addRightSame(): void {
		log.info("Adding connected annotation to the right - same direction")
		if (this.state.annotationManager.addConnectedLaneAnnotation(NeighborLocation.RIGHT, NeighborDirection.SAME)) {
			Annotator.deactivateRightSideNeighbours()
		}
		// this.renderAnnotator()
	}

    // TODO REORG JOE remove?
	private addRightReverse(): void {
		log.info("Adding connected annotation to the right - reverse direction")
		if (this.state.annotationManager.addConnectedLaneAnnotation(NeighborLocation.RIGHT, NeighborDirection.REVERSE)) {
			Annotator.deactivateRightSideNeighbours()
		}
		// this.renderAnnotator()
	}

    // TODO REORG JOE move to AnnotationManager
	private reverseLaneDirection(): void {
		log.info("Reverse lane direction.")
		const {result, existLeftNeighbour, existRightNeighbour}: { result: boolean, existLeftNeighbour: boolean, existRightNeighbour: boolean }
			= this.state.annotationManager!.reverseLaneDirection()
		if (result) {
			if (existLeftNeighbour) {
				Annotator.deactivateLeftSideNeighbours()
			} else {
				Annotator.activateLeftSideNeighbours()
			}
			if (existRightNeighbour) {
				Annotator.deactivateRightSideNeighbours()
			} else {
				Annotator.activateRightSideNeighbours()
			}
			// this.renderAnnotator()
		}
	}

    // TODO JOE handle DOM events the React way {{

	/**
	 * Bind functions events to interface elements
	 */
	private bindLanePropertiesPanel(): void {
		const lcType = $('#lp_select_type')
		lcType.on('change', () => {
			lcType.blur()
			const activeAnnotation = this.state.annotationManager.getActiveLaneAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding lane type: " + lcType.children("option").filter(":selected").text())
			activeAnnotation.type = +lcType.val()
		})

		const lcLeftType = $('#lp_select_left_type')
		lcLeftType.on('change', () => {
			lcLeftType.blur()
			const activeAnnotation = this.state.annotationManager.getActiveLaneAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding left side type: " + lcLeftType.children("option").filter(":selected").text())
			activeAnnotation.leftLineType = +lcLeftType.val()
			activeAnnotation.updateVisualization()
		})

		const lcLeftColor = $('#lp_select_left_color')
		lcLeftColor.on('change', () => {
			lcLeftColor.blur()
			const activeAnnotation = this.state.annotationManager.getActiveLaneAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding left side type: " + lcLeftColor.children("option").filter(":selected").text())
			activeAnnotation.leftLineColor = +lcLeftColor.val()
			activeAnnotation.updateVisualization()
		})

		const lcRightType = $('#lp_select_right_type')
		lcRightType.on('change', () => {
			lcRightType.blur()
			const activeAnnotation = this.state.annotationManager.getActiveLaneAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding right side type: " + lcRightType.children("option").filter(":selected").text())
			activeAnnotation.rightLineType = +lcRightType.val()
			activeAnnotation.updateVisualization()
		})

		const lcRightColor = $('#lp_select_right_color')
		lcRightColor.on('change', () => {
			lcRightColor.blur()
			const activeAnnotation = this.state.annotationManager.getActiveLaneAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding left side type: " + lcRightColor.children("option").filter(":selected").text())
			activeAnnotation.rightLineColor = +lcRightColor.val()
			activeAnnotation.updateVisualization()
		})

		const lcEntry = $('#lp_select_entry')
		lcEntry.on('change', () => {
			lcEntry.blur()
			const activeAnnotation = this.state.annotationManager.getActiveLaneAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding entry type: " + lcEntry.children("option").filter(":selected").text())
			activeAnnotation.entryType = lcEntry.val()
		})

		const lcExit = $('#lp_select_exit')
		lcExit.on('change', () => {
			lcExit.blur()
			const activeAnnotation = this.state.annotationManager.getActiveLaneAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding exit type: " + lcExit.children("option").filter(":selected").text())
			activeAnnotation.exitType = lcExit.val()
		})
	}

	private bindLaneNeighborsPanel(): void {
		const lpAddLeftOpposite = document.getElementById('lp_add_left_opposite')
		if (lpAddLeftOpposite)
			lpAddLeftOpposite.addEventListener('click', () => {
				this.addLeftReverse()
			})
		else
			log.warn('missing element lp_add_left_opposite')

		const lpAddLeftSame = document.getElementById('lp_add_left_same')
		if (lpAddLeftSame)
			lpAddLeftSame.addEventListener('click', () => {
				this.addLeftSame()
			})
		else
			log.warn('missing element lp_add_left_same')

		const lpAddRightOpposite = document.getElementById('lp_add_right_opposite')
		if (lpAddRightOpposite)
			lpAddRightOpposite.addEventListener('click', () => {
				this.addRightReverse()
			})
		else
			log.warn('missing element lp_add_right_opposite')

		const lpAddRightSame = document.getElementById('lp_add_right_same')
		if (lpAddRightSame)
			lpAddRightSame.addEventListener('click', () => {
				this.addRightSame()
			})
		else
			log.warn('missing element lp_add_right_same')

		const lpAddFront = document.getElementById('lp_add_forward')
		if (lpAddFront)
			lpAddFront.addEventListener('click', () => {
				this.addFront()
			})
		else
			log.warn('missing element lp_add_forward')
	}

	private bindConnectionPropertiesPanel(): void {
		const cpType = $('#cp_select_type')
		cpType.on('change', () => {
			cpType.blur()
			const activeAnnotation = this.state.annotationManager.getActiveConnectionAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding connection type: " + cpType.children("options").filter(":selected").text())
			activeAnnotation.type = +cpType.val()
		})
	}

	private bindTerritoryPropertiesPanel(): void {
		const territoryLabel = document.getElementById('input_label_territory')
		if (territoryLabel) {
			// Select all text when the input element gains focus.
			territoryLabel.addEventListener('focus', event => {
				(event.target as HTMLInputElement).select()
			})

			// Update territory label text on any change to input.
			territoryLabel.addEventListener('input', (event: Event) => {
				const activeAnnotation = this.state.annotationManager.getActiveTerritoryAnnotation()
				if (activeAnnotation)
					activeAnnotation.setLabel((event.target as HTMLInputElement).value)
			})

			// User is done editing: lose focus.
			territoryLabel.addEventListener('change', (event: Event) => {
				(event.target as HTMLInputElement).blur()
			})
		} else
			log.warn('missing element input_label_territory')
	}

	private bindTrafficDevicePropertiesPanel(): void {
		const tpType = $('#tp_select_type')
		tpType.on('change', () => {
			tpType.blur()
			const activeAnnotation = this.state.annotationManager.getActiveTrafficDeviceAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding traffic device type: " + tpType.children("option").filter(":selected").text())
			activeAnnotation.type = +tpType.val()
			activeAnnotation.updateVisualization()
			// this.renderAnnotator()
		})
	}

	private bindBoundaryPropertiesPanel(): void {
		const bpType = $('#bp_select_type')
		bpType.on('change', () => {
			bpType.blur()
			const activeAnnotation = this.state.annotationManager.getActiveBoundaryAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding boundary type: " + bpType.children("options").filter(":selected").text())
			activeAnnotation.type = +bpType.val()
		})

		const bpColor = $('#bp_select_color')
		bpColor.on('change', () => {
			bpColor.blur()
			const activeAnnotation = this.state.annotationManager.getActiveBoundaryAnnotation()
			if (activeAnnotation === null)
				return
			log.info("Adding boundary color: " + bpColor.children("options").filter(":selected").text())
			activeAnnotation.color = +bpColor.val()
		})
	}

	// RYAN -- mostly Annotator specific
	private bind(): void {
		this.bindLanePropertiesPanel()
		this.bindLaneNeighborsPanel()
		this.bindConnectionPropertiesPanel()
		this.bindTerritoryPropertiesPanel()
		this.bindTrafficDevicePropertiesPanel()
		this.bindBoundaryPropertiesPanel()

		const menuControlElement = document.getElementById('menu_control')
		if (menuControlElement)
			menuControlElement.style.visibility = 'visible'
		else
			log.warn('missing element menu_control')

		const menuButton = document.getElementById('menu_control_btn')
		if (menuButton)
			menuButton.addEventListener('click', () => {
				log.info("Menu icon clicked. Close/Open menu bar.")

				// RYAN UPDATED
				new AnnotatedSceneActions().toggleUIMenuVisible()
				// this.displayMenu(MenuVisibility.TOGGLE)
			})
		else
			log.warn('missing element menu_control_btn')

		const toolsDelete = document.getElementById('tools_delete')
		if (toolsDelete)
			toolsDelete.addEventListener('click', () => {
				this.onDeleteActiveAnnotation()
			})
		else
			log.warn('missing element tools_delete')

		const toolsAddLane = document.getElementById('tools_add_lane')
		if (toolsAddLane)
			toolsAddLane.addEventListener('click', () => {
				this.uiAddAnnotation(AnnotationType.LANE)
			})
		else
			log.warn('missing element tools_add_lane')

		const toolsAddTrafficDevice = document.getElementById('tools_add_traffic_device')
		if (toolsAddTrafficDevice)
			toolsAddTrafficDevice.addEventListener('click', () => {
				this.uiAddAnnotation(AnnotationType.TRAFFIC_DEVICE)
			})
		else
			log.warn('missing element tools_add_traffic_device')

		const toolsLoadImages = document.getElementById('tools_load_images')
		if (toolsLoadImages)
			toolsLoadImages.addEventListener('click', () => {
				this.imageManager.loadImagesFromOpenDialog()
					.catch(err => log.warn('loadImagesFromOpenDialog failed: ' + err.message))
			})
		else
			log.warn('missing element tools_load_images')

		const toolsLoadAnnotation = document.getElementById('tools_load_annotation')
		if (toolsLoadAnnotation)
			toolsLoadAnnotation.addEventListener('click', () => {
				const options: Electron.OpenDialogOptions = {
					message: 'Load Annotations File',
					properties: ['openFile'],
					filters: [{name: 'json', extensions: ['json']}],
				}
				const handler = (paths: string[]): void => {
					if (paths && paths.length)
						this.state.annotationManager.loadAnnotations(paths[0])
							.catch(err => log.warn('loadAnnotations failed: ' + err.message))
				}
				dialog.showOpenDialog(options, handler)
			})
		else
			log.warn('missing element tools_load_annotation')

		const toolsSave = document.getElementById('tools_save')
		if (toolsSave)
			toolsSave.addEventListener('click', () => {
				this.saveToFile(OutputFormat.UTM).then()
			})
		else
			log.warn('missing element tools_save')

		const toolsExportKml = document.getElementById('tools_export_kml')
		if (toolsExportKml)
			toolsExportKml.addEventListener('click', () => {
				this.saveWaypointsKml().then()
			})
		else
			log.warn('missing element tools_export_kml')

		const liveModePauseBtn = document.querySelector('#live_mode_pause')
		if (liveModePauseBtn)
			liveModePauseBtn.addEventListener('click', this.toggleLiveModePlay)
		else
			log.warn('missing element live_mode_pause')

		const liveAndRecordedToggleBtn = document.querySelector('#live_recorded_playback_toggle')
		if (liveAndRecordedToggleBtn)
			liveAndRecordedToggleBtn.addEventListener('click', this.toggleLiveAndRecordedPlay)
		else
			log.warn('missing element live_recorded_playback_toggle')
	}

    // }}

	private expandAccordion(domId: string): void {
		if ( !this.props.uiMenuVisible ) return
		$(domId).accordion('option', {active: 0})
	}

	private collapseAccordion(domId: string): void {
		if ( !this.props.uiMenuVisible ) return
		$(domId).accordion('option', {active: false})
	}

    // TODO JOE this all will be controlled by React state + markup {{

	private resetAllAnnotationPropertiesMenuElements(): void {
		this.resetBoundaryProp()
		this.resetLaneProp()
		this.resetConnectionProp()
		this.resetTerritoryProp()
		this.resetTrafficDeviceProp()
	}

	/**
	 * Reset lane properties elements based on the current active lane
	 */
	private resetLaneProp(): void {
		const activeAnnotation = this.state.annotationManager.getActiveLaneAnnotation()
		if (!activeAnnotation) return

		this.expandAccordion('#menu_lane')

		if (activeAnnotation.neighborsIds.left.length > 0) {
			Annotator.deactivateLeftSideNeighbours()
		} else {
			Annotator.activateLeftSideNeighbours()
		}

		if (activeAnnotation.neighborsIds.right.length > 0) {
			Annotator.deactivateRightSideNeighbours()
		} else {
			Annotator.activateRightSideNeighbours()
		}

		if (activeAnnotation.neighborsIds.front.length > 0) {
			Annotator.deactivateFrontSideNeighbours()
		} else {
			Annotator.activateFrontSideNeighbours()
		}

		const lpId = document.getElementById('lp_id_value')
		if (lpId)
			lpId.textContent = activeAnnotation.id.toString()
		else
			log.warn('missing element lp_id_value')
		activeAnnotation.updateLaneWidth()

		const lpSelectType = $('#lp_select_type')
		lpSelectType.removeAttr('disabled')
		lpSelectType.val(activeAnnotation.type.toString())

		const lpSelectLeft = $('#lp_select_left_type')
		lpSelectLeft.removeAttr('disabled')
		lpSelectLeft.val(activeAnnotation.leftLineType.toString())

		const lpSelectLeftColor = $('#lp_select_left_color')
		lpSelectLeftColor.removeAttr('disabled')
		lpSelectLeftColor.val(activeAnnotation.leftLineColor.toString())

		const lpSelectRight = $('#lp_select_right_type')
		lpSelectRight.removeAttr('disabled')
		lpSelectRight.val(activeAnnotation.rightLineType.toString())

		const lpSelectRightColor = $('#lp_select_right_color')
		lpSelectRightColor.removeAttr('disabled')
		lpSelectRightColor.val(activeAnnotation.rightLineColor.toString())

		const lpSelectEntry = $('#lp_select_entry')
		lpSelectEntry.removeAttr('disabled')
		lpSelectEntry.val(activeAnnotation.entryType.toString())

		const lpSelectExit = $('#lp_select_exit')
		lpSelectExit.removeAttr('disabled')
		lpSelectExit.val(activeAnnotation.exitType.toString())
	}

	/**
	 * Reset territory properties elements based on the current active territory
	 */
	private resetTerritoryProp(): void {
		const activeAnnotation = this.state.annotationManager.getActiveTerritoryAnnotation()
		if (!activeAnnotation) return

		this.expandAccordion('#menu_territory')

		const territoryLabel = document.getElementById('input_label_territory')
		if (territoryLabel) {
			(territoryLabel as HTMLInputElement).value = activeAnnotation.getLabel()
		} else
			log.warn('missing element input_label_territory')
	}

	/**
	 * Reset traffic device properties elements based on the current active traffic device
	 */
	private resetTrafficDeviceProp(): void {
		const activeAnnotation = this.state.annotationManager.getActiveTrafficDeviceAnnotation()
		if (!activeAnnotation) return

		this.expandAccordion('#menu_traffic_device')

		const tpId = document.getElementById('tp_id_value')
		if (tpId)
			tpId.textContent = activeAnnotation.id.toString()
		else
			log.warn('missing element tp_id_value')

		const tpSelectType = $('#tp_select_type')
		tpSelectType.removeAttr('disabled')
		tpSelectType.val(activeAnnotation.type.toString())
	}

	/**
	 * Reset boundary properties elements based on the current active boundary
	 */
	private resetBoundaryProp(): void {
		const activeAnnotation = this.state.annotationManager.getActiveBoundaryAnnotation()
		if (!activeAnnotation) return

		this.expandAccordion('#menu_boundary')

		const bpId = document.getElementById('bp_id_value')
		if (bpId)
			bpId.textContent = activeAnnotation.id.toString()
		else
			log.warn('missing element bp_id_value')

		const bpSelectType = $('#bp_select_type')
		bpSelectType.removeAttr('disabled')
		bpSelectType.val(activeAnnotation.type.toString())

		const bpSelectColor = $('#bp_select_color')
		bpSelectColor.removeAttr('disabled')
		bpSelectColor.val(activeAnnotation.color.toString())
	}

	/**
	 * Reset connection properties elements based on the current active connection
	 */
	private resetConnectionProp(): void {
		const activeAnnotation = this.state.annotationManager.getActiveConnectionAnnotation()
		if (!activeAnnotation) return

		this.expandAccordion('#menu_connection')

		const cpId = document.getElementById('cp_id_value')
		if (cpId)
			cpId.textContent = activeAnnotation.id.toString()
		else
			log.warn('missing element bp_id_value')

		const cpSelectType = $('#cp_select_type')
		cpSelectType.removeAttr('disabled')
		cpSelectType.val(activeAnnotation.type.toString())
	}

	private deactivateAllAnnotationPropertiesMenus(exceptFor: AnnotationType = AnnotationType.UNKNOWN): void {
		if ( !this.props.uiMenuVisible ) return
		if (exceptFor !== AnnotationType.BOUNDARY) this.deactivateBoundaryProp()
		if (exceptFor !== AnnotationType.LANE) this.deactivateLanePropUI()
		if (exceptFor !== AnnotationType.CONNECTION) this.deactivateConnectionProp()
		if (exceptFor !== AnnotationType.TERRITORY) this.deactivateTerritoryProp()
		if (exceptFor !== AnnotationType.TRAFFIC_DEVICE) this.deactivateTrafficDeviceProp()
	}

	/**
	 * Deactivate lane properties menu panel
	 */
    // TODO JOE this should be React markup with state controling the content
	private deactivateLanePropUI(): void {
		this.collapseAccordion('#menu_lane')

		Annotator.deactivateLeftSideNeighbours()
		Annotator.deactivateRightSideNeighbours()
		Annotator.deactivateFrontSideNeighbours()

		const lpId = document.getElementById('lp_id_value')
		if (lpId)
			lpId.textContent = 'UNKNOWN'
		else
			log.warn('missing element lp_id_value')
		const lpWidth = document.getElementById('lp_width_value')
		if (lpWidth)
			lpWidth.textContent = 'UNKNOWN'
		else
			log.warn('missing element lp_width_value')

		const laneProp1 = document.getElementById('lane_prop_1')
		if (laneProp1) {
			const selects = laneProp1.getElementsByTagName('select')
			for (let i = 0; i < selects.length; ++i) {
				selects.item(i).selectedIndex = 0
				selects.item(i).setAttribute('disabled', 'disabled')
			}
		} else
			log.warn('missing element lane_prop_1')
	}

	/**
	 * Deactivate boundary properties menu panel
	 */
	private deactivateBoundaryProp(): void {
		this.collapseAccordion('#menu_boundary')

		const bpId = document.getElementById('bp_id_value')
		if (bpId)
			bpId.textContent = 'UNKNOWN'
		else
			log.warn('missing element bp_id_value')

		const bpType = document.getElementById('bp_select_type')
		if (bpType)
			bpType.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element bp_select_type')

		const bpColor = document.getElementById('bp_select_color')
		if (bpColor)
			bpColor.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element bp_select_color')

		const boundaryProp = document.getElementById('boundary_prop')
		if (boundaryProp) {
			const selects = boundaryProp.getElementsByTagName('select')
			for (let i = 0; i < selects.length; ++i) {
				selects.item(i).selectedIndex = 0
				selects.item(i).setAttribute('disabled', 'disabled')
			}
		} else
			log.warn('missing element boundary_prop')
	}

	/**
	 * Deactivate connection properties menu panel
	 */
	private deactivateConnectionProp(): void {
		this.collapseAccordion('#menu_connection')

		const cpId = document.getElementById('cp_id_value')
		if (cpId)
			cpId.textContent = 'UNKNOWN'
		else
			log.warn('missing element cp_id_value')

		const cpType = document.getElementById('cp_select_type')
		if (cpType)
			cpType.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element cp_select_type')

		const connectionProp = document.getElementById('connection_prop')
		if (connectionProp) {
			const selects = connectionProp.getElementsByTagName('select')
			for (let i = 0; i < selects.length; ++i) {
				selects.item(i).selectedIndex = 0
				selects.item(i).setAttribute('disabled', 'disabled')
			}
		} else
			log.warn('missing element boundary_prop')
	}

	/**
	 * Deactivate territory properties menu panel
	 */
	private deactivateTerritoryProp(): void {
		this.collapseAccordion('#menu_territory')

		const territoryLabel = document.getElementById('input_label_territory')
		if (territoryLabel)
			(territoryLabel as HTMLInputElement).value = ''
		else
			log.warn('missing element input_label_territory')
	}

	/**
	 * Deactivate traffic device properties menu panel
	 */
	private deactivateTrafficDeviceProp(): void {
		this.collapseAccordion('#menu_traffic_device')

		const tpId = document.getElementById('tp_id_value')
		if (tpId)
			tpId.textContent = 'UNKNOWN'
		else
			log.warn('missing element tp_id_value')

		const tpType = document.getElementById('tp_select_type')
		if (tpType)
			tpType.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element tp_select_type')
	}

	/**
	 * Deactivate/activate left side neighbours
	 */
	private static deactivateLeftSideNeighbours(): void {
		const lpAddLeftOpposite = document.getElementById('lp_add_left_opposite')
		if (lpAddLeftOpposite)
			lpAddLeftOpposite.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element lp_add_left_opposite')

		const lpAddLeftSame = document.getElementById('lp_add_left_same')
		if (lpAddLeftSame)
			lpAddLeftSame.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element lp_add_left_same')
	}

	private static activateLeftSideNeighbours(): void {
		const lpAddLeftOpposite = document.getElementById('lp_add_left_opposite')
		if (lpAddLeftOpposite)
			lpAddLeftOpposite.removeAttribute('disabled')
		else
			log.warn('missing element lp_add_left_opposite')

		const lpAddLeftSame = document.getElementById('lp_add_left_same')
		if (lpAddLeftSame)
			lpAddLeftSame.removeAttribute('disabled')
		else
			log.warn('missing element lp_add_left_same')
	}

	/**
	 * Deactivate right side neighbours
	 */
	private static deactivateRightSideNeighbours(): void {
		const lpAddRightOpposite = document.getElementById('lp_add_right_opposite')
		if (lpAddRightOpposite)
			lpAddRightOpposite.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element lp_add_right_opposite')

		const lpAddRightSame = document.getElementById('lp_add_right_same')
		if (lpAddRightSame)
			lpAddRightSame.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element lp_add_right_same')
	}

	private static activateRightSideNeighbours(): void {
		const lpAddRightOpposite = document.getElementById('lp_add_right_opposite')
		if (lpAddRightOpposite)
			lpAddRightOpposite.removeAttribute('disabled')
		else
			log.warn('missing element lp_add_right_opposite')

		const lpAddRightSame = document.getElementById('lp_add_right_same')
		if (lpAddRightSame)
			lpAddRightSame.removeAttribute('disabled')
		else
			log.warn('missing element lp_add_right_same')
	}

	/**
	 * Deactivate/activate front side neighbours
	 */
	private static deactivateFrontSideNeighbours(): void {
		const lpAddFront = document.getElementById('lp_add_forward')
		if (lpAddFront)
			lpAddFront.setAttribute('disabled', 'disabled')
		else
			log.warn('missing element lp_add_forward')
	}

	private static activateFrontSideNeighbours(): void {
		const lpAddFront = document.getElementById('lp_add_forward')
		if (lpAddFront)
			lpAddFront.removeAttribute('disabled')
		else
			log.warn('missing element lp_add_forward')
	}

    // }}

	// Toggle the visibility of data by cycling through the groups defined in layerGroups.
	private toggleLayerVisibility(): void {
		this.state.layerGroupIndex++
		if (!layerGroups[this.state.layerGroupIndex])
			this.state.layerGroupIndex = defaultLayerGroupIndex

		// TODO JOE FRIDAY The Annotator UI would like to have button for
		// toggling layer visibility, hence the reference to layerManager here.
		// Should AnnotatedSceneController expose layerManager as a public
		// property?
		this.state.annotatedSceneController!.setLayerVisibility(layerGroups[this.state.layerGroupIndex], true)
	}

	componentDidMount(): void {

		window.addEventListener('focus', this.onFocus)  // RYAN Annotator-specific
		window.addEventListener('blur', this.onBlur)  // RYAN Annotator-specific
		window.addEventListener('beforeunload', this.onBeforeUnload) // RYAN Annotator-specific

        document.addEventListener('mousemove', this.setLastMousePosition)
        document.addEventListener('mousemove', this.checkForImageScreenSelection)
		document.addEventListener('mouseup', this.clickImageScreenBox)

		// Bind ui events
		this.bind()
		// if ( this.props.uiMenuVisible ) this.deactivateAllAnnotationPropertiesMenus()
	}

	componentWillUnmount(): void {
		this.destroyControlsGui()

		// TODO:
		//  - remove event listeners
		//  - clean up child windows
	}

	componentDidUpdate(_oldProps, oldState) {
		if (!oldState.annotationManager && this.state.annotationManager) {
			this.createControlsGui()
		}

		if (!oldState.annotatedSceneController && this.state.annotatedSceneController) {

			const {utmCoordinateSystem, channel} = this.state.annotatedSceneController

			this.imageManager = new ImageManager( utmCoordinateSystem, channel )

			// events from ImageManager
			channel.on(Events.KEYDOWN, this.state.annotatedSceneController.onKeyDown)
			channel.on(Events.KEYUP, this.state.annotatedSceneController.onKeyUp)
			channel.on(Events.IMAGE_SCREEN_LOAD_UPDATE, this.onImageScreenLoad)
			channel.on(Events.LIGHT_BOX_IMAGE_RAY_UPDATE, this.onLightboxImageRay)

			this.addImageScreenLayer()

		}

        if( oldState.isImageScreensVisible !== this.state.isImageScreensVisible ) {
            if(this.state.isImageScreensVisible) {
                this.imageManager.showImageScreens()
            } else {
                this.imageManager.hideImageScreens()
            }
        }
	}

	mapKey(key: string, fn: (e?: KeyboardEvent | KeyboardEventHighlights) => void) {
		this.state.annotatedSceneController!.mapKey(key, fn)
	}

	keyHeld(key: string, fn: (held: boolean) => void) {
		this.state.annotatedSceneController!.keyHeld(key, fn)
	}

	setKeys() {
		this.mapKey('Backspace', () => this.onDeleteActiveAnnotation())
		this.mapKey('Escape', () => this.escapeSelection())
		this.mapKey('Shift', () => this.onShiftKeyDown())
		this.mapKey('A', () => this.deleteAllAnnotations())
		this.mapKey('b', () => this.uiAddAnnotation(AnnotationType.BOUNDARY))
		this.mapKey('C', () => this.state.annotatedSceneController!.focusOnPointCloud())
		this.mapKey('d', () => this.state.annotationManager!.deleteLastMarker())
		this.mapKey('F', () => this.reverseLaneDirection())
		this.mapKey('f', () => this.props.isConnectFrontNeighborMode = true)
		this.mapKey('h', () => this.toggleLayerVisibility())
		this.mapKey('j', () => this.props.isJoinAnnotationKeyPressed = true)
		this.mapKey('l', () => this.props.isConnectLeftNeighborKeyPressed = true)
		this.mapKey('m', () => this.saveWaypointsKml().then())
		this.mapKey('N', () => this.exportAnnotationsTiles(OutputFormat.UTM).then())
		this.mapKey('n', () => this.uiAddAnnotation(AnnotationType.LANE))
		this.mapKey('q', () => this.props.isAddConflictOrDeviceKeyPressed = true)
		this.mapKey('r', () => this.props.isConnectRightNeighborKeyPressed = true)
		this.mapKey('S', () => this.saveToFile(OutputFormat.LLA).then())
		this.mapKey('s', () => this.saveToFile(OutputFormat.UTM).then())
		this.mapKey('R', () => this.resetTiltAndCompass())
		this.mapKey('T', () => this.uiAddAnnotation(AnnotationType.TERRITORY))
		this.mapKey('t', () => this.uiAddAnnotation(AnnotationType.TRAFFIC_DEVICE))
		// @TODO moved to PointCloudManager)
		this.mapKey('U', () => this.unloadPointCloudData())
		this.mapKey('V', () => this.toggleCameraType())
		this.mapKey('X', () => {
			if (this.state.annotationManager!.activeAnnotation && this.state.annotationManager!.activeAnnotation!.isRotatable)
				this.toggleTransformControlsRotationMode()
		})
	}

	addImageScreenLayer() {

		const imageScreensToggle = new LayerToggle({
			show: () => this.setState({ isImageScreensVisible: true }),
			hide: () => this.setState({ isImageScreensVisible: false }),
		})

		this.state.annotatedSceneController!.addLayer(Layers.IMAGE_SCREENS, imageScreensToggle)

	}

	getAnnotatedSceneRef = (ref: AnnotatedSceneController) => {
		ref && this.setState({ annotatedSceneController: ref })
	}

	getAnnotationManagerRef = (ref: AnnotationManager) => {
		ref && this.setState({ annotationManager: ref })
	}

	render() {

		return (
			<React.Fragment>
	            <AnnotatedSceneController
					ref={this.getAnnotatedSceneRef}
					backgroundColor={this.state.background}
					getAnnotationManagerRef={this.getAnnotationManagerRef}
					enableAnnotationTileManager={true}

					lockBoundaries={this.state.lockBoundaries}
					lockTerritories={this.state.lockTerritories}
					lockLanes={this.state.lockLanes}
					lockTrafficDevices={this.state.lockTrafficDevices}
				/>
    			<AnnotatorMenuView />
			</React.Fragment>
		)

	}

}
