import ViewMediator from './ViewMediator';

export default class PointViewMediator extends ViewMediator {

  constructor(point, mediatorFactory){
    super(point, mediatorFactory);
  }

  makeObject3D() {
    const container = new THREE.Object3D();

    const mesh =  new THREE.Mesh(
      new THREE.BoxGeometry( 1, 1, 1 ),
      new THREE.MeshBasicMaterial( { color: 0xff0000 } )
    );

    container.rotation.y = Math.random() * 360;

    container.position.setX(this.worldObject.properties.position.x);
    container.position.setY(this.worldObject.properties.position.y);
    container.add(mesh);
    return container;
  }

  onFrameRenderered() {
    super.onFrameRenderered();
    this.object3D.rotation.z  += 0.01;
  }
}
