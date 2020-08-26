module.exports = (sequelize, DataTypes) => {
  const Apprenant = sequelize.define(
    "Apprenant",
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
      prenom: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 30]
        }
      },
      nom: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 50]
        }
      },
      dateNaissance: {
        field: "date_naissance",
        type: DataTypes.DATE,
        validate: {
          isDate: true
        }
      },
      telephone: {
        type: DataTypes.STRING,
        validate: {
          isNumeric: true,
          len: [10, 10]
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          len: [6, 50]
        }
      },
      promotionId: {
        field: "promotion_id",
        allowNull: false,
        type: DataTypes.UUID
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
      tableName: "apprenants"
    }
  );

  Apprenant.associate = models => {
    Apprenant.belongsTo(models.Promotion, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "promotionId",
        allowNull: false
      }
    });
  };

  return Apprenant;
};
