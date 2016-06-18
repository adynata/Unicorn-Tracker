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
          pinData: '=',
        },
        templateUrl: 'lib/scripts/angular/templates/pinsDash.html'
      };
    });
})();
