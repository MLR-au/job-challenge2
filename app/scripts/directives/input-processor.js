'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:inputProcessor
 * @description
 * # inputProcessor
 */
angular.module('appApp')
  .directive('inputProcessor', [ 'inputValidator', function (iv) {
    return {
      templateUrl: 'views/directives/input-processor.html',
      restrict: 'E',
      scope: {
          inputs: '=',
          errors: '='
      },
      link: function postLink(scope, element, attrs) {
          scope.validateInputs = function() {
              var result = iv.validate(scope.rawInput);
              scope.inputs = result.inputs; 
              scope.errors = result.errors;
          };

      }
    };
  }]);
