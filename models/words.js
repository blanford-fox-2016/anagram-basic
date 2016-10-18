'use strict';
module.exports = function(sequelize, DataTypes) {
  var Words = sequelize.define('Words', {
    word: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Words;
};