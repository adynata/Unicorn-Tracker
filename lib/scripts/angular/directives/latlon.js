(function() {
  var LATLON_REGEXP = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}");


  angular.module('unicornTracker')
    .directive('latlonValid', function() {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$validators.latlon = function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
              // consider empty models to be invalid
              return false;
            }

            if (LATLON_REGEXP.test(viewValue)) {
              // it is valid
              return true;
            }

            // it is invalid
            return false;
          };
        }
      };
    });
})();
