'use strict';

describe('Directive: inputProcessor', function () {

    // load the directive's module
    beforeEach(module('appApp'));
    beforeEach(module('my.templates'));

    var $compile, $rootScope, element, scope;

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        element = angular.element('<input-processor inputs="inputs" errors="errors"></input-processor>');
        element = $compile(element)(scope);
        scope.$digest();
        scope = element.isolateScope();
    }));
    
  
    it('should have a validate method', function () {
        expect(scope.validateInputs).toBeDefined();
    });

    it('should set two scope variables: inputs and errors', function() {
        scope.rawInput = 'David,Rudd,60050,9%,01 March – 31 March\n' + 
                         'Ryan,Chen,120000,10%,01 March – 31 March';
        scope.validateInputs();
        expect(scope.inputs.length).toBe(2);
        expect(scope.errors.length).toBe(0);
    });
});
