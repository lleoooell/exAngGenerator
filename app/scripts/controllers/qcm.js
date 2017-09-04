'use strict';

/**
 * @ngdoc function
 * @name genAngularApp.controller:QcmCtrl
 * @description
 * # QcmCtrl
 * Controller of the genAngularApp
 */
angular.module('genAngularApp')
  .controller('QcmCtrl', function (qcmFactory) {
  	this.questions = qcmFactory.Questionnaire();

  	this.index = 0;

  	this.qActive = this.questions[this.index];

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.nexQuestion = function(){
    	console.log('next');
    	this.index = this.index + 1;
    	this.qActive = this.questions[this.index];
    	// this.$apply()
    };
    this.prevQuestion = function(){
    	console.log('next');
    	this.index = this.index - 1;
    	this.qActive = this.questions[this.index];
    	// this.$apply()
    }
  });
