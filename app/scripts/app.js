'use strict';

/**
 * @ngdoc overview
 * @name proDisplayApp
 * @description
 * # proDisplayApp
 *
 * Main module of the application.
 */
angular
  .module('proDisplayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'routeSecurity',
    'simpleLoginTools',
    'toastr',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'detailsController'
      })
      .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'manageController',
        authRequired: true
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .when('/logout', {
            templateUrl: 'views/manage.html',
        controller: 'logoutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('fbURL', 'https://fiery-fire-1290.firebaseio.com/')
  .constant('loginRedirectPath', '/login');
