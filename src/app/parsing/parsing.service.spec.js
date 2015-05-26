'use strict';

describe('Parsing function', function () {
  var $rootScope, $scope, service;

  beforeEach(function () {
    module('agoncharukTaskTc');

    inject(function () {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      service = $injector.get('$service')('Parse', { $scope: $scope});
    });
  });

  //beforeEach(inject('agoncharukTaskTc'));

  //before
});
