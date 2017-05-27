import MainView from '../view/MainView';
import Point from '../model/Point';

export default class WorldController{
  constructor(world){
    this.world = world;
    this.view = new MainView(this, world);
    this.view.initialize();
  }

  addPoint(){
    let test = new Point("James",{position:{bearing: 0, distance:10}});
    this.world.addPoint(test);
  }
}
