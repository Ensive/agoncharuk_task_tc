'use strict';

describe('Main Ctrl', function(){
  var $rootScope, $scope, controller;

  // include main module
  beforeEach(module('agoncharukTaskTc'));

  // injecting
  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    controller = $injector.get('$controller')('MainCtrl', { $scope: $scope });
  }));

  // pennies value
  describe('Pennies', function () {
    it('initially should be null', function () {
      expect($scope.pennies).toBeNull();
    });
  });

  // submit function
  describe('Submit', function () {
    it('should be a function', function () {
      expect(angular.isFunction($scope.submit)).toBeTruthy();
    });
  });

  // coins
  describe('Coins', function () {
    it('should be a null initially')
  })

});
