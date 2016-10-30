angular.module('insurance.controllers', [])

.controller('AppCtrl', function($scope,$ionicModal, $timeout) {

  $scope.loginData = {};
  $scope.record = {};

  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.login = function() {
    $scope.modal.show();
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
  .controller('RecordAccidentController', ['$scope', '$stateParams', '$cordovaCamera', '$rootScope', 'menuFactory',
    function ($scope, $stateParams, $cordovaCamera, $rootScope, menuFactory) {

    // $scope.vehicles = vehicles;
      $scope.accident = {
        number: "",
        policyNumber: "",
        date: "",
        location: ""
      };

    $scope.vehicleId = parseInt($stateParams.id, 0);
      console.log($stateParams.id);

      $scope.accident.number = $rootScope.vehicles[$scope.vehicleId].lisencePlate;
      $scope.accident.policyNumber = $rootScope.vehicles[$scope.vehicleId].policyNumber;

    $scope.registration = {};

    $scope.doRecordVehicle = function() {
      console.log('Doing login', $scope.loginData);
      menuFactory.saveAccident($scope.accident);

    };

      // $ionicPlatform.ready(function () {
      //   var options = {
      //     quality: 50,
      //     // destinationType: Camera.DestinationType.DATA_URL,
      //     // sourceType: Camera.PictureSourceType.CAMERA,
      //     allowEdit: true,
      //     // encodingType: Camera.EncodingType.JPEG,
      //     targetWidth: 100,
      //     targetHeight: 100,
      //     // popoverOptions: CameraPopoverOptions,
      //     saveToPhotoAlbum: false
      //   };
      // });
        $scope.takePicture = function () {

          var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
          };
          $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.registration.imgSrc = "data:image/jpeg;base64" + imageData;
          }, function (err) {
            console.log(err);
          });
          // $scope.registerform.showAddVehicle();
          }

    }])
  .controller('AddVehicleCtrl',['$scope','menuFactory', function($scope,menuFactory) {

    $scope.myVehicle = {number: "", owner: "", policyNumber: "", insuranceCompany: "", policyExpireDate: ""};

    $scope.submitVehicle = function () {
      console.log($scope.myVehicle);

      menuFactory.saveNewVehicles(myVehicle);

      // $scope.Vehicles.push($scope.myVehicle);                         //Vehicles is the array saved in vehicles.json. refer line 60
      // menuFactory.getVehiclesResource().update($scope.Vehicles);

      // $scope.form.$setPristine();

      $scope.myVehicle = {number:"QQ-4546", owner:"", policyNumber:"",insuranceCompany:"",policyExpireDate:""};
    };
  }])

  .controller('HomeController', ['$scope', '$rootScope', '$stateParams', 'menuFactory', function ($scope, $rootScope, $stateParams, menuFactory) {
    //HTTP USED
    // $scope.Vehicles = {};

    $scope.id = $stateParams.id;

    $scope.Vehicles = $rootScope.vehicles;
    $scope.registration = {};
    $scope.showVehicles=false;
    $scope.message="Loading....";
    // menuFactory.getVehiclesResource()
    //   .then(
    //     function (response) {
    //       $scope.Vehicles = response.data;
    //       $scope.showVehicles=true;
    //     }, function (response) {
    //       $scope.message="Error : "+response.status +" "
    //                       + response.statusText;
    //     }
    //   );

    //NG-RESOURCE USED
    // $scope.Vehicles = menuFactory.getVehiclesResource().query();

    // $scope.Vehicles = [];
    // $scope.registration = {};
    // $scope.showVehicles=false;
    // $scope.message="Loading....";

    // var vehicleChose = menuFactory.getVehiclesResource().get(parseInt($stateParams.id,3))
    // $scope.vehicle=vehicleChose;
    // menuFactory.getVehiclesResource().query(
    //   function (response) {
    //       $scope.Vehicles=response;
    //       $scope.showVehicles=true;
    //     },
    //       function (response) {
    //       $scope.message="Error : "+response.status +" "
    //                       + response.statusText;
    //     }
    //   );

  }])

  .controller('AccidentsCtrl', ['$scope', '$rootScope', '$stateParams', 'menuFactory', function ($scope, $rootScope, $stateParams, menuFactory) {

    $scope.Accidents = $rootScope.AccidentsHistory;
    $scope.showAccidents = true;
      $scope.message="Loading....";

    // menuFactory.getAccidentsHistory().query(
    //   function (response) {
    //     $scope.Accidents=response;
    //     $scope.showAccidents=true;
    //   },
    //   function (response) {
    //     $scope.message="Error : "+response.status +" "
    //       + response.statusText;
    //   }
    // );

    }])

  .controller('ServiceProvidersCtrl', ['$scope', '$stateParams', '$rootScope', 'menuFactory', function ($scope, $stateParams, $rootScope, menuFactory) {

    $scope.id = $stateParams.id;

    $scope.vehicleId = parseInt($stateParams.id, 0);

    $scope.insuranceCompany = $rootScope.vehicles[$scope.vehicleId].insurance.company;

    $scope.servicesTowing = $rootScope.insurance[$scope.insuranceCompany].towing;

    // $scope.ServiceProviders = [];
    // $scope.showServiceProviders=false;
    // $scope.message="Loading....";
    //
    // //dummy!
    // $scope.serviceA=true;
    //
    // menuFactory.getServiceProviders().query(
    //   function (response) {
    //     $scope.ServiceProviders=response;
    //     $scope.showServiceProviders=true;
    //   },
    //   function (response) {
    //     $scope.message="Error : "+response.status +" "
    //       + response.statusText;
    //   }
    // );

  }])
  .controller('TaxiCtrl', ['$scope', '$stateParams', '$rootScope', 'menuFactory', function ($scope, $stateParams, $rootScope, menuFactory) {

    $scope.id = $stateParams.id;

    $scope.vehicleId = parseInt($stateParams.id, 0);

    $scope.insuranceCompany = $rootScope.vehicles[$scope.vehicleId].insurance.company;

    $scope.services = $rootScope.insurance[$scope.insuranceCompany].taxi;

    $scope.Taxi = [];
    $scope.showTaxi=false;
    $scope.message="Loading....";

    menuFactory.getTaxi().query(
      function (response) {
        $scope.Taxi=response;
        $scope.showTaxi=true;
      },
      function (response) {
        $scope.message="Error : "+response.status +" "
          + response.statusText;
      }
    );
  }])

  .controller('TaxiServiceController', ['$scope', '$stateParams', '$rootScope', 'menuFactory', function ($scope, $stateParams, $rootScope, menuFactory) {

    $scope.company = $stateParams.service;
    console.log($scope.company);

    $scope.vehiclesSupported = $rootScope.vehicleTypes[$scope.company].taxiVehicle;

    $scope.clicked = false;
    $scope.showtaxiReservation = true;

    $scope.taxiReservation = $rootScope.TaxiReservation;

    $scope.choice = {choiceOp: ""};
    console.log($scope.choice);

    $scope.messageTaxi = "Loading....";

    $scope.mobileNumber = {contactNumber: ""};

    $scope.sendMobileNumber = function () {
      console.log($scope.mobileNumber);
      $scope.clicked = true;

    };

    // menuFactory.getTaxiReservation()
    //   .then(
    //     function (response) {
    //       $scope.taxiReservation = response.data;
    //       $scope.showtaxiReservation = true;
    //       // console.log($scope.showtaxiReservation);
    //     }, function (response) {
    //       $scope.message = "Error : " + response.status + " "
    //         + response.statusText;
    //     }
    //   );
  }
  ])

  .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    $scope.showMenu = false;
    $scope.message = "Loading ...";

    menuFactory.getDishes().query(
      function(response) {
        $scope.dishes = response;
        $scope.showMenu = true;
      },
      function(response) {
        $scope.message = "Error: "+response.status + " " + response.statusText;
      });


    $scope.select = function(setTab) {
      $scope.tab = setTab;

      if (setTab === 2) {
        $scope.filtText = "appetizer";
      }
      else if (setTab === 3) {
        $scope.filtText = "mains";
      }
      else if (setTab === 4) {
        $scope.filtText = "dessert";
      }
      else {
        $scope.filtText = "";
      }
    };

    $scope.isSelected = function (checkTab) {
      return ($scope.tab === checkTab);
    };

    $scope.toggleDetails = function() {
      $scope.showDetails = !$scope.showDetails;
    };
  }])

  .controller('ContactController', ['$scope', function($scope) {

    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };

    var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];

    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

  }])

  .controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope,feedbackFactory) {

    $scope.sendFeedback = function() {

      console.log($scope.feedback);

      if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
        $scope.invalidChannelSelection = true;
        console.log('incorrect');
      }
      else {
        $scope.invalidChannelSelection = false;
        feedbackFactory.save($scope.feedback);
        $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
        $scope.feedback.mychannel="";
        $scope.feedbackForm.$setPristine();
        console.log($scope.feedback);
      }
    };
  }])


  .controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {

    $scope.mycomment = {rating:5, comment:"", author:"", date:""};

    $scope.submitComment = function () {

      $scope.mycomment.date = new Date().toISOString();
      console.log($scope.mycomment);

      $scope.dish.comments.push($scope.mycomment);
      menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);

      $scope.commentForm.$setPristine();

      $scope.mycomment =  {rating:5, comment:"", author:"", date:""};
    };
  }])

  // implement the IndexController and About Controller here

  .controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {

    $scope.leader = corporateFactory.get({id:3});
    $scope.showDish = false;
    $scope.message="Loading ...";
    $scope.dish = menuFactory.getDishes().get({id:0})
      .$promise.then(
        function(response){
          $scope.dish = response;
          $scope.showDish = true;
        },
        function(response) {
          $scope.message = "Error: "+response.status + " " + response.statusText;
        }
      );
    $scope.promotion = menuFactory.getPromotion().get({id:0});

  }])

  .controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {

    $scope.leaders = corporateFactory.query();
    console.log($scope.leaders);

  }])

;
