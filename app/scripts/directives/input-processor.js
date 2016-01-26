'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:inputProcessor
 * @description
 * # inputProcessor
 */
angular.module('appApp')
  .directive('inputProcessor', [ '_', function (_) {
    return {
      templateUrl: 'views/directives/input-processor.html',
      restrict: 'E',
      scope: {
          inputs: '=',
          errors: '='
      },
      link: function postLink(scope, element, attrs) {
          scope.validateInputs = function() {
              scope.inputs = [];
              scope.errors = [];
              _.each(scope.rawInput.split('\n'), function(input) {
                  var fields = input.split(',')
                  if (fields.length == 5) {
                      scope.inputs.push(input);
                  } else {
                      scope.errors.push(input);
                  }
              });
          };

      }
    };
  }]);
