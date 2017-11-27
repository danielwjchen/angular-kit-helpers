/**
 * Defines ng-kit.helpers.toDecomalPlace
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Rounds random string of number to second decimal place
     * @public
     * @param {string} randomString
     * @return {float}
     */
    .factory('toDecimalPlace', function() {
        return function(randomString) {
            return parseFloat(randomString).toFixed(2);
        };
    });
})(angular);