'use strict';

/**
 * @ngdoc overview
 * @name menuApp
 * @description
 * # menuApp
 *
 * Main module of the application.
 */
angular
  .module('menuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'perfect_scrollbar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controllerAs: 'mc',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
