import RenderObject from './RenderObject';
import Pedestal from './Pedestal';

export default class World extends RenderObject {
  constructor(name, properties){
    super(name, properties);
    this.points = [];
    this.pedestal = new Pedestal('Pedestal');
    this.className = 'World';
    this.location = null;
  }

  addPoint(point){
    this.points.push(point);
    this.emit('PointAdded', { point });
  }

  removePoint(point) {
    const index = this.points.indexOf(point);
    if(index !== -1){
      this.points.splice(index, 1);
    }
    this.emit('PointRemoved', { point });
  }

  updateLocation(currentLatLon){
    this.location = currentLatLon;
    this.points.forEach((point)=>{
      point.updateBearing(this.location);
    });

  }

  [Symbol.iterator]() {
    return this.points.values();
  }

}
