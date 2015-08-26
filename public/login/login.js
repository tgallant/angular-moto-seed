'use strict';

var loginRouter = function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl: 'login/login.html',
		controller: 'LoginCtrl as vm'
	});
};

var loginController = function(Auth) {
	var vm = this;
	vm.login = Auth.login;
};

angular
	.module('myApp.login', ['ngRoute', 'myApp.auth'])
	.config(loginRouter)
	.controller('LoginCtrl', loginController);