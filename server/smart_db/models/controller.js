'use strict';
module.exports = (sequelize, DataTypes) => {
  var Controller = sequelize.define('Controller', {
    name: DataTypes.STRING
  }, {});
  Controller.associate = function(models) {
    // associations can be defined here
  };
  return Controller;
};