const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: true
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//models
db.contact = require('./model/contact')(Sequelize, sequelize);

module.exports = db;