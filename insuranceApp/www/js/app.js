// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('insurance', ['ionic', 'insurance.controllers',
  'insurance.services','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sideBar.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }
    }
  })

  .state('app.addvehicle', {
      url: '/addvehicle',
      views: {
        'menuContent': {
          templateUrl: 'templates/addvehicle.html',
          controller: 'AddVehicleCtrl'
        }
      }
    })

    .state('app.accidentInfo', {
      url: '/accidentInfo',
      views: {
        'menuContent': {
          templateUrl: 'templates/accidentInfo.html',
          controller: 'RecordAccidentController'
        }
      }
    })
    .state('app.myaccidents', {
      url: '/myaccidents',
      views: {
        'menuContent': {
          templateUrl: 'templates/myaccidents.html',
          controller: 'AccidentsCtrl'
        }
      }
    })
    .state('app.myprofile', {
      url: '/myprofile',
      views: {
        'menuContent': {
          templateUrl: 'templates/myprofile.html'
        }
      }
    })

    .state('app.serviceProviders', {
      url: '/serviceProviders',
      views: {
        'menuContent': {
          templateUrl: 'templates/serviceProviders.html',
          controller: 'ServiceProvidersCtrl'
        }
      }
    })
    .state('app.towingA', {
      url: '/towingA',
      views: {
        'menuContent': {
          templateUrl: 'templates/towingA.html',
          controller: 'ServiceProvidersCtrl'
        }
      }
    })

    .state('app.taxi', {
      url: '/taxi',
      views: {
        'menuContent': {
          templateUrl: 'templates/taxi.html',
          controller: 'TaxiCtrl'
        }
      }
    })
    .state('app.uber', {
      url: '/uber',
      views: {
        'menuContent': {
          templateUrl: 'templates/uber.html',
          controller: 'TaxiCtrl'
        }
      }
    })
    .state('app.pickme', {
      url: '/pickme',
      views: {
        'menuContent': {
          templateUrl: 'templates/pickme.html',
          controller: 'TaxiCtrl'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/myaccidents.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
