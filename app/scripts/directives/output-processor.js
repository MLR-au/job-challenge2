'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:outputProcessor
 * @description
 * # outputProcessor
 */
angular.module('appApp')
  .directive('outputProcessor', [ 'calculator', '_', function (calc, _) {
    return {
      templateUrl: 'views/directives/output-processor.html',
      restrict: 'E',
      scope: {
          inputs : '='
      },
      link: function postLink(scope, element, attrs) {
          scope.$watch('inputs', function() {
              scope.createOutput();
          }, true);

          scope.createOutput = function() {
              scope.output = _.map(scope.inputs, function(input) {
                  var monthlyGrossIncome = calc.calculateMonthlyGrossIncome(input.salary);
                  var tax = calc.calculateTax(input.salary);
                  return {
                      'name': input.fullName,
                      'period': input.payPeriod,
                      'grossIncome': monthlyGrossIncome,
                      'tax': tax,
                      'netIncome': calc.calculateNetIncome(monthlyGrossIncome, tax),
                      'super': calc.calculateSuper(monthlyGrossIncome, input.superRate)
                  }
              });
          };
      }
    };
  }]);
