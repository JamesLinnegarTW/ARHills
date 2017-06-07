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

const GPS_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

let manchester = new Point("Manchester", latLon);
let stockport = new Point("Stockport", new LatLonSpherical(53.406884, -2.157279));


worldController.addPoint(stockport);
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
