/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.headerEl = element(by.css('.header'));
  this.h1El = this.headerEl.element(by.css('.header__title'));
  this.footerEl = element(by.css('.footer'));
  this.footerLink = this.footerEl.element(by.css('.footer__link'));
};

module.exports = new MainPage();
