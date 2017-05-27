import RenderObject from './RenderObject';

export default class World extends RenderObject {
  constructor(name, properties){
    super(name, properties)
    this.points = [];
    this.className = 'World';
  }

  addPoint(point){
    point.parent = this;
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

  [Symbol.iterator]() {
    return this.points.values();
  }

}
