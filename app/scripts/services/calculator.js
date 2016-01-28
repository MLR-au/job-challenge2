'use strict';

/**
 * @ngdoc service
 * @name appApp.calculator
 * @description
 * # calculator
 * Service in the appApp.
 */
angular.module('appApp')
  .service('calculator', [ '_', 'configuration', function (_, conf) {
    // AngularJS will instantiate a singleton by calling "new" on this function
      var calc = {};

      calc.calculateMonthlyGrossIncome = function(yearlyGrossIncome) {
          return _.round(yearlyGrossIncome / 12);
      };

      calc.calculateTax = function(yearlyGrossIncome) {
          // figure out the bracket
          var bracket = _.map(conf.taxRates, function(rate) {
              if (yearlyGrossIncome > rate.min && yearlyGrossIncome < rate.max) {
                  return rate;
              }
          });
          bracket = _.compact(bracket);

          // if we don't get a hit it must be the highest bracket
          if (bracket.length === 0) {
              bracket = conf.taxRates[conf.taxRates.length - 1];
          } else {
              bracket = bracket[0];
          }

          var tax = (bracket.baseTax + (yearlyGrossIncome - bracket.min - 1) * bracket.rate) / 12;
          return _.round(tax);
      };

      calc.calculateNetIncome = function(monthlyGrossIncome, tax) {
          return monthlyGrossIncome - tax;
      };

      calc.calculateSuper = function(monthlyGrossIncome, superPercentage) {
          return _.round(monthlyGrossIncome * (superPercentage / 100));
      };
    
      return calc;
  }]);
