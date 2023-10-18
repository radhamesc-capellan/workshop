"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      
      //association
      Users.hasMany(models.UserRol, {
        as: "user_rol",
        foreignKey: "user_id",
      });

    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.TEXT,
      },
      is_active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Users",
      tableName: "users",
      underscored: true,
      timestamps: true,
      scopes: {
        view_public: { attributes: ["id"] },
        view_same_user: { attributes: ["id", "email"] },
        auth_flow: { attributes: ["id", "email"] },
        view_me: { attributes: ["id", "email"] },
      },
      hooks: {
        beforeCreate: (user, options) => {
          if (user.email) {
            let emailLowercase = String(user.email).toLocaleLowerCase();
            user.email = emailLowercase;
          }
        },
      },
    }
  );
  return Users;
};