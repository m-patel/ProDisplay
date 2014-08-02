/* global Firebase*/
'use strict';

angular.module('proDisplayApp')
    .controller('manageController', function ($scope, $timeout, ngDialog, ProductService) {
        $scope.addBtn = true;
        $scope.pageClass = 'page-manage';

        // Add new
        $scope.addItem = function (item) {
            ProductService.addProduct(item);
        };

        $scope.removeItem = function (key) {
            ProductService.removeItem(key);
        };

        $scope.editItem = function (key, item) {
            $scope.addBtn = false;
            //$scope.item = {};
            $scope.item = item;
        }

        $scope.updateItem = function (key) {
            $scope.items.$save(key);
            $scope.item = {};
            $scope.addBtn = true;
        }
    });