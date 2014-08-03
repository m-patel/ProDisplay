(function (angular) {
    'use strict';

    angular.module('proDisplayApp')
        .controller('loginController', function ($scope, $location, $rootScope, ngDialog, AuthService) {

            $scope.pageClass = 'page-login';

            $scope.login = function () {
                AuthService.Login($scope.user);
                //$location.path('/#/manage')
            };
        });
})(window.angular);