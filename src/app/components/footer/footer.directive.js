(function () {
  'use strict';

  angular.module('agoncharukTaskTc')
    .directive('coFooter', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/footer/footer.template.html'
      };
    });

})();
