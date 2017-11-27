/**
 * Defines ng-kit.helpers.getRandomNumberInRange
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Gets random number in given range
     * @public
     * @param {int} min
     * @param {int} max
     * @return {int}
     */
    .factory('getRandomNumberInRange', function() {
        return function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    });
})(angular);