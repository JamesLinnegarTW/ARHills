import ViewMediator from './ViewMediator';

export default class PedestalViewMediator extends ViewMediator {
  constructor(pedestal, mediatorFactory){
    super(pedestal, mediatorFactory);
  }

  makeObject3D(){

    const cone = new THREE.Mesh(
        function() {
            const radius = 2;
            const height = 4;
            const rSegments = 32;
            var geom = new THREE.CylinderBufferGeometry(0,radius,height,rSegments,1,true);
            geom.translate(0,height/2,0);
            return geom;
        }(),
        new THREE.MeshBasicMaterial( { color: 0x0000ff } )
      );

    const container = new THREE.Object3D();
    container.add(cone);
    cone.position.fromArray([0,-5,0]);
    cone.rotation.x = -90;
    return container;
  }

}
