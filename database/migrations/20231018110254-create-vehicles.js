//migration de vehicles creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('vehicles', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        plate: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        year: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        doors: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        vehicle_type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mileage: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        external_damage: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        internal_damage: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        comments: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        vehicle_image: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        customer_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
  
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, /*Sequelize*/) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('customers', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}