/**
 * Defines ng-kit.helpers.getDateOrdinalIndicator
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Gets date ordinal indicator
     */
    .factory('getDateOrdinalIndicator', function(){
        return function(dayInMonth) {
            var remainder = dayInMonth % 10;
            if (remainder === 1) {
                return dayInMonth + 'st';
            } else if (remainder === 2) {
                return dayInMonth + 'nd';
            } else if (remainder === 3) {
                return dayInMonth + 'rd';
            } else {
                return dayInMonth+ 'th';
            }
        };
    });
})(angular);