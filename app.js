

var express = require('express'),
  config = require('./config/config'),
  bcrypt = require('bcrypt'),
  db = require('./app/models');

var app = express();

var createTestUser = function() {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('test', salt, function(err, hash) {
      db.User.findOrCreate({ where: { username: 'test'}, defaults: { password: hash } })
        .then(function(user) {
          console.log('test user created');
        });
    });
  });
};

require('./config/express')(app, config);

db.sequelize
  .sync()
  .then(function () {
    createTestUser();
    app.listen(config.port, function () {
      console.log('Express server listening on port ' + config.port);
    });
  }).catch(function (e) {
    throw new Error(e);
  });

