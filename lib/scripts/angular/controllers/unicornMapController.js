(function() {
  angular.module('unicornTracker')
    .controller('unicornMapController', ['pinService', '$scope', function(pinService, $scope){

      $scope.$watch(
        function() { return $scope.tempPinReset; },
        function(newValue, oldValue) {
          if ( newValue !== oldValue ) {
            // map.removeLayer(featureLayer);
            geojsonCollection.pop();
            featureLayer.setGeoJSON(geojsonCollection);
          }
        }
      );

      var markerId = 0;
      $scope.saved = localStorage.getItem('pins');
    	$scope.pins = (localStorage.getItem('pins')!==null) ? JSON.parse($scope.saved) : [];

    	localStorage.setItem('pins', JSON.stringify($scope.pins));

    	$scope.addTodo = function() {
    		$scope.pins.push({
    			name: $scope.unicornName,
    			desc: $scope.unicornDesc
    		});

         // clear the input after adding
    		$scope.unicornName = '';
        $scope.unicornDesc = '';

    		localStorage.setItem('pins', JSON.stringify($scope.pins));
    	};

      // Access token
      L.mapbox.accessToken = 'pk.eyJ1Ijoic2FyYWgtYXQtcmVsb2xhIiwiYSI6ImI5YzY2ZjgxNDg5MDM5ZThmNTI5OWUxNTE4ZDA0OTlmIn0.gnTiJFzNaFOeSz6zHM67wg';

      // Create the map
      var map = L.mapbox.map('map')
          .setView([37.77416, -122.23252], 11); //

      var featureLayer = L.mapbox.featureLayer().addTo(map);

      var geojsonCollection = [];

      var geojsonObj = {
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
              "className": "dot"
          }
        }
      };

      // Add in styleLayer to add the Relola Mapbox style created in Mapbox Studio
      L.mapbox.styleLayer('mapbox://styles/sarah-at-relola/ciow1xhy3002parm3itex8eem').addTo(map);

      var updateLatLon = function(e) {
        if ($scope.canPlaceMarker) {
          $scope.latlon.lat = e.latlng.lat;
          $scope.latlon.lon = e.latlng.lng;
          $scope.$apply();
        }
      };

      map.on('click', function(e) {
        if ($scope.canPlaceMarker) {

          // Set a custom icon on each marker based on feature properties.
          featureLayer.on('layeradd', function(e) {
            console.log("adding layer");
            var marker = e.layer,
              feature = marker.feature;
            marker.setIcon(L.icon(feature.properties.icon));
            var content = '<h2>'+ feature.properties.title+'<\/h2>';
            marker.bindPopup(content);
          });

          var lat = e.latlng.lat, lon = e.latlng.lng;
          // check lat long against currrent feature coords, if different, destroy marker and set new marker
          var newPoint = angular.copy(geojsonObj);
          newPoint.geometry.coordinates = [lon, lat];
          geojsonCollection.push(newPoint);
          console.log(geojsonCollection);
          featureLayer.setGeoJSON(geojsonCollection);
          // $scope.canPlaceMarker = !$scope.canPlaceMarker;
        }
      });

      map.on('mousemove',
        (function(e) {
          updateLatLon(e);
        }.throttle(150))
      );

    }]);
})();
