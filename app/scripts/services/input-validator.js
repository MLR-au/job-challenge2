'use strict';

/**
 * @ngdoc service
 * @name appApp.inputValidator
 * @description
 * # inputValidator
 * Service in the appApp.
 */
angular.module('appApp')
  .service('inputValidator', [ '_', function (_) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var iv = {};
    iv.config = {
        nInputFields: 5
    };

    iv.validate = function(input) {
        // expecting a text blob with new lines
        var valid = [], invalid = [];
        _.each(input.split('\n'), function(input) {
            var fields = input.split(',');
            var inputIsValid = [];

            inputIsValid.push(iv.isExpectedLength(fields));
            inputIsValid.push(iv.salaryFieldIsNumber(fields[2]));

            if (_.flatten(inputIsValid).indexOf(false) !== -1) {
                invalid.push({
                    'input': input,
                    'errors': _.difference(_.flatten(inputIsValid), [ true, false ])
                });
            } else {
                valid.push({
                    'fullName': fields[0] + ' ' + fields[1],
                    'payPeriod': fields[4],
                    'salary': parseInt(fields[2]),
                    'superRate': parseInt(_.trim(fields[3], '%'))
                });
            }
        });
        return { inputs: valid, errors: invalid };
    };

    iv.isExpectedLength = function(data) {
        if (data.length === iv.config.nInputFields) { 
            return true;
        } else {
            return [ false, 'Incorrect number of fields' ];
        }
    };

    iv.salaryFieldIsNumber = function(data) {
        if (parseInt(data)) {
            return true;
        } else {
            return [ false, 'Salary invalid' ];
        }
    };

    return iv;
  }]);
