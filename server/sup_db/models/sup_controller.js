'use strict';
module.exports = (sequelize, DataTypes) => {
  var sup_controller = sequelize.define('sup_controller', {
    lid: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
      tableName: 'Controller'

  });
  sup_controller.associate = function(models) {
    // associations can be defined here
  };
  return sup_controller;
};