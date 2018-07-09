'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('messages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ctrl: {
                type: Sequelize.INTEGER
            },
            usr: {
                type: Sequelize.INTEGER
            },
            text: {
                type: Sequelize.STRING
            },
            viewed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('messages');
    }
};