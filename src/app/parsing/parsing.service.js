/**
 * Service for parsing pennies string
 */
(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .factory('Parse', ParseService);

  function ParseService() {
    return Parse;

    function Parse(string) {
      if (
        string === '' ||
        string === null ||
        string == undefined
      ) {
        return false;
      }

      // convert to string
      var str = string.toString();

      // @todo: combine the matches
      // check for pounds symbol
      var matchPound = str.match(/£/g).length;
      var matchFirstPound = str.match(/^£/g).length;

      // check for pence symbol
      var matchPence = str.match(/p/gi).length;
      var matchPenceLast = str.match(/p$/gi).length;

      if (matchPound === 1 && matchFirstPound === 1 && matchPence === 1 && matchPenceLast === 1) {
        // if match for pound and pence
        // remove symbols
        str = str.replace('£', '');
        str = str.replace('p', '');

      } else if (matchPound === 1 && matchFirstPound === 1) {
        // match only for pounds

      } else if (matchPence === 1 && matchPenceLast === 1) {
        // match only for pence

      } else {
        // no matches for pence and pound
      }

      console.log(str);

    }
  }

})();
