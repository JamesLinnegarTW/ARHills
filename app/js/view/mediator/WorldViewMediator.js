import ViewMediator from './ViewMediator';

export default class WorldViewMediator extends ViewMediator {
  constructor(world, mediatorFactory){
    super(world, mediatorFactory);

    this.renderObject.addObserver("PointAdded", (e) => this.onPointAdded(e));
    this.renderObject.addObserver("PointRemoved", (e) => this.onPointRemoved(e));

    this.pedestalViewMediator = this.mediatorFactory.getMediator(world.pedestal);
    this.object3D.add(this.pedestalViewMediator.object3D);

  }

  onPointAdded(e){
      this.addChild(e.point);
  }

  onPointRemoved(e){
    this.removeChild(e.point);
  }

}
