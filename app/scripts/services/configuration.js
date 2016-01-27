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
          { 'min': 0,      'max': 18200,   'baseRate': 0,     'plus': 0     },
          { 'min': 18201,  'max': 37000,   'baseRate': 0,     'plus': 0.190 },
          { 'min': 37001,  'max': 80000,   'baseRate': 3572,  'plus': 0.325 },
          { 'min': 80001,  'max': 180000,  'baseRate': 17547, 'plus': 0.370 },
          { 'min': 180001, 'max': '',      'baseRate': 54547, 'plus': 0.450 }
      ]
  });
