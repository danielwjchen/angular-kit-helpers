/**
 * Defines ng-kit.helpers.debounce
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Returns a function, that, as long as it continues to be invoked, will not
     * be triggered. The function will be called after it stops being called for
     * N milliseconds. If `immediate` is passed, trigger the function on the
     * leading edge, instead of the trailing.
     *
     * @note Stolen from Underscore.js
     */
    .factory('debounce', function($timeout) {
        return function(func, wait, immediate) {
            var timeoutHandle;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeoutHandle = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                if (timeoutHandle) {
                    $timeout.cancel(timeoutHandle);
                }
                timeoutHandle = $timeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };
    });
})(angular);