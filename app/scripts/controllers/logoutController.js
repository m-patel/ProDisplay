(function (angular) {
    'use strict';

    angular.module('proDisplayApp')
        .controller('logoutController', function ($scope, $window, AuthService) {
            $scope.logout = function(){
                AuthService.Logout();
            }
        });
})(window.angular);