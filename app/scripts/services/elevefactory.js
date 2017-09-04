'use strict';

/**
 * @ngdoc service
 * @name genAngularApp.eleveFactory
 * @description
 * # eleveFactory
 * Factory in the genAngularApp.
 */
angular.module('genAngularApp')
    .factory('eleveFactory', function($resource) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            someMethod: function() {
                return meaningOfLife;
            },
            getListe: function() {
                return $resource('http://localhost:3000/api/liste/:userId', {
                    userId: '@_id'
                }, {
                    update: {
                        method: 'PUT'
                    }
                });
            }
        };
    });