// src/database/MySQL/Connection.js

var Sequelize = require('sequelize');

const database = process.env.DB_DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASS;

const MySqlConn = new Sequelize(database, username, password, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    logging: false,
    reconnect: true,
})

module.exports = MySqlConn;
