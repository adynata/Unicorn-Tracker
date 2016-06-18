(function() {
  angular.module('unicornTracker')
    .directive('pinsDashboard', function() {
      return {
        controller: 'pinsController',
        restrict: 'E',
        transclude: true,
        scope: {
          data: '=',
          pinCanBePlaced: '&',
          deleteTempPin: '&',
          latlon: '=',
        },
        templateUrl: 'lib/scripts/angular/templates/pinsDash.html'
      };
    });
})();
