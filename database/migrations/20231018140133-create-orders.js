//migration de orders creada por sequelize-cli y editada por nosotros
'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('orders', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        entry_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        departure_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deadline: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        cost: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        workshop_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        mechanic_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        vehicle_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        employees_id: {
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
      await queryInterface.dropTable('orders', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}