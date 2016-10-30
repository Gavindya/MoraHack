'use strict';

angular.module('insurance.services',['ngResource'])
  .constant("baseURL","http://localhost:3000/") //might have to change to ip of the device
  .constant("mobile", "0771234567")
  .service('menuFactory', ['$http','$resource', 'baseURL',
    function($http, $resource, baseURL) {

      // USING $HTTP INJECTOR------------------
      this.getVehiclesResource = function () {
        return $http.get(baseURL + "Vehicles");
      };

      this.getAccidentsHistory = function () {
        return $http.get(baseURL + "AccidentsHistory");
      };

      // this.getServiceProviders = function () {
      //   return $http.get(baseURL + "ServiceProviders");
      // };
      //
      // this.getTaxiReservation = function () {
      //   return $http.get(baseURL + "TaxiReservation");
      // };

      this.saveNewVehicles = function (data) {
        $http.post(baseURL + "Vehicles", data);
      };;;;;;;;;
      this.saveAccident = function (data) {
        $http.post(baseURL + "AccidentsHistory", data);
      };;;;;;;;;
      // ------------------------------------------

      //USING NG-RESOURCE INJECTOR-------------
      // this.getVehiclesResource = function(){
      //   return $resource(baseURL+"Vehicles/:id",null,  {'update':{method:'PUT' }});
      // };
    this.getAccidentsHistory = function () {
      return $resource(baseURL+"AccidentsHistory",null ,{'update':{method:'PUT'}});
    };
      //
      // this.getServiceProviders = function () {
      //   return $resource(baseURL+"ServiceProviders",null ,{'update':{method:'PUT'}});
      // };

      this.getTaxi = function () {
        return $resource(baseURL+"TaxiService",null ,{'update':{method:'PUT'}});
      };
    this.getDishes = function(){

      return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});

    };

    // implement a function named getPromotion
    // that returns a selected promotion.
    this.getPromotion = function() {
      return $resource(baseURL + "promotions/:id");
    }


  }])

  .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {


    return $resource(baseURL+"leadership/:id");

  }])

  .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {


    return $resource(baseURL+"feedback/:id");

  }])


;
