(function() {
  angular.module('unicornTracker')
    .controller('pinsController', ['pinService', '$scope', function(pinService, $scope){

      var addItem = angular.element(document.getElementsByClassName('add-item'));
      var latLon = angular.element(document.getElementsByClassName('pin-latlon'));
      var mapLoc = angular.element(document.getElementsByClassName('map-loc'));
      var pinInput = angular.element(document.getElementsByClassName('pin-input'));
      var plusToggle = angular.element(document.getElementsByClassName('plus'));

      $scope.pins = pinService.getMarkers();

      var resetFields = function() {
        pinInput.css("height", "0px");
        mapLoc.css("height", "50px");
        latLon.css("height", "0px");
        plusToggle.toggleClass('minus');
        $scope.deleteTempPin();
        $scope.pinCanBePlaced();
      };

      $scope.submitPin = function() {

      };

      $scope.showInput = function() {
        if ( plusToggle.hasClass('minus') ) {
          resetFields();
        } else {
          pinInput.css("height", "148px");
          mapLoc.css("height", "50px");
          plusToggle.toggleClass('minus');
        }
      };

      $scope.showLatLon = function() {
        mapLoc.css("height", "0px");
        pinInput.css("height", "200px");
        latLon.css("height", "80px");
        $scope.pinCanBePlaced();
      };

      $scope.resetFields = resetFields;


    }]);
})();
