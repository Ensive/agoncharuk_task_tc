/**
 * Main Controller - Coinage
 */
(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .controller('MainCtrl', ['$scope', 'Parse', 'Convert', MainCtrl]);

  function MainCtrl($scope, Parse, Convert) {
    var vm = this;

    // declare pennies
    $scope.pennies = null;

    // submit function
    $scope.submit = submit;

    // submitting the form
    function submit(pennies) {
      //console.log(pennies);
      Convert(pennies);
    }

  }

})();
