'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = require('../car_list.json');
    return queryInterface.bulkInsert('Vehicle', data);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Vehicle', null);
  }
};
