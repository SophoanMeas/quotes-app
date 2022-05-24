// importing the sequelize constructor from the library
const Sequelize = require('sequelize')

require('dotenv').config();

//creating the connection to the DB utilizing local variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize