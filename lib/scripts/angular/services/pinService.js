(function() {
  angular.module('unicornTracker')
    .service('pinService', function() {

      var markers = [];
      var markerId = 0;
      var title = "";
      var lat = "";
      var lon = "";
      var desc = "";
      var tempMarker = "";

      this.geojsonObj = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": []
        },
        "properties": {
          "title": "",
          "unicornDesc": "",
          "id": "",
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

      this.getDesc = function() {
        return desc;
      };

      this.setDesc = function(newDesc) {
        desc = newDesc;
      };

      this.getMarkers = function() {
        return markers;
      };

      this.getMarkerId = function() {
        markerId = markerId + 1;
        return markerId;
      };

      this.getTitle = function() {
        return title;
      };

      this.setTitle = function(newTitle) {
        title = newTitle;
      };

      this.getLat = function() {
        return this.lon;
      };

      this.setLat = function(newLat) {
        lat = newLat;
      };

      this.getLon = function() {
        return this.lon;
      };

      this.setLon = function(newLon) {
        lon = newLon;
      };

      this.deleteMarker = function() {
        markers.pop();
      };

      this.addMarker = function(marker) {
        console.log("ADDING");
        markers.push(marker);
      };

      this.getTempMarker = function() {
        return tempMarker;
      };

      this.setTempMarker = function(newMarker) {
        tempMarker = newMarker;
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
