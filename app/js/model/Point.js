import RenderObject from './RenderObject';
import LatLonSpherical from '../lib/latlon-spherical.js';

export default class Point extends RenderObject {
    constructor(name, location) {
        super(name, {});
        this.className = 'Point';
        this.location = location;
        this.bearing = 0;
    }

    updateBearing(currentLatLon){
      try {
        const bearing = currentLatLon.bearingTo(this.location);
        this.bearing = bearing;
      } catch (e){

      }

    }
}
