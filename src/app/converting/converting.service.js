/**
 * Service for converting pennies to coins
 */
(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .factory('Convert', ConvertService);

  function ConvertService() {
    // available coins
    var coins = [
      200,
      100,
      50,
      20,
      2,
      1
    ];

    return Convert;

    // converting
    function countCoins(pennies) {
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

    // @todo: use a Promise
    function Convert(pennies) {
      if (!pennies) {
        return false;
      }

      var coins, coinsObjects;

      // count coins
      coins = countCoins(pennies);

      // empty array
      coinsObjects = [];

      // forming the particular coins objects
      for (var i = 0, length = coins.length; i < length; i += 1) {

        switch (i) {
          case 0:
            coinsObjects.push({ amount: coins[i], nominal: '2£' });
            break;
          case 1:
            coinsObjects.push({ amount: coins[i], nominal: '1£' });
            break;
          case 2:
            coinsObjects.push({ amount: coins[i], nominal: '50p' });
            break;
          case 3:
            coinsObjects.push({ amount: coins[i], nominal: '20p' });
            break;
          case 4:
            coinsObjects.push({ amount: coins[i], nominal: '2p'});
            break;
          case 5:
            coinsObjects.push({ amount: coins[i], nominal: '1p'});
            break;
          default:
            break;
        }
        // end switch
      }
      // end for

      return coinsObjects;

    }

  }

})();
