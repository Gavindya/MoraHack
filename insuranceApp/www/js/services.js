'use strict';

angular.module('insurance.services',['ngResource'])
  .constant("baseURL","http://localhost:3000/") //might have to change to ip of the device
  .service('menuFactory', ['$http','$resource', 'baseURL',
    function($http, $resource, baseURL) {

    //USING $HTP INJECTOR------------------
    // this.getVehicles = function () {
    //   return $http.get(baseURL+"Vehicles");
    // };
    //
    // this.getVehicle = function (index) {
    //   return $http.get(baseURL+"Vehicles"+index);
    // };
      // ------------------------------------------

      //USING NG-RESOURCE INJECTOR-------------
    this.getVehiclesResource = function(){

      return $resource(baseURL+"Vehicles/:id",null,  {'update':{method:'PUT' }});

    };

    var promotions = [
      {
        _id:0,
        name:'Weekend Grand Buffet',
        image: 'images/buffet.png',
        label:'New',
        price:'19.99',
        description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
      }

    ];

    this.getDishes = function(){

      return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});

    };

    // implement a function named getPromotion
    // that returns a selected promotion.
    this.getPromotion = function() {
      return   $resource(baseURL+"promotions/:id");;
    }


  }])

  .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {


    return $resource(baseURL+"leadership/:id");

  }])

  .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {


    return $resource(baseURL+"feedback/:id");

  }])


;
