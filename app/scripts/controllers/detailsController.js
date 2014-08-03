/* global Firebase*/
'use strict';

angular.module('proDisplayApp')
    .controller('detailsController', function ($scope, DataService) {
        $scope.pageClass = 'row-animate';
        $scope.item = DataService.getItemById(DataService.getKey());
    });
