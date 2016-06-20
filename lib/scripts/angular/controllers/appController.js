(function() {
  angular.module('unicornTracker')
    .controller('mapController', ['$scope', 'pinService', function($scope, pinService){

      $scope.title = "Unicorn Tracker";

      $scope.pinData = {
        lat: "",
        lon: "",
      };

      $scope.pinCanBePlaced = false;
      $scope.mapRefresh = false;

      $scope.togglePinPermission = function() {
        $scope.pinCanBePlaced = !$scope.pinCanBePlaced;
        console.log("STATE CHANGE", $scope.pinCanBePlaced);
      };

      $scope.setMap = function() {
        $scope.mapRefresh = !$scope.mapRefresh;
      };


    }]);
})();
