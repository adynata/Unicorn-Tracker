(function() {
  angular.module('unicornTracker')
    .controller('mapController', ['$scope', 'pinService', 'initValsService', function($scope, pinService, initValsService){

      $scope.title = "Unicorn Tracker";

      $scope.pinData = {
        lat: "",
        lon: "",
      };

      $scope.pinCanBePlaced = false;
      $scope.mapRefresh = false;

      $scope.pinPermissionDeactivated = function() {
        $scope.pinCanBePlaced = false;
      };

      $scope.pinPermissionActivated = function() {
        $scope.pinCanBePlaced = true;
      };

      $scope.setMap = function() {
        $scope.mapRefresh = !$scope.mapRefresh;
      };


    }]);
})();
