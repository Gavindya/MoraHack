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
    this.getAccidentsHistory = function () {
      return $resource(baseURL+"AccidentsHistory",null ,{'update':{method:'PUT'}});
    };

      this.getServiceProviders = function () {
        return $resource(baseURL+"ServiceProviders",null ,{'update':{method:'PUT'}});
      };

      this.getTaxi = function () {
        return $resource(baseURL+"TaxiService",null ,{'update':{method:'PUT'}});
      };
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
