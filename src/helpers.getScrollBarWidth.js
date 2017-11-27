/**
 * Defines ng-kit.helpers.getScrollBarWidth
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.helpers')
    /**
     * Gets scroll bar width
     * @see http://stackoverflow.com/questions/8079187/how-to-calculate-the-width-of-the-scroll-bar/8079681#8079681
     */
    .factory('getScrollBarWidth', function($window) {
        return function() {
            var inner = $window.document.createElement('p'); 
            inner.style.width = "100%"; 
            inner.style.height = "200px"; 

            var outer = $window.document.createElement('div'); 
            outer.style.position = "absolute"; 
            outer.style.top = "0px"; 
            outer.style.left = "0px"; 
            outer.style.visibility = "hidden"; 
            outer.style.width = "200px"; 
            outer.style.height = "150px"; 
            outer.style.overflow = "hidden"; 
            outer.appendChild (inner); 

            $window.document.body.appendChild (outer); 
            var w1 = inner.offsetWidth; 
            outer.style.overflow = 'scroll'; 
            var w2 = inner.offsetWidth; 
            if (w1 == w2) w2 = outer.clientWidth; 

            $window.document.body.removeChild (outer); 

            return (w1 - w2);
        };
    });
})(angular);