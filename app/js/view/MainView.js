import RenderingContext from './RenderingContext';
import WorldViewMediator from './mediator/WorldViewMediator';
import ViewMediatorFactory from './ViewMediatorFactory';

export default class MainView {
    constructor(controller,world) {
      this.world = world;
      this.controller = controller
      this.worldViewMediator = new WorldViewMediator(world, new ViewMediatorFactory());
      this.renderingContext = this.createRenderingContext();
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
        this.render();
    }

    render() {
        this.worldViewMediator.onFrameRenderered();
        this.renderingContext.renderer.render(this.renderingContext.scene, this.renderingContext.camera);
        requestAnimationFrame(() => this.render());
    }

    onWindowResize(){
        this.renderingContext.camera.aspect = window.innerWidth / window.innerHeight;
        this.renderingContext.camera.updateProjectionMatrix();
        this.renderingContext.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}
