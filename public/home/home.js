'use strict';

var homeRouter = function($routeProvider, AuthProvider) {
	var auth = AuthProvider.$get();
	$routeProvider.when('/', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl as vm',
		resolve: {
			loggedin: auth.checkLoggedIn
		}
	});
};

var homeCtrl = function() {};

angular
	.module('myApp.home', ['ngRoute', 'myApp.auth'])
	.config(homeRouter)
	.controller('HomeCtrl', homeCtrl);