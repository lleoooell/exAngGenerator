'use strict';

/**
 * @ngdoc directive
 * @name genAngularApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('genAngularApp')
  .directive('myDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the myDirective directive');
      }
    };
  });
