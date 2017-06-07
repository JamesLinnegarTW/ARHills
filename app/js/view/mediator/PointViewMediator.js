import ViewMediator from './ViewMediator';

export default class PointViewMediator extends ViewMediator {


  constructor(point, mediatorFactory) {
    super(point, mediatorFactory);
  }

  makeObject3D() {
    const container = new THREE.Object3D();

    new THREE.ObjectLoader().load('/js/data/arrow.json', (object)=>{
      container.add(object);
    });

    const text = this.makeTextSprite(this.renderObject.name);
    container.add(text);
    text.position.y = 2;
    return container;
  }



  makeTextSprite( message )
  {


  	var canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 60;
  	var context = canvas.getContext('2d');
  	context.font =  "20px Arial Sans MS";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "middle";
  	// get size data (height depends only on font size)
  	var metrics = context.measureText( message );
    console.log(metrics);
    //canvas.width = metrics.width;
    //canvas.height = metrics.height;

  	// background color
  	context.fillText(message, canvas.width/2, canvas.height/2);

  	// canvas contents will be used for a texture
  	var texture = new THREE.Texture(canvas)
  	texture.needsUpdate = true;

  	var spriteMaterial = new THREE.SpriteMaterial(
  		{ map: texture } );
  	var sprite = new THREE.Sprite( spriteMaterial );
  	sprite.scale.set(10,3,1.0);
  	return sprite;
  }



  getPositionFromBearing(bearing) {
    const distance = 30;
    const angle = THREE.Math.degToRad(bearing - 90)

    const x = Math.cos(angle) * distance,
      z = Math.sin(angle) * distance;

    return [x, 0, z];
  }


  onFrameRenderered() {
    super.onFrameRenderered();

    const position = this.getPositionFromBearing(this.renderObject.bearing);

    //this.object3D.rotation.y += 0.01;
    this.object3D.position.fromArray(position);
  }

}
