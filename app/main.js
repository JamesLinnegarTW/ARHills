import 'babel-polyfill';
import 'three';
import WorldController from './js/controller/WorldController';
import World from './js/model/World';
import LatLonSpherical from './js/lib/latlon-spherical';
import Point from './js/model/Point';
import Pedestal from './js/model/Pedestal';
const pedestal = new Pedestal('Pedestal');
const world = new World("World", pedestal);
const worldController = new WorldController(world);

const properties = {position:{bearing: 20, distance:20, position:{lat:52.464414, lon: -4.013870}}};
let home = new Point("Home",properties);
world.addPoint(home);

/*

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, errorHandler, options);
    }
}

function showPosition(position) {
    let latlon = new LatLonSpherical(position.coords.latitude, position.coords.longitude);
    const homeBearing = new LatLonSpherical(52.464414, -4.013870);
    //home.properties.position.bearing = homeBearing;
}

function errorHandler(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

getLocation();
*/
