// src/models/MySQL/GroupUser.js

var Sequelize = require('sequelize')

var MySqlConn = require('../../../connections/MySqlConn');

var GroupUser = MySqlConn.define('stkbd_group_user', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    group_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'created',
    updatedAt: false
})

module.exports = GroupUser;
