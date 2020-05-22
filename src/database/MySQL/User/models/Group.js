// src/models/MySQL/Group.js

var Sequelize = require('sequelize')

const MySqlConn = require('database/MySQL/Connection');

var Group = MySqlConn.define('stkbd_group', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(255),
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(255)
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'created',
    updatedAt: 'updated'
})

module.exports = Group
