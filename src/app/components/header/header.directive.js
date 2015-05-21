/**
 * Custom directive for header
 */
(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .directive('coHeader', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/header/header.template.html',
        controller: 'HeaderController',
        controllerAs: 'headerCtrl'
      };
    });

}());
