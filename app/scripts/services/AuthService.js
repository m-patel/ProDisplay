/**
 * Created by mpatel on 2014-08-01.
 */
(function (angular) {
    'use strict';

    angular.module('proDisplayApp').service('AuthService', function ($rootScope, $firebase, $firebaseSimpleLogin, fbURL, prodURL, toastr) {

        var fbRef = new Firebase(fbURL);
        var prodRef = new Firebase(prodURL);

        var simpleLogin = $firebaseSimpleLogin(fbRef);
        var user = {
            email: '',
            password: ''
        };

        return {
            Login: function (user) {
                var errors = [];

                var promise = simpleLogin.$login('password', {
                    email: user.email,
                    password: user.password
                });

                promise.then(function (user) {
                    $rootScope.user = user;
                }, function (error) {
                    toastr.error(error.code, 'Oops!');
                    console.log(error.message);
                    if (error.code === 'INVALID_EMAIL') {
                        errors.push('The email was invalid');
                    }
                    if (error.code === 'INVALID_PASSWORD') {
                        errors.push('The password was invalid');
                    }
                });
            },
            Logout: function(){
                simpleLogin.$logout();
            }
        }
    });
})(window.angular);