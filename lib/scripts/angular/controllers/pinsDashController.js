(function() {

  angular.module('unicornTracker')
    .controller('pinsController', ['initValsService', 'pinService', '$scope', '$timeout', function(initValsService, pinService, $scope, $timeout){

      var addItem = angular.element(document.getElementsByClassName('add-item'));
      var latLon = angular.element(document.getElementsByClassName('pin-latlon'));
      var mapLoc = angular.element(document.getElementsByClassName('map-loc'));
      var pinInput = angular.element(document.getElementsByClassName('pin-input'));
      var plusToggle = angular.element(document.getElementsByClassName('plus'));
      var pinList = angular.element(document.getElementsByClassName('pins-list'));

      var init = function() {
        latLon.addClass("collapse");
        pinInput.addClass("collapse");
      };

      init();

      $scope.pins = pinService.getMarkers();

      $scope.$watch(
        function() { return $scope.pinData.lat; },
        function(newValue, oldValue) {
          if ( newValue !== oldValue ) {
            if (newValue >= -90 && newValue <= 90) {
              $scope.latInput = initValsService.latLonValidColor;
            } else {
              $scope.latInput = initValsService.latLonInvalidColor;
            }
          }
        }
      );

      $scope.$watch(
        function() { return $scope.pinData.lon; },
        function(newValue, oldValue) {
          if ( newValue !== oldValue ) {
            if (newValue >= -180 && newValue <= 180) {
              $scope.lonInput = initValsService.latLonValidColor;
              $scope.latLonInvalid = false;
            } else {
              $scope.lonInput = initValsService.latLonInvalidColor;
              $scope.latLonInvalid = true;
            }
          }
        }
      );

      var openDash = function() {
        pinInput.removeClass("collapse");
        mapLoc.removeClass("collapse");
        pinList.css("height", "calc(100% - 230px)");
        plusToggle.toggleClass('minus');
      };

      var refreshPinSettings = function() {
        pinService.clearTempMarker();
        pinService.setTitle("");
        pinService.setDesc("");
        pinService.setLat("");
        pinService.setLon("");
      };

      var resetDash = function() {
        pinInput.removeClass("pin-input-full");
        pinInput.addClass("collapse");
        mapLoc.removeClass("collapse");
        latLon.addClass("collapse");
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

      $scope.latLonInvalid = true;

      $scope.submitPin = function() {
        pinService.addMarker(pinService.newPermMarker());
        pinService.clearTempMarker();
        $scope.clearFormFields();
      };

      $scope.toggleDash = function() {
        if ( plusToggle.hasClass('minus') ) {
          resetDash();
          $scope.setMap();
          $scope.deactivatePinPermission();
        } else {
          openDash();
        }
      };

      $scope.showLatLon = function() {
        mapLoc.addClass("collapse");
        pinInput.removeClass("collapse");
        pinInput.addClass("pin-input-full");
        latLon.removeClass("collapse");
        pinList.css("height", "calc(100% - 280px)");
        $scope.activatePinPermission();
      };

      $scope.showUnicorn = function(id) {
        $timeout(function() {
          console.log(id);
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
        if (lat >= -90 && lat <= 90) {
          $scope.latInput = initValsService.latLonValidColor;
          $scope.latLonInvalid = false;
        } else {
          $scope.latInput = initValsService.latLonInvalidColor;
          $scope.latLonInvalid = true;
        }
        pinService.setLat(lat);
      };

      $scope.updateLon = function(lon) {
        if (lon >= -180 && lon <= 180) {
          $scope.lonInput = initValsService.latLonValidColor;
          $scope.latLonInvalid = false;
        } else {
          $scope.lonInput = initValsService.latLonInvalidColor;
          $scope.latLonInvalid = true;
        }
        pinService.setLon(lon);
      };

      $scope.latInput = initValsService.latLonValidColor;
      $scope.lonInput = initValsService.latLonValidColor;

      $scope.resetDash = resetDash;

    }]);
})();
