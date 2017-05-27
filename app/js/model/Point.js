import RenderObject from './RenderObject';

export default class Point extends RenderObject {
    constructor(name, properties) {
        super(name, properties);
        this.className = 'Point';
        this.properties = properties;
        this.points = [];
    }

    [Symbol.iterator]() {
          return this.points.values();
      }

}
