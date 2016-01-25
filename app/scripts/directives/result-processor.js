'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:resultProcessor
 * @description
 * # resultProcessor
 */
angular.module('appApp')
  .directive('resultProcessor', function () {
    return {
      templateUrl: 'views/directives/result-processor.html',
      restrict: 'E',
      scope: {
          errors: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
