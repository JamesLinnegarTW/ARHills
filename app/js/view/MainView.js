import RenderingContext from './RenderingContext';
import WorldViewMediator from './mediator/WorldViewMediator';
import ViewMediatorFactory from './ViewMediatorFactory';

export default class MainView {
    constructor(controller,world) {
      this.world = world;
      this.controller = controller
      this.worldViewMediator = new WorldViewMediator(world, new ViewMediatorFactory());
      this.renderingContext = this.createRenderingContext();
      this.startClientHeight = window.innerHeight;
      this.startFOVFrustrumHeight = 2000 * Math.tan( THREE.Math.degToRad( ( this.renderingContext.camera.fov || 75 ) / 2 ) );
    }

    createRenderingContext() {
        const domContainer = document.createElement('div');
        document.body.appendChild(domContainer);
        return RenderingContext.getDefault(domContainer);
    }

    initialize() {
        const scene = this.renderingContext.scene;
        const object3D = this.worldViewMediator.object3D;

        scene.add(object3D);

        window.addEventListener( 'resize', (e) => this.onWindowResize(), false );
        window.addEventListener( 'touchstart', (e) => {event.preventDefault(); return false;}, false);
        window.addEventListener( 'touchmove', (e) => {event.preventDefault(); return false;}, false);

        this.render();
    }

    render() {
        try {
          // World frame quaternion transform (- PI/2 around the x-axis)
          const world_transform = new THREE.Quaternion( - Math.sqrt( 0.5 ), 0, 0, Math.sqrt( 0.5 ) );
          // Computed device orientation rotation vector
          let threejs_quaternion = new THREE.Quaternion();
          let fulltilt_quaternion;

          fulltilt_quaternion = this.renderingContext.controls.getScreenAdjustedQuaternion();

          threejs_quaternion.set(
            fulltilt_quaternion.x,
            fulltilt_quaternion.y,
            fulltilt_quaternion.z,
            fulltilt_quaternion.w
          );

          this.renderingContext.camera.quaternion.multiplyQuaternions( world_transform, threejs_quaternion );
        }
        catch(e){

        }
        this.worldViewMediator.onFrameRenderered();
        this.renderingContext.renderer.render(this.renderingContext.scene, this.renderingContext.camera);
        requestAnimationFrame(() => this.render());
    }


    onWindowResize(){

        const relativeFOVFrustrumHeight = this.startFOVFrustrumHeight * ( window.innerHeight / this.startClientHeight );
				const relativeVerticalFOV = THREE.Math.radToDeg( 2 * Math.atan( relativeFOVFrustrumHeight / 2000 ) );

        this.renderingContext.camera.aspect = window.innerWidth / window.innerHeight;
        this.renderingContext.camera.fov = relativeVerticalFOV;
        this.renderingContext.camera.updateProjectionMatrix();
        this.renderingContext.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
