'use strict';

/** @type {import('sequelize-cli').Migrations} */

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValuse: DataTypes.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValuse: DataTypes.fn('now'),
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Books');
  },
};