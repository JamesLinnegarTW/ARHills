import MainView from '../view/MainView';


export default class WorldController{
  constructor(world){
    this.world = world;
    this.view = new MainView(this, world);
    this.view.initialize();
  }

  setLocation(currentLatLon){
    this.world.updateLocation(currentLatLon);
  }

}
