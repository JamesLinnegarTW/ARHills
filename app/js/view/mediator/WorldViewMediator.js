import ViewMediator from './ViewMediator';

export default class WorldViewMediator extends ViewMediator {
  constructor(world, mediatorFactory){
    super(world, mediatorFactory);

    this.renderObject.addObserver("PointAdded", (e) => this.onPointAdded(e));
    this.renderObject.addObserver("PointRemoved", (e) => this.onPointRemoved(e));
  }

  onPointAdded(e){
      this.addChild(e.point);
  }

  onPointRemoved(e){
    this.removeChild(e.point);
  }

}
