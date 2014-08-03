/* global Firebase*/
'use strict';

angular.module('proDisplayApp')
    .controller('mainController', function ($scope, $rootScope, $location, DataService) {
        $scope.pageClass = 'row-animate';

        // get app info like title and description
        $rootScope.appinfo = DataService.getAppInfo();

        // get list of all available products
        $scope.items = DataService.getAllItems();

        $scope.setKey = function (key) {
            DataService.setKey(key);
        };
    });
