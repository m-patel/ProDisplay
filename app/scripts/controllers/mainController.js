/* global Firebase*/
'use strict';

angular.module('proDisplayApp')
    .controller('mainController', function ($scope, $location, ProductService) {
        $scope.pageClass = 'page-main';

        // get list of all available products
        $scope.items = ProductService.getAllProducts();

        $scope.setProductKey = function (key) {
            ProductService.setProductKey(key);
        };
    });
