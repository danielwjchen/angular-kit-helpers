/**
 * Defines ng-kit.helpers.rgbToHex
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Converts rgb to hex
     */
    .factory('rgbToHex', function() {
        var componentToHex = function (c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        };

        return function(r, g, b) {
            return componentToHex(r) + componentToHex(g) + componentToHex(b);
        };
    });
})(angular);