(function() {
  angular.module('unicornTracker')
    .controller('mapController', ['$scope', 'pinService', function($scope, pinService){

      $scope.title = "Unicorn Tracker";

      $scope.pinData = {
        lat: "",
        lon: "",
      };

      $scope.pinCanBePlaced = false;
      $scope.tempPinReset = false;
      $scope.mapRefresh = false;

      $scope.togglePinPermission = function() {
        $scope.pinCanBePlaced = !$scope.pinCanBePlaced;
      };

      $scope.deleteTempPin = function() {
        $scope.tempPinReset = !$scope.tempPinReset;
      };

      $scope.setMap = function() {
        console.log("set map");
        $scope.mapRefresh = !$scope.mapRefresh;
      };


    }]);
})();
