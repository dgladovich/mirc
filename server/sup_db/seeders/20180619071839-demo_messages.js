const faker = require('faker');
const _ = require('lodash');
const moment = require('moment');

let ctrls = [2, 5, 6];

module.exports = {
  up: (queryInterface, Sequelize) => {
      let messages = [];
      for (let i = 0; i < 10000; i++){
        messages.push({
            ctrl: ctrls[_.random(0,2)],
            usr: _.random(1, 5),
            text: faker.lorem.text(),
            createdAt: faker.date.between('2018-01-01', '2018-12-31'),
            updatedAt: faker.date.between('2018-01-01', '2018-12-31')
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
