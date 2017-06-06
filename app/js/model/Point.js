import RenderObject from './RenderObject';
import LatLonSpherical from '../lib/latlon-spherical.js';

export default class Point extends RenderObject {
    constructor(name, location, properties) {
        super(name, properties);
        this.className = 'Point';
        this.location = location;
        this.properties = properties;
        this.points = [];
    }

    updateBearing(currentLatLon){
      try {
        const bearing = currentLatLon.bearingTo(this.location);
        this.properties.position.bearing = bearing;
      } catch (e){

      }

    }

    [Symbol.iterator]() {
        return this.points.values();
    }

}
