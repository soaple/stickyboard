// src/database/models/MySQL/ModelRelations.js

// User models
var User = require('./User/User');
var UserProfile = require('./User/UserProfile');
var UserLayout = require('./User/UserLayout');
var Group = require('./User/Group');
var GroupUser = require('./User/GroupUser');
var Permission = require('./User/Permission');
var GroupPermission = require('./User/GroupPermission');

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
