(function(){
    'use strict';

    /**
     * @ngdoc directive
     * @name menuApp.directive:menuLevel
     * @description
     * # menuLevel
     */
    angular.module('menuApp')
    .directive('menuLevel', function () {
        return {
            template: '<div ng-transclude></div>',
            restrict: 'E',
            replace: true,
            transclude: true,
            link: function postLink(scope, element, attrs) {
            //element.text('this is the menuLevel directive');
        }
    };
    });
})();
