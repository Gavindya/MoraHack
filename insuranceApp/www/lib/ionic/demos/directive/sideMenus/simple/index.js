---
  name
:
simple;
;;;;;;;;
ionSideMenus;
---;
;;;;;;;;
var app = angular.module('simple', ['ionic']);
app.controller('SideMenusSimpleCtrl', function ($scope, $ionicSideMenuDelegate) {

  $scope.toggleLeft = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

});
