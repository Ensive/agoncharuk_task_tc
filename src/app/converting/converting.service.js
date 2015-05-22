/**
 * Service for converting pennies to coins
 */
(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .factory('Convert', ConvertService);

  function ConvertService() {
    var coins = [
      200,
      100,
      50,
      20,
      2,
      1
    ];

    return Convert;

    function Convert(pennies) {
      // define empty array
      var coinsArray = [];

      // loop through the available coins
      for (var i = 0, length = coins.length; i < length; i++) {

        if (pennies >= coins[i]) {
          var count = Math.floor( pennies / coins[i] );
          coinsArray.push(count);
          pennies = pennies - coins[i] * count;
          continue;
        } else {
          coinsArray.push(0);
        }

      }
      // end for
      console.log(coinsArray);
      return coinsArray;
    }

  }

})();
