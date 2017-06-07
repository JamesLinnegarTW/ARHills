import FULLTILT from '../lib/fulltilt.js';

export default class RenderingContext {
    constructor(scene, camera, renderer) {
        const orientationPromise = FULLTILT.getDeviceOrientation({ type: "world" });

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        orientationPromise.then((orientationController)=>{
          this.controls = orientationController
        }).catch(function(reason) {
          console.error(reason);
        });
    }

    static getDefault(containerElement) {
        const width  = window.innerWidth, height = window.innerHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, width / height, 1, 1000);
        const renderer = new THREE.WebGLRenderer( { alpha : true } );
        camera.position.y = 50;
        renderer.setSize(width, height);
        containerElement.appendChild(renderer.domElement);
        return new RenderingContext(scene, camera, renderer);
    }
}
