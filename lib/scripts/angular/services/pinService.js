(function() {
  angular.module('unicornTracker')
    .service('pinService', function() {

      var markers = [];
      var markerId = 2;
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
          "unicornTitle": "",
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
        var id = this.getMarkerId();
        var marker = angular.copy(this.geojsonObj);
        marker.geometry.coordinates = [lon, lat];
        marker.properties.unicornTitle = title;
        marker.properties.unicornDesc = desc;
        marker.properties.isTemp = false;
        marker.properties.id = id;
        marker.properties.icon.className = "dot unicorn" + id;
        return marker;
      };

      this.newTempMarker = function() {
        var id = this.getMarkerId();
        tempMarker = angular.copy(this.geojsonObj);
        tempMarker.geometry.coordinates = [lon, lat];
        tempMarker.properties.isTemp = true;
        tempMarker.properties.id = id;
        tempMarker.properties.icon.className = "dot unicorn" + id;
        return tempMarker;
      };

      this.clearTempMarker = function() {
        tempMarker = {};
      };

      this.getTempMarker = function() {
        return tempMarker;
      };

      this.fakeUnicorns = [{
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-122.4103546142578, 37.64223791838213]
          },
          "properties": {
            "title": "",
            "unicornTitle": "Unicornicopia",
            "unicornDesc": "A rare beast, but prone to excesses. If you should find yourself out for a night on the town with the unicornicopia you would be well advised to keep track of the time, your passport, and your bank account. It makes manifest the most magnificent forms of scope creep.",
            "id": "0",
            "image": "lib/images/unicorn.png",
            "icon": {
                "iconUrl": "lib/images/unicorn.png",
                "iconSize": [30, 30], // size of the icon
                "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
                "className": "dot unicorn" + 0
            }
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-122.47352600097658, 37.821175249016726]
          },
          "properties": {
            "title": "",
            "unicornTitle": "Hippocampus aureus",
            "unicornDesc": "Hippocampus aureus, sometimes known as the Golden Merhorse, is endemic to the San Francisco Bay, and prefers the watery straights adjacent to bridges.",
            "id": "1",
            "image": "lib/images/unicorn.png",
            "icon": {
                "iconUrl": "lib/images/unicorn.png",
                "iconSize": [30, 30], // size of the icon
                "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
                "className": "dot unicorn" + 1
            }
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-122.2613525390625, 37.81737834565083]
          },
          "properties": {
            "title": "",
            "unicornTitle": "Common Sparkle Pony",
            "unicornDesc": "Found throughout the Western United States, the Common Sparkle Pony lacks a horn, but is genetically similar enough to unicorns to be considered kin. The Common Sparkle Pony has adapted well to city dwelling, much like the raccoon and the pigeon.",
            "id": "2",
            "image": "lib/images/unicorn.png",
            "icon": {
                "iconUrl": "lib/images/unicorn.png",
                "iconSize": [30, 30], // size of the icon
                "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
                "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
                "className": "dot unicorn" + 2
            }
          }
        }
      ];

    });
})();
