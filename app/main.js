import 'babel-polyfill';
import 'three';
import WorldController from './js/controller/WorldController';
import World from './js/model/World';
import LatLonSpherical from './js/lib/latlon-spherical';
import Point from './js/model/Point';
import Pedestal from './js/model/Pedestal';

const world = new World("World");
const worldController = new WorldController(world);

const latLon = new LatLonSpherical(53.363701, -2.002889);

let manchester = new Point("Manchester", latLon, {position:{bearing: 0, distance:30}});
worldController.addPoint(manchester);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, errorHandler, GPS_OPTIONS);
    }
}

function showPosition(position) {
    const currentLocation = new LatLonSpherical(position.coords.latitude, position.coords.longitude);
    worldController.setLocation(currentLocation);
}

function errorHandler(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

getLocation();
