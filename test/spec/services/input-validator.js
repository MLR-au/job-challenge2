'use strict';

describe('Service: inputValidator', function () {

    // load the service's module
    beforeEach(module('appApp'));

    // instantiate service
    var iv, validInput, invalidInput;
    beforeEach(inject(function (_inputValidator_) {
        iv = _inputValidator_;

        validInput = 'David,Rudd,60050,9%,01 March – 31 March\n' +
        'Ryan,Chen,120000,10%,01 March – 31 March';

        invalidInput = 'David,60050,9%,01 March – 31 March\n' +
        'Ryan,Chen,seventy thousand,10%,01 March – 31 March';
    }));

    it('should have a validate method', function () {
        expect(iv.validate).toBeDefined();
    });

    it('should handle valid input data', function() {
        var result = iv.validate(validInput);
        expect(result.inputs.length).toBe(2);
        expect(result.errors.length).toBe(0);
    });

    it('should handle invalid input data', function() {
        var result = iv.validate(invalidInput);
        expect(result.inputs.length).toBe(0);
        expect(result.errors.length).toBe(2);
    });

});
