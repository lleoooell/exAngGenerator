'use strict';

/**
 * @ngdoc service
 * @name genAngularApp.qcmFactory
 * @description
 * # qcmFactory
 * Factory in the genAngularApp.
 */
angular.module('genAngularApp')
    .factory('qcmFactory', function() {
        // Service logic
        // ...

        var mesQuestions = [{
            titre: "titre1",
            choix: [{
                choix1: "A"
            }, {
                choix2: "B"
            }]
        }, {
            titre: "titre2",
            choix: [{
                choix1: "D"
            }, {
                choix2: "E"
            }]
        }, {
            titre: "titre3",
            choix: [{
                choix1: "F"
            }, {
                choix2: "G"
            }]
        }];

        // Public API here
        return {
            Questionnaire: function() {
                return mesQuestions;
            }
        };
    });