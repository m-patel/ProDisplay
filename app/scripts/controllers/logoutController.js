(function (angular) {
    'use strict';

    angular.module('proDisplayApp')
        .controller('logoutController', function ($scope, $window, AuthService) {

            AuthService.Logout();

        });
})(window.angular);