module.exports = (sequelize, DataTypes) => {
  const Formation = sequelize.define(
    "Formation",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true
        }
      },
      nom: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [5, 50]
        }
      },
      acronyme: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 5]
        }
      },
      titreProfessionnel: {
        field: "titre_professionnel",
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [5, 50]
        }
      },
      niveau: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          min: 3,
          max: 8
        }
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      }
    },
    {
      tableName: "formations"
    }
  );

  Formation.associate = () => {};

  return Formation;
};
