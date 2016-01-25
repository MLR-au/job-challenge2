'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var $controller;

  // Initialize the controller 
  beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
  }));

  describe('learning', function() {
      var $scope, controller;

      beforeEach(function() {
          $scope = {};
          controller = $controller('MainCtrl', { $scope: $scope });
      });

      it('should attach a list of awesomeThings to the scope', function () {
        expect($scope.awesomeThings.length).toBe(3);
      });
      it('should have a function called monkey', function() {
          expect($scope.monkey).toBeDefined();
      });
      it('monkey should set a scope variable foo to bar', function() {
          $scope.monkey();
          expect($scope.foo).toBe('bar');
      });
  });

  describe('checking structure', function() {
      var $scope, controller; 
      beforeEach(function() {
          $scope = {};
          controller = $controller('MainCtrl', { $scope: $scope });
      });
      it('should have a method called lion', function() {
          expect($scope.lion).toBeDefined();
      });
  });
});
