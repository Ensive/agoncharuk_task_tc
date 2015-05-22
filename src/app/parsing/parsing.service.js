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
        string === undefined
      ) {
        console.log('Value is invalid.');
        return false;
      }

      // convert to string
      var str = string.toString();

      // flags for pound and pence symbols
      var matchPound = str.match(/£/g) ? str.match(/£/g).length === 1 && str.match(/^£/g).length === 1 : false;
      var matchPence = str.match(/p/gi) ? str.match(/p/gi).length === 1 && str.match(/p$/gi).length === 1 : false;

      if (matchPound && matchPence) {
        // if match for pound and pence
        // remove symbols
        str = str.replace('£', '').replace('p', '');

        console.log('Cleared string', str);
        var amount = Number(str);
        console.log('Number amount', amount);

      } else if (matchPound === 1) {
        // match only for pounds

      } else if (matchPence === 1) {
        // match only for pence

      } else {
        // no matches for pence and pound
        return Number(str);
      }

      //console.log(str);

    }
  }

})();
