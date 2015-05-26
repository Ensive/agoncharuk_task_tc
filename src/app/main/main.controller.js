/**
 * Main Controller - Coinage
 */
(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .controller('MainCtrl', ['$scope', 'Parse', 'Convert', MainCtrl]);

  function MainCtrl($scope, Parse, Convert) {
    // declare pennies and coins
    $scope.pennies = null;
    $scope.coins = null;

    // submit function
    $scope.submit = submit;

    // submitting the form
    function submit(pennies) {
      // assign cleared value
      $scope.penniesFiltered = Parse(pennies);

      // check the value
      if (!$scope.penniesFiltered) {

      } else {
        // get the coins objects
        $scope.coins = Convert($scope.penniesFiltered);

        if (!$scope.coins) {

        }
      }

    }

  }

})();
