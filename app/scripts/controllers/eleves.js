'use strict';

/**
 * @ngdoc function
 * @name genAngularApp.controller:ElevesCtrl
 * @description
 * # ElevesCtrl
 * Controller of the genAngularApp
 */
angular.module('genAngularApp')
  .controller('ElevesCtrl', function (eleveFactory) {

  	this.test = eleveFactory.getListe().query();
  	
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
