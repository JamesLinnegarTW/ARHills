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

const latLon = new LatLonSpherical(53.363701, -2.002889);

let manchester = new Point("Manchester",{position:{bearing: 0, distance:20, latlon:latLon}});


world.addPoint(manchester);


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
    const currentLocation = new LatLonSpherical(position.coords.latitude, position.coords.longitude);
    const bearing = currentLocation.bearingTo(manchester.properties.position.latlon);
    manchester.properties.position.bearing = bearing;
}

function errorHandler(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

getLocation();
