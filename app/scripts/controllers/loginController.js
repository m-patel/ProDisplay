(function (angular) {
    'use strict';

    angular.module('proDisplayApp')
        .controller('loginController', function ($scope, $window, $rootScope, toastr, ngDialog, AuthService) {

            $scope.pageClass = 'page-login';
//            var fbRef = new Firebase(FBURL);
//            $scope.simpleLogin = $firebaseSimpleLogin(fbRef);
//            $scope.user = {
//                email: '',
//                password: ''
//            };

            $scope.login = function () {

                AuthService.Logout($scope.user);
//                $scope.errors = [];
//
//                if ($scope.user.email === '') {
//                    $scope.errors.push('Please enter your email');
//                    //toastr.success('Hello world!', 'Toastr fun!');
//                }
//
//                if ($scope.user.email === '') {
//                    $scope.errors.push('Please enter your password');
//                }
//
//                if ($scope.errors.length > 0) {
//                    //toastr.success('Hello world!', 'Toastr fun!');
//                    return;
//                }
//
//                var promise = $scope.simpleLogin.$login('password', {
//                    email: $scope.user.email,
//                    password: $scope.user.password
//                });
//
//                promise.then(function (user) {
//                    $rootScope.user = user;
//                    //$window.location.href = '/#/manage';
//                }, function (error) {
//                    toastr.error(error.code, 'Oops!');
//                    console.log(error.message);
//                    if (error.code === 'INVALID_EMAIL') {
//                        $scope.errors.push('The email was invalid');
//                    }
//                    if (error.code === 'INVALID_PASSWORD') {
//                        $scope.errors.push('The password was invalid');
//                    }
//                });
            };
        });
})(window.angular);