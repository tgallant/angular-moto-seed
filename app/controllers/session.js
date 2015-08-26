var express = require('express'),
	router = express.Router(),
	passport = require('passport'),
	db = require('../models');

module.exports = function (app) {
	app.use('/session', router);
};

router.get('/status', function (req, res, next) {
	console.log(req.isAuthenticated());
	res.send(req.isAuthenticated() ? req.user: '0');
});

router.post('/login', passport.authenticate('local'), function (req, res, next) {
	res.send(req.user);
});

router.get('/logout', function (req, res, next) {
	req.logOut();
	res.send(200);
});