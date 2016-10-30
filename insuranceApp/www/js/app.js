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

  .run(function ($rootScope) {

    $rootScope.vehicles = [
      {
        lisencePlate: "KK-3654",
        insurance: {
          company: "AIA",
          policyId: "HODkl945jg"
        }
      },
      {
        lisencePlate: "HG-8945",
        insurance: {
          company: "AsianAllianz",
          policyId: "PODgujd7485lk"
        }
      }
      ,
      {
        lisencePlate: "KI-1234",
        insurance: {
          company: "AIA",
          policyId: "JH87gfdgh45"
        }
      },
      {
        lisencePlate: "QT-9878",
        insurance: {
          company: "AsianAllianz",
          policyId: "yugIH8557j"
        }
      }
    ];

    $rootScope.insurance = [];

    $rootScope.insurance['AIA'] = {
      taxi: ["Uber", "PickMe"],
      towing: ["AA"]
    };

    $rootScope.insurance["AsianAllianz"] = {
      taxi: ["PickMe"],
      towing: ["AA", "CC"]
    };
    $rootScope.taxiServices = [];

    $rootScope.taxiServices['Uber'] = {
      image: 'img/uber.png',
      name: 'Uber',
      description: 'some thing'
    };

    $rootScope.taxiServices['PickMe'] = {
      image: 'img/pickme.png',
      name: 'PickMe',
      description: 'some other thing'
    };
    $rootScope.towingServices = [];

    $rootScope.towingServices['AA'] = {
      image: 'img/AA.jpg',
      name: 'AA',
      description: 'towing AA service'
    };

    $rootScope.towingServices['CC'] = {
      image: 'img/CC.png',
      name: 'CC',
      description: 'towing CC service'
    };

    $rootScope.vehicleTypes = [];
    $rootScope.vehicleTypes['PickMe'] = {
      taxiVehicle: ["Tuk", "Mini", "Car", "Van"]
    };

    $rootScope.vehicleTypes['Uber'] = {
      taxiVehicle: ["UbeX", "UberGo"]
    };

    $rootScope.TaxiReservation = {
      status: {
        status: "On the way",
        address: "dhgdja"
      },
      driver: {
        name: "hjadgsgkDRIVER",
        contactNumber: "54554"
      },
      licensePlateNumber: "License",
      referenceNumber: "shfjhjjjjjjjjjjj",
      serviceProvider: "Pickme",
      vehicleType: "tuk"
    };
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    $rootScope.AccidentsHistory = [

      {
        number: "JH-3569",
        policyNumber: "458712",
        date: "2016-06-29",
        location: "Thimbirigayaya"
      },
      {
        number: "KK-3654",
        policyNumber: "5875dsrkgh857",
        date: "2016-02-08",
        location: "Moratuwa"
      }

    ]

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
    .state('app.vehicle', {
      url: '/vehicle/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/vehicle.html',
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
      url: '/accidentInfo/:id',
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
          templateUrl: 'templates/myprofile.html',
          controller:'HomeController'
        }
      }
    })

    .state('app.serviceProviders', {
      url: '/serviceProviders/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/towingServiceProviders.html',
          controller: 'ServiceProvidersCtrl'
        }
      }
    })
    .state('app.towingA', {
      url: '/towingA',
      views: {
        'menuContent': {
          templateUrl: 'templates/towingA.html'
          // controller: 'ServiceProvidersCtrl'
        }
      }
    })

    .state('app.taxi', {
      url: '/taxi/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/taxi.html',
          controller: 'TaxiCtrl'
        }
      }
    })
    .state('app.taxiServiceProvider', {
      url: '/taxiServiceProvider/:service',
      views: {
        'menuContent': {
          templateUrl: 'templates/taxiServiceProvider.html',
          controller: 'TaxiServiceController'
          // controller: 'TaxiCtrl'
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

