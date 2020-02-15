// src/database/models/MySQL/ModelRelations.js

// User models
var User = require('./models/User');
var UserProfile = require('./models/UserProfile');
var UserLayout = require('./models/UserLayout');
var Group = require('./models/Group');
var GroupUser = require('./models/GroupUser');
var Permission = require('./models/Permission');
var GroupPermission = require('./models/GroupPermission');

var ModelRelations = {
    defineRelations: function () {
        User.hasOne(UserProfile, {foreignKey: 'user_id'});
        User.hasOne(GroupUser, {foreignKey: 'user_id'});
        User.hasMany(UserLayout, {foreignKey: 'user_id'});

        UserProfile.belongsTo(User, {foreignKey: 'user_id'});
        UserLayout.belongsTo(User, {foreignKey: 'user_id'});

        Group.hasMany(GroupUser, {foreignKey: 'group_id'});
        Group.hasMany(GroupPermission, {foreignKey: 'group_id'});

        GroupUser.belongsTo(User, {foreignKey: 'user_id'});
        GroupUser.belongsTo(Group, {foreignKey: 'group_id'});

        Permission.hasMany(GroupPermission, {foreignKey: 'permission_id'});

        GroupPermission.belongsTo(Group, {foreignKey: 'group_id'});
        GroupPermission.belongsTo(Permission, {foreignKey: 'permission_id'});
    },
}

module.exports = ModelRelations;
