'use strict';

describe('MainCtrl', function () {
  var $rootScope, $scope, controller;

  // include main module
  beforeEach(module('agoncharukTaskTc'));

  // injecting scopes, controller
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    controller = $injector.get('$controller')('MainCtrl', { $scope: $scope });
  }));

  // custom functions
  function isValueNull(val) {
    expect(val).toBeNull();
  }

  /**
   * Helper function to check how the parsing function works
   * @param {String|Number} inputVal
   * @param {Number} outputVal
   */
  function isCorrectlyParsed(inputVal, outputVal) {
    $scope.pennies = inputVal;
    $scope.submit($scope.pennies);
    expect($scope.penniesFiltered).toEqual(outputVal);
  }

  // assert pennies value
  describe('$scope.pennies', function () {
    it('should be null', function () {
      isValueNull($scope.pennies);
    });
  });

  // assert submit function
  describe('$scope.submit', function () {
    it('should be a function', function () {
      expect(angular.isFunction($scope.submit)).toBeTruthy();
    });
  });

  // assert coins
  describe('$scope.coins', function () {
    it('should be a null', function () {
      isValueNull($scope.coins);
    });
  });

  // assert penniesFiltered
  describe('$scope.penniesFiltered', function () {
    it('should be undefined', function () {
      expect($scope.penniesFiltered).toBeUndefined();
    });
  });

  // after execution of the submit function
  describe('$scope.submit function', function () {

    // check for correct parsing
    it('should parse the input value', function () {
      // test simple digits
      isCorrectlyParsed(4, 4);
      isCorrectlyParsed(85, 85);

      // test simple strings with 'p'
      isCorrectlyParsed('197p', 197);
      isCorrectlyParsed('2p', 2);

      // test value with decimal point
      isCorrectlyParsed(1.87, 187);

      // test common input values
      isCorrectlyParsed('£1.23', 123);
      isCorrectlyParsed('£2', 200);
      isCorrectlyParsed('£10', 1000);
      isCorrectlyParsed('£1.87p', 187);
      isCorrectlyParsed('£1p', 100);
      isCorrectlyParsed('£1.p', 100);
      isCorrectlyParsed('001.41p', 141);
      isCorrectlyParsed('4.235p', 424);
      isCorrectlyParsed('£1.257422457p', 126);

      // test the behavior when use typed non-valid entries
      isCorrectlyParsed('customStringWithoutDigits', 0);
      isCorrectlyParsed(null, 0);
      isCorrectlyParsed('', 0);
      isCorrectlyParsed(undefined, 0);
      isCorrectlyParsed('1x', 0);
      isCorrectlyParsed('£1x.0p', 0);
      isCorrectlyParsed('£p', 0);
      isCorrectlyParsed('£££150p', 0);
      isCorrectlyParsed('£150ppp', 0);
    });

    it('should calculate the minimum number of Sterling coins to make that amount (input value)', function () {
      $scope.pennies = '123p';
      $scope.submit($scope.pennies);

      // £2
      expect($scope.coins[0].amount).toEqual(0);

      // £1
      expect($scope.coins[1].amount).toEqual(1);

      // 50p
      expect($scope.coins[2].amount).toEqual(0);

      // 20p
      expect($scope.coins[3].amount).toEqual(1);

      // 2p
      expect($scope.coins[4].amount).toEqual(1);

      // 1p
      expect($scope.coins[5].amount).toEqual(1);

      // additional check with loop
      $scope.pennies = '373p';
      $scope.submit($scope.pennies);

      for (var i = 0, length = $scope.coins.length; i < length; i += 1) {
        expect($scope.coins[i].amount).toEqual(1);
      }

    });

  });

});
