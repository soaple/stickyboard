// src/database/MySQL/MyApp/models/UserPost.js

var Sequelize = require('sequelize');

const MySqlConn = require('database/MySQL/Connection');

var UserPost = MySqlConn.define('myapp_user_post', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '',
    },
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    createdAt: 'created',
    updatedAt: 'updated'
})

module.exports = UserPost;
