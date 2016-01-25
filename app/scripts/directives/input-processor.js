'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:inputProcessor
 * @description
 * # inputProcessor
 */
angular.module('appApp')
  .directive('inputProcessor', function () {
    return {
      templateUrl: 'views/directives/input-processor.html',
      restrict: 'E',
      scope: {
          inputs: '=',
          invalid: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
