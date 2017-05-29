import ViewMediator from './ViewMediator';

export default class PedestalViewMediator extends ViewMediator {
  constructor(pedestal, mediatorFactory){
    super(pedestal, mediatorFactory);
  }

  makeObject3D(){

    const object3D = new THREE.Mesh(
      new THREE.CubeGeometry(5,1,5),
    //  new THREE.CylinderGeometry( ),
      new THREE.MeshBasicMaterial( { color: 0xff00ff } )
    );

    const container = new THREE.Object3D();
    container.add(object3D);

    object3D.position.fromArray([0,-5,0]);

    return container;
  }

}
