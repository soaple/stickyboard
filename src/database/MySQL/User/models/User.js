// src/models/MySQL/User.js

var Sequelize = require('sequelize')

var MySqlConn = require('database/connections/MySqlConn');

var User = MySqlConn.define('stkbd_user', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(255)
    },
    is_superuser: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'date_joined',
    updatedAt: 'last_online'
})

module.exports = User;
