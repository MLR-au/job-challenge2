'use strict';

describe('Service: calculator', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var calc, data, i, monthlyIncome;
  beforeEach(inject(function (_calculator_) {
    calc = _calculator_;
    data = [ 
        { 'salary': 16000,  'superRate': 9, 'tax': 0,    'netIncome': 1333,  'superAmount': 120  },
        { 'salary': 20345,  'superRate': 9, 'tax': 34,   'netIncome': 1661,  'superAmount': 153  },
        { 'salary': 60050,  'superRate': 9, 'tax': 922,  'netIncome': 4082,  'superAmount': 450  },
        { 'salary': 140000, 'superRate': 9, 'tax': 3312, 'netIncome': 8355,  'superAmount': 1050 },
        { 'salary': 230000, 'superRate': 9, 'tax': 6421, 'netIncome': 12746, 'superAmount': 1725 }
    ];
  }));

  it('should have a monthly gross income calculator', function () {
    expect(calc.calculateMonthlyGrossIncome).toBeDefined();
  });

  it('should have a tax calculation method', function() {
      expect(calc.calculateTax).toBeDefined();
  });
  it('should have a net income calculator', function() {
      expect(calc.calculateNetIncome).toBeDefined();
  });
  it('should have a super calculation method', function() {
      expect(calc.calculateSuper).toBeDefined();
  });

  it('should calculate the gross monthly income', function() {
      for (i=0; i < data.length; i++) {
          calc.calculateMonthlyGrossIncome(data[i].salary);
      }
  });

  it('should calculate the tax', function() {
      for (i=0; i < data.length; i++) {
          expect(calc.calculateTax(data[i].salary)).toBe(data[i].tax);
      }
  });

  it('should calculate the monthly net income', function() {
      for (i=0; i < data.length; i++) {
          monthlyIncome = calc.calculateMonthlyGrossIncome(data[i].salary);
          expect(calc.calculateNetIncome(monthlyIncome, data[i].tax)).toBe(data[i].netIncome);
      }
  });

  it('should calculate the super', function() {
      for (i=0; i < data.length; i++) {
          monthlyIncome = calc.calculateMonthlyGrossIncome(data[i].salary);
          expect(calc.calculateSuper(monthlyIncome, data[i].superRate)).toBe(data[i].superAmount);
      }
  });


});
