/* global Firebase*/
'use strict';

angular.module('proDisplayApp')
    .controller('manageController', function ($scope, $timeout, ngDialog, DataService, AuthService) {
        $scope.addBtn = true;
        $scope.pageClass = 'page-manage';

        AuthService.CheckUserSession();

        $scope.items = DataService.getAllItems();

        // Add new
        $scope.addItem = function (item) {
            DataService.addItem(item);
        };

        $scope.removeItem = function (key) {
            DataService.removeItem(key);
        };

        $scope.editMode = function (key, item) {
            $scope.key = '';
            $scope.addBtn = false;
            $scope.item = {};
            $scope.item = item;
            $scope.key = key;
        };

        $scope.updateItem = function (item) {
            DataService.updateItem($scope.key, item);
            $scope.item = {};
            $scope.addBtn = true;
        };
    });