import LatLonSpherical from '../lib/latlon-spherical.js';

export default class LocationController {

    constructor(callback){
      console.log(callback);
      this.callback = callback;
      this.getLocation();
    }

    getLocation() {
        const GPS_OPTIONS = {
          enableHighAccuracy: false,
          timeout: 5000,
          maximumAge: 0
        };

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition((position)=>{
              const currentLocation = new LatLonSpherical(position.coords.latitude, position.coords.longitude);
              this.callback(currentLocation);
            },
            (err)=>{
                console.warn('ERROR(' + err.code + '): ' + err.message);
            },
            GPS_OPTIONS);
        }
    }
}
