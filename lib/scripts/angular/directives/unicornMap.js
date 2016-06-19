(function() {
  angular.module('unicornTracker')
    .directive('unicornMap', function() {
      return {
        controller: 'unicornMapController',
        restrict: 'E',
        scope: {
          canPlaceMarker: '=',
          tempPinReset: '=',
          pinData: '=',
          mapRefresh: '='
        }
      };
    });
})();
