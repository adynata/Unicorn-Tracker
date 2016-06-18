(function() {
  angular.module('unicornTracker')
    .service('pinService', function() {

      var markers = [];

      this.getMarkers = function() {
        return markers;
      };

      this.getLat = function() {
        return this.lat;
      };

      this.setLat = function(newLat) {
        this.lat = newLat;
      };

      this.getLon = function() {
        return this.lon;
      };

      this.setLon = function(newLon) {
        this.lon = newLon;
      };

      this.deleteMarker = function(id) {
        this.markers.forEach( function(marker) {
          if (marker.id === id) {
            marker.delete();
          }
        });
      };

      this.addMarker = function(id) {
        markers.push(id);
        // add marker to map
      };

      // var latitude = document.getElementById(lat).value;
      // var longitude = document.getElementById(lng).value;
      //
      // var reg = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}");
      //
      // if( reg.exec(latitude) ) {
      //  //do nothing
      // } else {
      //  //error
      // }
      //
      // if( reg.exec(longitude) ) {
      //  //do nothing
      // } else {
      //  //error
      // }

    });
})();
