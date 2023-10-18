"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderService extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //  association
   
      Orders.belongsToMany(models.Services, {
        as: 'order_service', through: models.OrderService, foreignKey: 'order_id'})
      Services.belongsToMany(models.Orders, {
        as: 'order_service', through: models.OrderService, foreignKey: 'service_id'})
			
    }
  }
  OrderService.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      order_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      service_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    },
    {
      sequelize,
      modelName: "OrderService",
      tableName: "order_service",
      underscored: true,
      timestamps: true,
    }
  );
  return OrderService;
};