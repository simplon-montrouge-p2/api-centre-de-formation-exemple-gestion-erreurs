/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("promotions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      formation: {
        allowNull: false,
        type: Sequelize.JSONB
      },
      numero: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      date_debut: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_fin: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_jury: {
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("promotions");
  }
};
