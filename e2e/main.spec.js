'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./main.po');
  });

  it('should include header and footer with correct data', function() {
    expect(page.h1El.getText()).toBe('Coinage v1.0');
    expect(page.footerLink.getText()).toBe('Coinage');
  });

});
