'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:outputProcessor
 * @description
 * # outputProcessor
 */
angular.module('appApp')
  .directive('outputProcessor', function () {
    return {
      templateUrl: 'views/directives/output-processor.html',
      restrict: 'E',
      scope: {
          inputs : '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
