'use strict';

/**
 * @ngdoc function
 * @name proDisplayApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the proDisplayApp
 */
angular.module('proDisplayApp')
    .controller('AboutCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
