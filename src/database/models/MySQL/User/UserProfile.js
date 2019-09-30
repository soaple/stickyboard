// src/models/MySQL/UserProfile.js

var Sequelize = require('sequelize')

var MySqlConn = require('../../../connections/MySqlConn');

var UserProfile = MySqlConn.define('stkbd_user_profile', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: ''
    },
    gender: {
        type: Sequelize.INTEGER(1).UNSIGNED,
        allowNull: true,
        defaultValue: 0
    },
    company: {
        type: Sequelize.STRING(50)
    },
    department: {
        type: Sequelize.STRING(50)
    },
    position: {
        type: Sequelize.STRING(50)
    },
    mobile: {
        type: Sequelize.STRING(20)
    },
    office: {
        type: Sequelize.STRING(20)
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

module.exports = UserProfile;
