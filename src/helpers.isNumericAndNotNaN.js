/**
 * Defines ng-kit.helpers.isNumericAndNotNaN
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Checks if a variable is numeric and not NaN
     */
    .factory('isNumericAndNotNaN', function(){
        return function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
    });
})(angular);