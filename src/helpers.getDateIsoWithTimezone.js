/**
 * Defines ng-kit.helpers.getDateOrdinalIndicator
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')

    /**
     * Gets date from string in ISO format with timezone
     * @see https://stackoverflow.com/questions/17415579/how-to-iso-8601-format-a-date-with-timezone-offset-in-javascript
     */
    .factory('getDateIsoWithTimezone', function() {
        var pad = function(num) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? '0' : '') + norm;
        };
        return function(date) {
            var tzo = -date.getTimezoneOffset(),
                dif = tzo >= 0 ? '+' : '-';
            return date.getFullYear() +
                   '-' + pad(date.getMonth() + 1) +
                   '-' + pad(date.getDate()) +
                   'T' + pad(date.getHours()) +
                   ':' + pad(date.getMinutes()) +
                   ':' + pad(date.getSeconds()) +
                   dif + pad(tzo / 60) +
                   ':' + pad(tzo % 60);
        };
    });
})(angular);
