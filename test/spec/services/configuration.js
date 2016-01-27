'use strict';

describe('Service: configuration', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var configuration;
  beforeEach(inject(function (_configuration_) {
    configuration = _configuration_;
  }));

  it('should have a taxRates property', function () {
    expect(configuration.taxRates).toBeDefined();
  });

  it('taxRates should be an array of 5 elements', function() {
      expect(configuration.taxRates.length).toBe(5);
  });

});
