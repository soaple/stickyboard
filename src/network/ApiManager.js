// src/network/ApiManager.StickyBoard.js

import RestClient from './RestClient';
import UrlList from './UrlList';

const ApiManager = {
    /**
     * Auth APIs
     */
    Auth: {
        // Auth
        signUp: function(user, callback) {
            RestClient.post(UrlList.Auth.getAuthSignUpUrl(), user, callback)
        },

        signIn: function(email, password, callback) {
            var params = { email: email, password: password }
            RestClient.post(UrlList.Auth.getAuthSignInUrl(), params, callback)
        },

        signOut: function(callback) {
            RestClient.post(UrlList.Auth.getAuthSignInUrl(), callback)
        },
    },

    /**
     * StickyBoard APIs
     */
    StickyBoard: {
        // User
        readUsers: function(offset, limit, callback) {
            var params = {offset: offset, limit: limit}
            RestClient.get(UrlList.StickyBoard.getUserUrl(), params, callback)
        },

        readUsersByKeyword: function(keyword, callback) {
            var params = {keyword: keyword}
            RestClient.get(UrlList.StickyBoard.getUserUrl(), params, callback)
        },

        readUser: function(userId, callback) {
            const params = {};
            RestClient.get(UrlList.StickyBoard.getUserIdUrl(userId), params, callback)
        },

        readUserGroup: function(userId, callback) {
            const params = {};
            RestClient.get(UrlList.StickyBoard.getUserGroupUrl(userId), params, callback)
        },

        readUserPermissions: function(userId, callback) {
            const params = {};
            RestClient.get(UrlList.StickyBoard.getUserPermissionUrl(userId), params, callback)
        },

        updateUser: function(user, callback) {
            RestClient.put(UrlList.StickyBoard.getUserIdUrl(user.id), user, callback)
        },

        updatePassword: function(userId, newPassword, callback) {
            RestClient.put(UrlList.StickyBoard.getUserPasswordUrl(userId), {password: newPassword}, callback)
        },

        deleteUser: function(userId, callback) {
            RestClient.delete(UrlList.StickyBoard.getUserIdUrl(userId), callback)
        },

        // User Profile

        // User Layout
        readUserLayout: function(userId, route, callback) {
            var params = { route: route };
            RestClient.get(UrlList.StickyBoard.getUserLayoutUrl(userId), params, callback)
        },

        updateUserLayout: function(userId, route, layout, blocks, callback) {
            var params = {
                route: route,
                layout: layout,
                blocks: blocks,
            };
            RestClient.put(UrlList.StickyBoard.getUserLayoutUrl(userId), params, callback)
        },

        deleteUserLayout: function(userId, route, callback) {
            RestClient.delete(UrlList.StickyBoard.getUserLayoutUrl(userId), callback)
        },

        // Group
        createGroup: function(group, callback) {
            RestClient.post(UrlList.StickyBoard.getGroupUrl(), group, callback)
        },

        readGroups: function(callback) {
            const params = {};
            RestClient.get(UrlList.StickyBoard.getGroupUrl(), params, callback)
        },

        updateGroup: function(group, callback) {
            RestClient.put(UrlList.StickyBoard.getGroupIdUrl(group.id), group, callback)
        },

        deleteGroup: function(groupId, callback) {
            RestClient.delete(UrlList.StickyBoard.getGroupIdUrl(groupId), callback)
        },

        // GroupUser
        createGroupUser: function(groupId, userId, callback) {
            RestClient.post(UrlList.StickyBoard.getGroupUserUrl(groupId), {userId: userId}, callback)
        },

        readGroupUsers: function(groupId, callback) {
            const params = {};
            RestClient.get(UrlList.StickyBoard.getGroupUserUrl(groupId), params, callback)
        },

        deleteGroupUser: function(groupId, userId, callback) {
            RestClient.delete(UrlList.StickyBoard.getGroupUserIdUrl(groupId, userId), callback)
        },

        // GroupPermission
        createGroupPermission: function(groupId, permissionId, callback) {
            RestClient.post(UrlList.StickyBoard.getGroupPermissionUrl(groupId), {permissionId: permissionId}, callback)
        },

        readGroupPermissions: function(groupId, callback) {
            const params = {};
            RestClient.get(UrlList.StickyBoard.getGroupPermissionUrl(groupId), params, callback)
        },

        deleteGroupPermission: function(groupId, permissionId, callback) {
            RestClient.delete(UrlList.StickyBoard.getGroupPermissionIdUrl(groupId, permissionId), callback)
        },

        // Permission
        createPermission: function(permission, callback) {
            RestClient.post(UrlList.StickyBoard.getPermissionUrl(), permission, callback)
        },

        readPermissions: function(callback) {
            const params = {};
            RestClient.get(UrlList.StickyBoard.getPermissionUrl(), params, callback)
        },

        updatePermission: function(permission, callback) {
            RestClient.put(UrlList.StickyBoard.getPermissionIdUrl(permission.id), permission, callback)
        },

        deletePermission: function(permissionId, callback) {
            RestClient.delete(UrlList.StickyBoard.getPermissionIdUrl(permissionId), callback)
        },
    },

    /**
     * Database APIs
     */
    MySQL: {
        readUsers: function(offset, limit, callback) {
            var params = { offset: offset, limit: limit };
            RestClient.get(UrlList.MySQL.getUserUrl(), params, callback)
        },
    },

    Firestore: {
        readUsers: function(offset, limit, callback) {
            var params = { offset: offset, limit: limit };
            RestClient.get(UrlList.Firestore.getUserUrl(), params, callback)
        },
    },

    MongoDB: {
        readUsers: function(offset, limit, callback) {
            var params = { offset: offset, limit: limit };
            RestClient.get(UrlList.MongoDB.getUserUrl(), params, callback)
        },
    },

    /**
     * Your App's APIs
     */
    MyApp: {
    },
}

export default ApiManager;
