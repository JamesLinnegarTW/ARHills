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

    container.rotation.x = Math.random() * 360;
    container.rotation.y = Math.random() * 360;
    container.rotation.z = Math.random() * 360;

    container.add(mesh);
    return container;
  }

  getPositionFromBearingAndDistance(bearing, distance) {

    const angle = THREE.Math.degToRad(bearing-90)

    const x = Math.cos(angle) * distance,
        z = Math.sin(angle) * distance;

    return [x,0,z];
  }


  onFrameRenderered() {
    super.onFrameRenderered();

    const position = this.getPositionFromBearingAndDistance(this.renderObject.properties.position.bearing,
                                                       this.renderObject.properties.position.distance);

    this.object3D.position.fromArray(position);
    this.object3D.rotation.z  += 0.01;
    this.object3D.rotation.y  += 0.01;
  }
}
