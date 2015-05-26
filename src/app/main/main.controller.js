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
    $scope.clearResults = clearResults;

    /**
     * Submit form function
     * @param {String|Number} pennies
     */
    function submit(pennies) {
      // assign cleared value
      $scope.penniesFiltered = Parse(pennies);

      // check the value
      if (!$scope.penniesFiltered) {

        // assign zero
        $scope.penniesFiltered = 0;

        // specify the error message
        $scope.errorMessage = 'The value "' + $scope.pennies + '" is invalid, try a different one, please.';

      } else {

        // clear the error message
        $scope.errorMessage = null;

        // get the coins objects
        $scope.coins = Convert($scope.penniesFiltered);
      }

    }

    /**
     * Remove error on change
     */
    function clearResults() {
      $scope.errorMessage = '';
      $scope.coins = null;
    }

  }

})();
