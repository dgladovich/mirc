'use strict';
module.exports = (sequelize, DataTypes) => {
  var sup_user = sequelize.define('sup_user', {
    name: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    tableName: 'User'
  });
  sup_user.associate = function(models) {
    // associations can be defined here
  };
  return sup_user;
};