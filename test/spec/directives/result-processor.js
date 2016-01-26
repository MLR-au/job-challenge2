'use strict';

describe('Directive: resultProcessor', function () {

    // load the directive's module
    beforeEach(module('appApp'));
    beforeEach(module('my.templates'));

    var $compile, $rootScope, element, scope;

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        element = angular.element('<result-processor errors="errors"></result-processor>');
        element = $compile(element)(scope);
        scope.$digest();
        scope = element.isolateScope();
    }));
});
