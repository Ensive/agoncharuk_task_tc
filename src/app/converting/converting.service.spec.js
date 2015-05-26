'use strict';

describe('Convert', function () {
  var Convert;

  // include main module
  beforeEach(module('agoncharukTaskTc'));

  // injecting factory
  beforeEach(inject(function ($injector) {
    Convert = $injector.get('Convert');
  }));

  it('should count minimal amount of needed coins and form the object', function () {

    // does the function return the object
    expect(angular.isObject(Convert(1000))).toBeTruthy();

    // check the output after conversion
    expect(Convert(1000)[0].amount).toEqual(5);
  });

});
