"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //  association
      Orders.hasMany(models.OrderService, {
        as: "order_service",
        foreignKey: "order_id",
      });

      Orders.belongsTo(models.Employees, {
        as: 'employees', 
        foreignKey: 'employee_id',
      });

      Orders.belongsTo(models.Mechanics, {
        as: 'mechanics', 
        foreignKey: 'mechanic_id',
      });

      Orders.belongsTo(models.Wokshop, {
        as: 'workshop', 
        foreignKey: 'workshop_id',
      });
    }
  }
  Orders.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      entry_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departure_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      workshop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mechanic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      vehicle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      employees_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Orders",
      tableName: "orders",
      underscored: true,
      timestamps: true,
    }
  );
  return Orders;
};