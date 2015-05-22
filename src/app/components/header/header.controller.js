(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .controller('HeaderController', ['$scope', HeaderController]);

  function HeaderController($scope) {
    // define app version
    $scope.appVersion = 1.0;

  }

})();
