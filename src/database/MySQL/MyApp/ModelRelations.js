// src/database/models/MySQL/ModelRelations.js

// User models
var User = require('./models/User');
var UserPost = require('./models/UserPost');

var ModelRelations = {
    defineRelations: function () {
        User.hasMany(UserPost, {foreignKey: 'user_id', as: 'posts'});
    },
}

module.exports = ModelRelations;
