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
              // this method is called by ng-change so we use debounce
              //  to run it only after a second has passed since 
              //  the last change
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
