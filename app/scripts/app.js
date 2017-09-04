'use strict';

/**
 * @ngdoc overview
 * @name genAngularApp
 * @description
 * # genAngularApp
 *
 * Main module of the application.
 */
angular
  .module('genAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/eleves', {
        templateUrl: 'views/eleves.html',
        controller: 'ElevesCtrl',
        controllerAs: 'eleves'
      })
      .when('/qcm', {
        templateUrl: 'views/qcm.html',
        controller: 'QcmCtrl',
        controllerAs: 'qcm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
