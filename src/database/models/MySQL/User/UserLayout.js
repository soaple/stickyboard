// src/models/MySQL/UserLayout.js

var Sequelize = require('sequelize')

var MySqlConn = require('../../../connections/MySqlConn');

var UserLayout = MySqlConn.define('stkbd_user_layout', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    page_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    layout: {
        type: Sequelize.STRING(2048),
        allowNull: false
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'page_id']
        }
    ],
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'created',
    updatedAt: 'updated'
})

module.exports = UserLayout;
