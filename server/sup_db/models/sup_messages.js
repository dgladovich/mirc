'use strict';
module.exports = (sequelize, DataTypes) => {
  var sup_messages = sequelize.define('Message' , {
    ctrl: DataTypes.INTEGER,
    usr: DataTypes.INTEGER,
    text: DataTypes.STRING
  }, {
      tableName: 'messages'

  });
  sup_messages.associate = function(models) {
    // associations can be defined here
  };
  return sup_messages;
};