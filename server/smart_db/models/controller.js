'use strict';
module.exports = (sequelize, DataTypes) => {
    const Controller = sequelize.define('Controller', {
        name: DataTypes.STRING,
    }, {
        tableName: 'smart_ctrls',
        timestamps: false
    });
    Controller.associate = function (models) {
        // associations can be defined here
    };
    return Controller;
};