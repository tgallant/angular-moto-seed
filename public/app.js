'use strict';

var appConfig = function($routeProvider, $httpProvider) {
	$routeProvider.otherwise({redirectTo: '/'});

	$httpProvider.interceptors.push(function($q, $location) {
		var res = function(response) {
			return response;
		};

		var resError = function(response) {
			if (response.status === 401) 
  			$location.url('/login'); 
  		return $q.reject(response); 
		};

		return { response: res, responseError: resError };

  });

};

// Declare app level module which depends on views, and components
angular
	.module('myApp', [
		'ngRoute',
		'myApp.login',
		'myApp.home',
		'myApp.auth'
	])
	.config(appConfig);