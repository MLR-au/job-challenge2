'use strict';

/**
 * @ngdoc service
 * @name appApp.configuration
 * @description
 * # configuration
 * Constant in the appApp.
 */
angular.module('appApp')
  .constant('configuration', {
      taxRates: [
          { 'min': 0,      'max': 18200,   'baseTax': 0,     'rate': 0     },
          { 'min': 18201,  'max': 37000,   'baseTax': 0,     'rate': 0.190 },
          { 'min': 37001,  'max': 80000,   'baseTax': 3572,  'rate': 0.325 },
          { 'min': 80001,  'max': 180000,  'baseTax': 17547, 'rate': 0.370 },
          { 'min': 180001, 'max': '',      'baseTax': 54547, 'rate': 0.450 }
      ]
  });
