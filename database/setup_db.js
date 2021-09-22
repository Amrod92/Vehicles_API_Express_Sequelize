const setup = require('./config.json');
const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2/promise');
const data = require('../car_list.json');

const { host, user, password, database, dialect } = setup.database;

module.exports = {
  initialize: async function () {
    // create db if it doesn't already exist
    const connection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: null
    });

    // drop database
    await connection.query(`DROP DATABASE \`${database}\`;`);

    // creating database 'motorway'
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // use table motorway
    await connection.query(`USE ${database};`);

    const { sequelize } = require('./connection');

    const queryInterface = sequelize.getQueryInterface();

    // creating table
    queryInterface.createTable('vehicles', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      make: {
        type: DataTypes.STRING,
        allowNull: false
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });

    // insert dummy data
    await queryInterface.bulkInsert('vehicles', data);

    // sync all models with database
    await sequelize.sync();
  }
};
