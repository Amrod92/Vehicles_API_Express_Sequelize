const setup = require('./config.json');
const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2/promise');

//module.exports = db = {};

initialize();

const { host, user, password, database, dialect } = setup.database;

async function initialize() {
  // create db if it doesn't already exist
  const connection = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: null
  });
  // creating database 'motorway'
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

  // use table motorway
  await connection.query(`USE ${database};`);

  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: dialect
  });

  const queryInterface = sequelize.getQueryInterface();

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

  //creating tables vehicles
  await connection.query(
    'CREATE TABLE vehicles (id INT NOT NULL AUTO_INCREMENT, model VARCHAR(255) NOT NULL, make VARCHAR(255) NOT NULL, updatedAt DATETIME, createdAt DATETIME, PRIMARY KEY (id));'
  );

  // sync all models with database
  await sequelize.sync();
}