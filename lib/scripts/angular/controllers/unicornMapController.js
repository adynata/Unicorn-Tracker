(function() {
  angular.module('unicornTracker')
    .controller('unicornMapController', ['pinService', '$scope', function(pinService, $scope){

      $scope.$watch(
        function() { return $scope.mapRefresh; },
        function(newValue, oldValue) {
          if ( newValue !== oldValue ) {
            featureLayer.setGeoJSON(pinService.getMarkers());
          }
        }
      );

      // Access token
      L.mapbox.accessToken = 'pk.eyJ1Ijoic2FyYWgtYXQtcmVsb2xhIiwiYSI6ImI5YzY2ZjgxNDg5MDM5ZThmNTI5OWUxNTE4ZDA0OTlmIn0.gnTiJFzNaFOeSz6zHM67wg';

      // Create the map
      var map = L.mapbox.map('map')
          .setView([37.77416, -122.23252], 11); //

      var leafletContainer = angular.element(document.getElementsByClassName('leaflet-container'));

      // Add in styleLayer to add the Relola Mapbox style created in Mapbox Studio
      L.mapbox.styleLayer('mapbox://styles/sarah-at-relola/ciow1xhy3002parm3itex8eem').addTo(map);

      var featureLayer = L.mapbox.featureLayer().addTo(map);

      // Set a custom icon on each marker based on feature properties.
      featureLayer.on('layeradd', function(e) {
        var marker = e.layer, feature = marker.feature;
        marker.setIcon(L.icon(feature.properties.icon));
        if (!feature.properties.isTemp) {
          var content = '<h2>'+ feature.properties.title +'</h2><br>' +
          '<span>'+ feature.properties.unicornDesc +'</span>';
          marker.bindPopup(content);
        }
      });

      // zooms to selected pin
      featureLayer.on('click', function(e) {
        map.panTo(e.layer.getLatLng());
      });

      var updateLatLon = function(e) {
        if ($scope.canPlaceMarker && !pinService.hasTemp()) {
          leafletContainer.css('cursor', 'crosshair');
          $scope.pinData.lat = e.latlng.lat;
          $scope.pinData.lon = e.latlng.lng;
          $scope.$apply();
        } else if ($scope.canPlaceMarker && pinService.hasTemp()) {
          leafletContainer.css('cursor', 'crosshair');
        } else {
          leafletContainer.css('cursor', '');
        }
      };

      map.on('click', function(e) {
        if ($scope.canPlaceMarker) {
          var lat = e.latlng.lat, lon = e.latlng.lng;
          $scope.pinData.lat = lat;
          $scope.pinData.lon = lon;
          pinService.setLat(lat);
          pinService.setLon(lon);

          var newTempMarker = pinService.newTempMarker();
          var tempMarkers = angular.copy(pinService.getMarkers());
          tempMarkers.push(newTempMarker);

          featureLayer.setGeoJSON(tempMarkers);
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
