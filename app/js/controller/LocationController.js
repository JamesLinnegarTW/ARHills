
export default class LocationController {

    constructor(){
      const GPS_OPTIONS = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      };
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition, errorHandler, GPS_OPTIONS);
        }
    }

    showPosition(position) {
        const currentLocation = new LatLonSpherical(position.coords.latitude, position.coords.longitude);
        worldController.setLocation(currentLocation);
    }

    errorHandler(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

}
