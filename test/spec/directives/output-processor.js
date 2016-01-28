'use strict';

describe('Directive: outputProcessor', function () {

    // load the directive's module
    beforeEach(module('appApp'));
    beforeEach(module('my.templates'));

    var $compile, $rootScope, element, scope;

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        element = angular.element('<output-processor inputs="inputs"></output-processor>');
        element = $compile(element)(scope);
        scope.$digest();
        scope = element.isolateScope();

        scope.inputs = [
            { 'fullName': 'David Rudd', 'payPeriod': '01 March – 31 March', 'salary': 60050, 'superRate': 9 }, 
            { 'fullName': 'Ryan Chen', 'payPeriod': '01 March – 31 March', 'salary': 120000, 'superRate': 10}
        ];
        scope.createOutput();
    }));

    it('should have a method to create the output data structure', function() {
        expect(scope.createOutput).toBeDefined();
    });
    it('should create an output scope variable', function() {
        expect(scope.output).toBeDefined();
    });
    it('should create an output scope variable with 2 elements', function() {
        expect(scope.output.length).toBe(2);
    });

});
