'use strict';
var app = angular.module("navidwebsite", ['ngRoute', 'ngMaterial', 'ngMdIcons'])
app.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('grey')
    $routeProvider
        .when('/', {
            controller: 'homepage'
        })
        .when('/Portfolio/', {
            templateUrl:'partials/portfolio.html',
            controller: 'homepage'
        })
        .when('/Contact/', {
            templateUrl:'partials/contact.html',
            controller: 'homepage'
        })


})
