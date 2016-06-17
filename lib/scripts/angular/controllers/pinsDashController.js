(function() {
  angular.module('unicornTracker')
    .controller('pinsController', ['pinService', '$scope', function(pinService, $scope){
      // $scope.pins = pinService.getMarkers();

      // $scope.pinService = pinService;

      $scope.$watch(
        function() { return $scope.latlon; },
        function(newVal) {
          console.log('WATCH TRIGGERS');
        }
      );


      var addItem = angular.element(document.getElementsByClassName('add-item'));
      var latLon = angular.element(document.getElementsByClassName('pin-latlon'));
      var mapLoc = angular.element(document.getElementsByClassName('map-loc'));
      var pinDetails = angular.element(document.getElementsByClassName('pin-details'));
      var pinInput = angular.element(document.getElementsByClassName('pin-input'));
      var plusToggle = angular.element(document.getElementsByClassName('plus'));

      var resetFields = function() {
        pinInput.css("height", "0px");
        mapLoc.css("height", "50px");
        latLon.css("height", "0px");
        plusToggle.toggleClass('minus');
        $scope.pinCanBePlaced();
      };

      $scope.showInput = function() {
        if ( plusToggle.hasClass('minus') ) {
          resetFields();
        } else {
          pinInput.css("height", "120px");
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
