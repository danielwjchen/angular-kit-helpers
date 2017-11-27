/**
 * Defines ng-kit.helpers.getDateFromString
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Gets date from string in yyyy-MM-dd format
     *
     * @note This is created to solve the problem with javascript 
     *       automatically adds local timezone
     */
    .factory('getDateFromString', function() {
        return function(dateString) {
            var pieces = dateString.split('-');
            return new Date(pieces[0], parseInt(pieces[1], 10) - 1, pieces[2]);
        };
    });
})(angular);