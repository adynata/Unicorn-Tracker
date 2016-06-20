(function() {
  angular.module('unicornTracker')
    .controller('pinsController', ['pinService', '$scope', '$timeout', function(pinService, $scope, $timeout){

      var addItem = angular.element(document.getElementsByClassName('add-item'));
      var latLon = angular.element(document.getElementsByClassName('pin-latlon'));
      var mapLoc = angular.element(document.getElementsByClassName('map-loc'));
      var pinInput = angular.element(document.getElementsByClassName('pin-input'));
      var plusToggle = angular.element(document.getElementsByClassName('plus'));
      var pinList = angular.element(document.getElementsByClassName('pins-list'));

      $scope.pins = pinService.getMarkers();

      var refreshPinSettings = function() {
        pinService.clearTempMarker();
        pinService.setTitle("");
        pinService.setDesc("");
        pinService.setLat("");
        pinService.setLon("");
      };

      var resetDash = function() {
        pinInput.css("height", "0px");
        mapLoc.css("height", "50px");
        latLon.css("height", "0px");
        pinList.css("height", "calc(100% - 80px)");
        plusToggle.toggleClass('minus');
      };

      $scope.clearFormFields = function() {
        $scope.title = "";
        $scope.pinData.lat = "";
        $scope.pinData.lon = "";
        $scope.desc = "";
        refreshPinSettings();
        $scope.setMap();
      };

      $scope.submitPin = function() {
        alert('submitPin');
        pinService.addMarker(pinService.newPermMarker());
        pinService.clearTempMarker();
        $scope.clearFormFields();
      };

      $scope.showInput = function() {
        if ( plusToggle.hasClass('minus') ) {
          resetDash();
          $scope.setMap();
          $scope.togglePinPermission();
        } else {
          pinInput.css("height", "148px");
          mapLoc.css("height", "50px");
          plusToggle.toggleClass('minus');
          pinList.css("height", "calc(100% - 230px)");
        }
      };

      $scope.showLatLon = function() {
        mapLoc.css("height", "0px");
        pinInput.css("height", "200px");
        latLon.css("height", "80px");
        pinList.css("height", "calc(100% - 280px)");
        $scope.togglePinPermission();
      };

      $scope.showUnicorn = function(id) {
        $timeout(function() {
          var el = document.getElementsByClassName('unicorn'+id)[0];
          el.click();
        }, 100);
      };

      $scope.updateDesc = function(desc) {
        pinService.setDesc(desc);
      };

      $scope.updateTitle = function(title) {
        pinService.setTitle(title);
      };

      $scope.updateLat = function(lat) {
        pinService.setLat(lat);
      };

      $scope.updateLon = function(lon) {
        pinService.setLon(lon);
      };

      $scope.resetDash = resetDash;

    }]);
})();
