import WorldObject from './WorldObject';

export default class Point extends WorldObject {
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
