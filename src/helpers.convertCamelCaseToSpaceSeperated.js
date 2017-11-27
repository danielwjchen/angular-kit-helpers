/**
 * Defines ng-kit.helpers.convertCamelCaseToSpaceSeperated
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Converts a string from camel case to space seperated
     */
    .factory('convertCamelCaseToSpaceSeperated', function() {
        return function(string) {
            var stringPieces = string.split(/(?=[A-Z])/);
            return stringPieces.join(' ');
        };
    });
})(angular);