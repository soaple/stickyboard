// src/database/MySQL/MyApp/models/User.js

var Sequelize = require('sequelize');

var MySqlConn = require('database/connections/MySqlConn');

var User = MySqlConn.define('myapp_user', {
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
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'date_joined',
    updatedAt: 'last_online'
})

module.exports = User;
