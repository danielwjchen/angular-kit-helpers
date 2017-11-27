/**
 * Defines ng-kit.helpers.replaceAt
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Replaces string by index
     * @public
     * @param {string} original
     * @param {int} index
     * @param {string} replacement
     * @return {string}
     */
    .factory('replaceAt', function() {
        return function(original, index, replacement) {
            return original.substr(0, index) + 
                replacement + 
                original.substr(index + replacement.length);
        };
    });
})(angular);