import ViewMediator from './ViewMediator';

export default class WorldViewMediator extends ViewMediator {
  constructor(world, mediatorFactory){
    super(world, mediatorFactory);

    this.worldObject.addObserver("PointAdded", (e) => this.onPointAdded(e));
  }

  onPointAdded(e){
      this.addChild(e.point);
  }

}
