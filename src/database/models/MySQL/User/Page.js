// src/models/MySQL/Page.js

var Sequelize = require('sequelize');

var MySqlConn = require('../../../connections/MySqlConn');

var Page = MySqlConn.define('stkbd_page', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    route: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'created',
    updatedAt: 'updated'
})

module.exports = Page;
