import FULLTILT from '../lib/fulltilt.js';

export default class RenderingContext {
    constructor(scene, camera, renderer, controls) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.controls = controls;
    }

    static getDefault(containerElement) {
        const orientationPromise = FULLTILT.getDeviceOrientation({ type: "world" });
        const width  = window.innerWidth, height = window.innerHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
        const renderer = new THREE.WebGLRenderer( { alpha : true } );
        let controls;

        camera.position.z = 20;
        renderer.setSize(width, height);

        containerElement.appendChild(renderer.domElement);


        orientationPromise.then(function(orientationController){
          controls = orientationController
        }).catch(function(reason) {
					console.error(reason);
				});

        return new RenderingContext(scene, camera, renderer, controls);
    }
}
