// Example model


module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    username: {type: DataTypes.STRING, primaryKey: true },
    password: DataTypes.STRING
  },

  {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  
  });

  return User;
};

