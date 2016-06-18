(function() {
  angular.module('unicornTracker')
    .service('pinService', function() {

      var markers = [];
      var markerId = 0;
      var title = "";
      var lat = "";
      var lon = "";
      var desc = "";

      this.geojsonObj = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": []
        },
        "properties": {
          "title": "",
          "description": "",
          "image": "lib/images/unicorn.png",
          "icon": {
              "iconUrl": "lib/images/unicorn.png",
              "iconSize": [30, 30], // size of the icon
              "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
              "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
              "className": "dot unicorn" + 4
          }
        }
      };

      this.getMarkers = function() {
        return markers;
      };

      this.getTitle = function() {
        return title;
      };

      this.setTitle = function(newTitle) {
        title = newTitle;
      };

      this.getLon = function() {
        return this.lon;
      };

      this.setLon = function(newLon) {
        this.lon = newLon;
      };

      this.deleteMarker = function() {
        markers.pop();
        // this.markers.forEach( function(marker) {
        //   if (marker.id === id) {
        //     marker.delete();
        //   }
        // });
      };

      this.addMarker = function(marker) {
        markers.push(marker);
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
