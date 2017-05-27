import FULLTILT from '../lib/fulltilt.js';

export default class RenderingContext {
    constructor(scene, camera, renderer) {
        const orientationPromise = FULLTILT.getDeviceOrientation({ type: "world" });
        let that = this;

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        orientationPromise.then(function(orientationController){
          that.controls = orientationController
        }).catch(function(reason) {
          console.error(reason);
        });
    }

    static getDefault(containerElement) {
        const width  = window.innerWidth, height = window.innerHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, width / height, 1, 1000);
        const renderer = new THREE.WebGLRenderer( { alpha : false } );


        renderer.setSize(width, height);
        containerElement.appendChild(renderer.domElement);
        return new RenderingContext(scene, camera, renderer);
    }
}
