'use strict';

const locations = require('../../data/seeders/locations-seeder.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('locations', locations, {}); 
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('locations', null, {});
  }
};