import ViewMediator from './ViewMediator';

export default class PointViewMediator extends ViewMediator {


  constructor(point, mediatorFactory) {
    super(point, mediatorFactory);
  }

  makeObject3D() {
    const container = new THREE.Object3D();


    var loader = new THREE.ObjectLoader();
    loader.load('/js/data/arrow.json', function(object){
      container.add(object);
    });

    return container;
    /* balls */
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({
        color: 0x0000ff
      })
    );

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x0000ff
      })
    );

    const cone = new THREE.Mesh(
      function() {
        const radius = 1;
        const height = 2;
        const rSegments = 32;
        var geom = new THREE.CylinderBufferGeometry(0, radius, height, rSegments, 1, true);
        geom.translate(0, height / 2, 0);
        return geom;
      }(),
      new THREE.MeshBasicMaterial({
        color: 0x0000ff
      })
    );

    cone.rotation.z = THREE.Math.degToRad(180);
    container.add(cone);
    container.add(sphere);
    return container;
  }



  getPositionFromBearingAndDistance(bearing, distance) {

    const angle = THREE.Math.degToRad(bearing - 90)

    const x = Math.cos(angle) * distance,
      z = Math.sin(angle) * distance;

    return [x, 0, z];
  }


  onFrameRenderered() {
    super.onFrameRenderered();

    const position = this.getPositionFromBearingAndDistance(this.renderObject.properties.position.bearing,
      this.renderObject.properties.position.distance);

    this.object3D.rotation.y += 0.01;
    this.object3D.position.fromArray(position);
  }

}
