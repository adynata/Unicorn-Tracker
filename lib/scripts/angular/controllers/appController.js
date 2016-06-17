(function() {
  angular.module('unicornTracker')
    .controller('mapController', ['$scope', 'pinService', function($scope, pinService){

      $scope.title = "Unicorn Tracker";

      $scope.latlon = {
        lat: "apple",
        lon: "shrimp"
      };

      // $scope.latLongNeedsUpdate = false;

      $scope.updateLatLon = function() {

      };

      $scope.pinCanBePlaced = false;

      $scope.togglePinPermission = function() {
        $scope.pinCanBePlaced = !$scope.pinCanBePlaced;
      };


    }]);
})();
