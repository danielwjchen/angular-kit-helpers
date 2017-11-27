/**
 * Defines ng-kit.helpers.isSmallScreen
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Checks if device has small screen
     */
    .factory('isSmallScreen', function($window) {
        return function() {
            return parseInt($window.innerWidth, 10) < 768;
        };
    });
})(angular);