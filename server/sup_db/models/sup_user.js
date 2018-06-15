'use strict';
module.exports = (sequelize, DataTypes) => {
  var sup_user = sequelize.define('User', {
    name: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    tableName: 'sup_user'
  });
  sup_user.associate = function(models) {
    // associations can be defined here
  };
  return sup_user;
};