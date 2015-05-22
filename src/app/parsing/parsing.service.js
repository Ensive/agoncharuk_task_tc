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
      console.log(string);
    }
  }

})();
