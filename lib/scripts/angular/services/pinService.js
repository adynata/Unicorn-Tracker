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

      this.hasTemp = function() {
        if (tempMarker.type === "Feature") {
          return true;
        }
        return false;
      };

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
        markers.push(marker);
      };

      this.newPermMarker = function() {
        var marker = angular.copy(tempMarker);
        marker.properties.isTemp = false;
        var id = this.getMarkerId();
        marker = angular.copy(this.geojsonObj);
        marker.geometry.coordinates = [lon, lat];
        marker.properties.title = title;
        marker.properties.unicornDesc = desc;
        marker.properties.isTemp = true;
        marker.properties.id = id;
        marker.properties.icon.className = "dot unicorn" + id;
        return marker;
      };

      this.newTempMarker = function() {
        var id = this.getMarkerId();
        tempMarker = angular.copy(this.geojsonObj);
        tempMarker.geometry.coordinates = [lon, lat];
        tempMarker.properties.title = title;
        tempMarker.properties.unicornDesc = desc;
        tempMarker.properties.isTemp = true;
        tempMarker.properties.id = id;
        tempMarker.properties.icon.className = "dot unicorn" + id;
        return tempMarker;
      };

      this.getTempMarker = function() {
        return tempMarker;
      };

    });
})();
