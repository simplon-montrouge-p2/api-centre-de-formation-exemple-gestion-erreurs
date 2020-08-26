/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("apprenants", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      prenom: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      date_naissance: {
        type: Sequelize.DATE
      },
      telephone: {
        type: Sequelize.STRING(10)
      },
      email: {
        type: Sequelize.STRING(50)
      },
      promotion_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "promotions",
          key: "id"
        }
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
    return queryInterface.dropTable("apprenants");
  }
};
