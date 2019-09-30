// src/models/MySQL/Permission.js

var Sequelize = require('sequelize')

var MySqlConn = require('../../../connections/MySqlConn');

var Permission = MySqlConn.define('stkbd_permission', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    route: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(255)
    },
    key: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    read_write: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    level: {
        type: Sequelize.INTEGER(2).UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'created',
    updatedAt: 'updated'
})

module.exports = Permission;
