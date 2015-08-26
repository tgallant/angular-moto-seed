'use strict';

var AuthFactory = function($http, $location, $q) {
	var Auth = {};
	
	Auth.checkLoggedIn = function() {
		var deferred = $q.defer();

		var success = function(user) {
			// Authenticated
			if (user.data !== '0') deferred.resolve();
			// Not Authenticated
			else {
				deferred.reject();
				$location.url('/login');
			}
		};

		var err = function(e) {
			console.log(e);
			deferred.reject();
			$location.url('/login');
		};

		// Make an AJAX call to check if the user is logged in
		$http.get('/session/status').then(success, err);

	};

	Auth.login = function(user) {
		var success = function(user) {
			$location.url('/');
		};
		var err = function(e) {
			$location.url('/login');
		};
		$http.post('/session/login', user).then(success, err);
	};

	return Auth;
};

angular
	.module('myApp.auth.auth-factory', [])
	.factory('Auth', AuthFactory);