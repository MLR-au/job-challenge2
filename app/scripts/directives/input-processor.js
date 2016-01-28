'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:inputProcessor
 * @description
 * # inputProcessor
 */
angular.module('appApp')
  .directive('inputProcessor', [ 'inputValidator', '_', function (iv, _) {
    return {
      templateUrl: 'views/directives/input-processor.html',
      restrict: 'E',
      scope: {
          inputs: '=',
          errors: '='
      },
      link: function postLink(scope, element, attrs) {
          scope.validateInputs = function() {
              _.debounce(function() {
                  scope.$apply(function() {
                      var result = iv.validate(scope.rawInput);
                      scope.inputs = result.inputs; 
                      scope.errors = result.errors;
                  });
              }, 1000)();
          };

      }
    };
  }]);
