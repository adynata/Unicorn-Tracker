(function() {
  angular.module('unicornTracker')
    .controller('unicornMapController', ['pinService', '$scope', function(pinService, $scope){

      $scope.$watch(
        function() { return $scope.tempPinReset; },
        function(newValue, oldValue) {
          if ( newValue !== oldValue ) {
            // map.removeLayer(featureLayer);
            pinService.deleteMarker();
            featureLayer.setGeoJSON(pinService.getMarkers());
          }
        }
      );

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

      // Add in styleLayer to add the Relola Mapbox style created in Mapbox Studio
      L.mapbox.styleLayer('mapbox://styles/sarah-at-relola/ciow1xhy3002parm3itex8eem').addTo(map);

      var featureLayer = L.mapbox.featureLayer().addTo(map);

      // Set a custom icon on each marker based on feature properties.
      featureLayer.on('layeradd', function(e) {
        var marker = e.layer,
          feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));
        var content = '<h2>'+ feature.properties.title+'<\/h2>';
        marker.bindPopup(content);
      });

      var updateLatLon = function(e) {
        if ($scope.canPlaceMarker) {
          $scope.pinData.lat = e.latlng.lat;
          $scope.pinData.lon = e.latlng.lng;
          $scope.$apply();
        }
      };

      map.on('click', function(e) {
        if ($scope.canPlaceMarker) {
          var lat = e.latlng.lat, lon = e.latlng.lng;
          // check lat long against currrent feature coords, if different, destroy marker and set new marker
          var newPoint = angular.copy(pinService.geojsonObj);
          newPoint.geometry.coordinates = [lon, lat];
          newPoint.properties.title = pinService.getTitle();
          pinService.addMarker(newPoint);
          console.log(pinService.getMarkers(), $scope.pinData);
          featureLayer.setGeoJSON(pinService.getMarkers());
          // $scope.canPlaceMarker = !$scope.canPlaceMarker;
          $scope.$apply();
        }
      });

      map.on('mousemove',
        (function(e) {
          updateLatLon(e);
        }.throttle(150))
      );

    }]);
})();
