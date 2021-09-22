const { Sequelize } = require('sequelize');
const setup = require('./config.json');
const { host, user, password, database, dialect } = setup.database;

module.exports = {
  sequelize: new Sequelize(database, user, password, {
    host: host,
    dialect: dialect
  })
};
