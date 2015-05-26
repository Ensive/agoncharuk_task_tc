'use strict';

describe('Parse', function () {
  var Parse;

  // include main module
  beforeEach(module('agoncharukTaskTc'));

  // injecting factory
  beforeEach(inject(function ($injector) {
    Parse = $injector.get('Parse');
  }));

  it('should parse a string and return a number', function () {
    expect(Parse('£1000p')).toEqual(100000);
    expect(Parse('£10.40p')).toEqual(1040);
    expect(Parse('£2')).toEqual(200);
  });

});
