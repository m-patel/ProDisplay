/* global Firebase*/
'use strict';

angular.module('proDisplayApp')
    .controller('detailsController', function ($scope, ProductService) {
        $scope.pageClass = 'page-details';
        $scope.item = ProductService.getProductById(ProductService.getProductKey());
    });
