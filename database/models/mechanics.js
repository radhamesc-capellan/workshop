"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mechanics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //  association
      Mechanics.hasMany(models.Orders, {
        as: "orders",
        foreignKey: "mechanic_id",
      });
    }
  }
  Mechanics.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Mechanics",
      tableName: "mechanics",
      underscored: true,
      timestamps: true,
    }
  );
  return Mechanics;
};