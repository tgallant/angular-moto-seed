var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'angular-moto-seed'
    },
    port: 3000,
    db: 'postgres://localhost/angular-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'angular-moto-seed'
    },
    port: 3000,
    db: 'postgres://localhost/angular-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'angular-moto-seed'
    },
    port: 3000,
    db: 'postgres://localhost/angular-production'
  }
};

module.exports = config[env];
