const catalogueFormations = require("../seeds/20200223230838-catalogue-formations");

/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("formations", catalogueFormations);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("formations", null, {});
  }
};

