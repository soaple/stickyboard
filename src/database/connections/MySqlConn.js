// src/database/connections/MySqlConn.js

var Sequelize = require('sequelize');

const DB_DATABASE = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const MySqlConn = new Sequelize(database, username, password, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    logging: false,
    reconnect: true,
})

module.exports = MySqlConn;
