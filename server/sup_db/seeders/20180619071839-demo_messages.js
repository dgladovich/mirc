const faker = require('faker');
const _ = require('lodash');
const moment = require('moment');

module.exports = {
  up: (queryInterface, Sequelize) => {
      let messages = [];
      for (let i = 0; i < 1000; i++){
        messages.push({
            ctrl: 2,
            usr: _.random(1, 5),
            text: faker.lorem.text(),
            createdAt: moment().format('YYYY/MM/DD HH:mm:ss'),
            updatedAt: moment().format('YYYY/MM/DD HH:mm:ss')
        })
      }

      console.log('Messages: ', messages)
      return queryInterface.bulkInsert('messages', messages, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
