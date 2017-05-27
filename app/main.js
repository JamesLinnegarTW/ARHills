import 'babel-polyfill';
import 'three';
import WorldController from './js/controller/WorldController';
import World from './js/model/World';


const world = new World();
const worldController = new WorldController(world);

worldController.addPoint();

const options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, errorHandler, options);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
}

function errorHandler(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

getLocation();
