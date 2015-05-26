/**
 * Service for parsing pennies string
 */
(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .factory('Parse', ParseService);

  function ParseService() {
    return Parse;

    // main parse function
    function Parse(string) {

      // check for invalid inputs
      if (string === '' || string === null || string === undefined) {
        console.log('Value is invalid.');
        return 0;
      }

      // convert input value to string
      var str = string.toString();

      // "flags" for pound and pence symbols
      var matchPound = str.match(/£/g) ? str.match(/£/g).length === 1 && str.match(/^£/g).length === 1 : false;
      var matchPence = str.match(/p/gi) ? str.match(/p/gi).length === 1 && str.match(/p$/gi).length === 1 : false;

      // check for symbols in the string
      if (matchPound && matchPence) {
        // remove symbols
        str = str.replace('£', '').replace('p', '');

        // in case of existing dots use a function, or just multiply by 100
        return str.match(/\./g) ? processingStringWithDot(str) : parseFloat(str) * 100;

      } else if (matchPound) {
        // remove pound symbol
        str = str.replace('£', '');

        // in case of existing dots use a function, or just multiply by 100
        return str.match(/\./g) ? processingStringWithDot(str) : parseFloat(str) * 100;

      } else if (matchPence) {
        // remove pence symbol
        str = str.replace('p', '');
        return str.match(/\./g) ? processingStringWithDot(str) : parseFloat(str);

      } else {
        // no matches for pence and pound
        console.log('Default number');
        console.log('Default string', str);
        return processingStringWithDot(str);
      }

    }

    /**
     * Helper function to process strings with dots
     * @param {String} string
     */
    function processingStringWithDot(string) {
      var matchOneDot = string.match(/\./g) ? string.match(/\./g).length === 1 : false;
      var isMoreThanOneDot = string.match(/\./g) ? string.match(/\./g).length > 1 : false;

      // parts of the number
      var firstPartOfNumber;
      var secondPartOfNumber;

      // define the behavior if it finds the dot/dots
      if (matchOneDot) {

        // need to round the number if there are more than two digits after decimal point
        if (string.split('.')[1].length > 2) {
          // max two decimal places after dot
          string = (Math.round(parseFloat(string) * 100) / 100).toString();
        }

        // parts of number (before and after dot)
        firstPartOfNumber = parseInt(string.split('.')[0], 10) * 100;
        secondPartOfNumber = string.split('.')[1] ? parseInt(string.split('.')[1], 10) : 0;

        // form and return the number
        return firstPartOfNumber + secondPartOfNumber;

      } else if (isMoreThanOneDot) {
        return false;

      } else {
        return parseInt(string, 10);
      }

    }

    /**
     * Helper function to remove zeros at the beginning
     * @param string
     * @returns {string}
     */
    function removeZeros(string) {
      return parseFloat(string).toString();
    }

  }

})();
