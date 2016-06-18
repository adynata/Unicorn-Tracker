(function() {
  angular.module('unicornTracker')
    .controller('mapController', ['$scope', 'pinService', function($scope, pinService){

      $scope.title = "Unicorn Tracker";

      $scope.pinData = {
        lat: "",
        lon: "",
        title: "",
        desc: ""
      };

      $scope.pinCanBePlaced = false;
      $scope.tempPinReset = false;

      $scope.togglePinPermission = function() {
        $scope.pinCanBePlaced = !$scope.pinCanBePlaced;
      };

      $scope.deleteTempPin = function() {
        $scope.tempPinReset = !$scope.tempPinReset;
      };


    }]);
})();
