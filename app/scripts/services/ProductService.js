(function (angular) {
    'use strict';

    angular.module('proDisplayApp').service('ProductService', function ($firebase, $firebaseSimpleLogin, fbURL, prodURL) {
        var productList = [];
        var fbRef = new Firebase(fbURL);
        var prodRef = new Firebase(prodURL);

        var ProductKey = '';

        return {
            getProductKey: function () {
                return ProductKey;
            },
            setProductKey: function (value) {
                ProductKey = value;
            },
            getAllProducts: function () {
                return $firebase(prodRef);
            },
            getProductById: function (key) {
                return $firebase(prodRef)[key];
            },
            addProduct: function (product) {
                productsRef.push(item); // add new item to firebase list
                $scope.item = {};
            },
            removeProduct: function (key) {
                // Avoid wrong removing
                if (key == undefined)return;

                // Firebase: Remove item from the list
                $scope.items.$remove(key);
            }
        };
    });
})(window.angular);