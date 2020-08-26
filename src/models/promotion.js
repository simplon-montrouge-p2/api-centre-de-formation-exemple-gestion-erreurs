module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define(
    "Promotion",
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
      formation: {
        allowNull: false,
        type: DataTypes.JSONB,
        validate: {
          notNull: true
        }
      },
      numero: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true,
          min: 1
        }
      },
      dateDebut: {
        field: "date_debut",
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          isDate: true,
          notNull: true
        }
      },
      dateFin: {
        field: "date_fin",
        allowNull: false,
        type: DataTypes.DATE,
        validate: {
          isDate: true,
          notNull: true
        }
      },
      dateJury: {
        field: "date_jury",
        type: DataTypes.DATE,
        validate: {
          isDate: true
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
      tableName: "promotions"
    }
  );

  Promotion.associate = models => {
    Promotion.hasMany(models.Apprenant);
  };

  return Promotion;
};
