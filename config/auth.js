'use strict';

var db = require('../app/models');
var bcrypt = require('bcrypt');

var Auth = function() {};

Auth.prototype.authenticate = function(username, password, done) {
	db.User.findOne({ where: { username: username } })
	.then(function (user, err) {
		if (err) { return done(err); }
		
		if (!user) {
			return done(null, false, { message: 'Authentication Failed.' });
		}

		bcrypt.compare(password, user.password, function(err, res) {
			if (!res) {
				return done(null, false, { message: 'Authentication Failed.' });
			}
		});

		return done(null, user);
	
	});
};

Auth.prototype.serialize = function(user, done) {
	done(null, user);
};

Auth.prototype.deserialize = function(user, done) {
	done(null, user);
};

Auth.prototype.isAuthenticated = function(req, res, next) {
	if (!req.isAuthenticated())
		res.send(401);
	else
		next();
};

module.exports = Auth;