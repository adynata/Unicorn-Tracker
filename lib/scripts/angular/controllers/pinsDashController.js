(function() {
  angular.module('unicornTracker')
    .controller('pinsController', ['pinService', '$scope', '$timeout', function(pinService, $scope, $timeout){

      var addItem = angular.element(document.getElementsByClassName('add-item'));
      var latLon = angular.element(document.getElementsByClassName('pin-latlon'));
      var mapLoc = angular.element(document.getElementsByClassName('map-loc'));
      var pinInput = angular.element(document.getElementsByClassName('pin-input'));
      var plusToggle = angular.element(document.getElementsByClassName('plus'));
      var pinList = angular.element(document.getElementsByClassName('pins-list'));

      var resetDash = function() {
        alert('collapse');
        pinInput.css("height", "0px");
        mapLoc.css("height", "50px");
        latLon.css("height", "0px");
        pinList.css("height", "calc(100% - 80px)");
        plusToggle.toggleClass('minus');
      };

      $scope.pins = pinService.getMarkers();

      $scope.clearFormFields = function() {
        $scope.title = "";
        $scope.pinData.lat = "";
        $scope.pinData.lon = "";
        $scope.desc = "";
      };

      $scope.submitPin = function() {
        alert('submitPin');
        pinService.addMarker(pinService.newPermMarker());
        console.log(pinService.getMarkers());
        $scope.setMap();
        $scope.clearFormFields();
      };

      $scope.showInput = function() {
        alert('showInput');
        if ( plusToggle.hasClass('minus') ) {
          resetDash();
          $scope.togglePinPermission();
        } else {
          pinInput.css("height", "148px");
          mapLoc.css("height", "50px");
          plusToggle.toggleClass('minus');
          pinList.css("height", "calc(100% - 230px)");
        }
        // $scope.togglePinPermission();
      };

      $scope.showLatLon = function() {
        alert('showLatLon');
        mapLoc.css("height", "0px");
        pinInput.css("height", "200px");
        latLon.css("height", "80px");
        pinList.css("height", "calc(100% - 280px)");
        $scope.togglePinPermission();
      };

      $scope.showUnicorn = function(id) {
        alert('showUnicorn');
        $timeout(function() {
          var el = document.getElementsByClassName('unicorn'+id)[0];
          el.click();
        }, 100);
      };

      $scope.updateDesc = function(desc) {
        pinService.setDesc(desc);
      };

      $scope.updateTitle = function(title) {
        console.log("TITLE CHANGE", title);
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
