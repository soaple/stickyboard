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
    route: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    layout: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    blocks: {
        type: Sequelize.TEXT,
        allowNull: false
    },
}, {
    indexes: [
        {
            unique: true,
            fields: ['user_id', 'route']
        }
    ],
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'created',
    updatedAt: 'updated'
})

module.exports = UserLayout;
