---
  name
:
chooseOne;
;;;;;;;;
ionRadio;
---
  angular.module('chooseOne', ['ionic'])
    .controller('ChooseOneCtrl', function ($scope) {
      $scope.choice = 'two';
    });
