'use strict';
module.exports = (sequelize, DataTypes) => {
  var sup_messages = sequelize.define('sup_messages', {
    ctrl: DataTypes.INT,
    usr: DataTypes.INT,
    text: DataTypes.STRING
  }, {
      tableName: 'Message'

  });
  sup_messages.associate = function(models) {
    // associations can be defined here
  };
  return sup_messages;
};