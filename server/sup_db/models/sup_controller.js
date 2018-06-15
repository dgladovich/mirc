'use strict';
module.exports = (sequelize, DataTypes) => {
  var sup_controller = sequelize.define('Controller', {
    lid: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
      tableName: 'sup_controller'
  });
  sup_controller.associate = function(models) {
    // associations can be defined here
  };
  return sup_controller;
};