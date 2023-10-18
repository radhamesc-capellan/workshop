"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //  association
   
      Users.belongsToMany(models.Roles, {
        as: 'user_rol', through: models.UserRol, foreignKey: 'user_id'})
      Roles.belongsToMany(models.Users, {
        as: 'user_rol', through: models.UserRol, foreignKey: 'rol_id'})
			
    }
  }
  UserRol.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      rol_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    },
    {
      sequelize,
      modelName: "UserRol",
      tableName: "user_rol",
      underscored: true,
      timestamps: true,
    }
  );
  return UserRol;
};