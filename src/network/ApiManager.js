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
            RestClient.sendPostRequest(UrlList.Auth.getAuthSignUpUrl(), user, callback)
        },

        signIn: function(email, password, callback) {
            var params = { email: email, password: password }
            RestClient.sendPostRequest(UrlList.Auth.getAuthSignInUrl(), params, callback)
        },

        signOut: function(callback) {
            RestClient.sendPostRequest(UrlList.Auth.getAuthSignInUrl(), callback)
        },
    },

    /**
     * StickyBoard APIs
     */
    StickyBoard: {
        // User
        readUsers: function(offset, limit, callback) {
            var params = {offset: offset, limit: limit}
            RestClient.sendGetRequestWithParams(UrlList.StickyBoard.getUserUrl(), params, callback)
        },

        readUsersByKeyword: function(keyword, callback) {
            var params = {keyword: keyword}
            RestClient.sendGetRequestWithParams(UrlList.StickyBoard.getUserUrl(), params, callback)
        },

        readUser: function(userId, callback) {
            RestClient.sendGetRequest(UrlList.StickyBoard.getUserIdUrl(userId), callback)
        },

        readUserGroup: function(userId, callback) {
            RestClient.sendGetRequest(UrlList.StickyBoard.getUserGroupUrl(userId), callback)
        },

        readUserPermissions: function(userId, callback) {
            RestClient.sendGetRequest(UrlList.StickyBoard.getUserPermissionUrl(userId), callback)
        },

        updateUser: function(user, callback) {
            RestClient.sendPutRequest(UrlList.StickyBoard.getUserIdUrl(user.id), user, callback)
        },

        updatePassword: function(userId, newPassword, callback) {
            RestClient.sendPutRequest(UrlList.StickyBoard.getUserPasswordUrl(userId), {password: newPassword}, callback)
        },

        deleteUser: function(userId, callback) {
            RestClient.sendDeleteRequest(UrlList.StickyBoard.getUserIdUrl(userId), callback)
        },

        // User Profile

        // User Layout
        readUserLayout: function(userId, route, callback) {
            var params = { route: route };
            RestClient.sendGetRequestWithParams(UrlList.StickyBoard.getUserLayoutUrl(userId), params, callback)
        },

        updateUserLayout: function(userId, route, layout, blocks, callback) {
            var params = {
                route: route,
                layout: layout,
                blocks: blocks,
            };
            RestClient.sendPutRequest(UrlList.StickyBoard.getUserLayoutUrl(userId), params, callback)
        },

        deleteUserLayout: function(userId, route, callback) {
            RestClient.sendDeleteRequest(UrlList.StickyBoard.getUserLayoutUrl(userId), callback)
        },

        // Group
        createGroup: function(group, callback) {
            RestClient.sendPostRequest(UrlList.StickyBoard.getGroupUrl(), group, callback)
        },

        readGroups: function(callback) {
            RestClient.sendGetRequest(UrlList.StickyBoard.getGroupUrl(), callback)
        },

        updateGroup: function(group, callback) {
            RestClient.sendPutRequest(UrlList.StickyBoard.getGroupIdUrl(group.id), group, callback)
        },

        deleteGroup: function(groupId, callback) {
            RestClient.sendDeleteRequest(UrlList.StickyBoard.getGroupIdUrl(groupId), callback)
        },

        // GroupUser
        createGroupUser: function(groupId, userId, callback) {
            RestClient.sendPostRequest(UrlList.StickyBoard.getGroupUserUrl(groupId), {userId: userId}, callback)
        },

        readGroupUsers: function(groupId, callback) {
            RestClient.sendGetRequest(UrlList.StickyBoard.getGroupUserUrl(groupId), callback)
        },

        deleteGroupUser: function(groupId, userId, callback) {
            RestClient.sendDeleteRequest(UrlList.StickyBoard.getGroupUserIdUrl(groupId, userId), callback)
        },

        // GroupPermission
        createGroupPermission: function(groupId, permissionId, callback) {
            RestClient.sendPostRequest(UrlList.StickyBoard.getGroupPermissionUrl(groupId), {permissionId: permissionId}, callback)
        },

        readGroupPermissions: function(groupId, callback) {
            RestClient.sendGetRequest(UrlList.StickyBoard.getGroupPermissionUrl(groupId), callback)
        },

        deleteGroupPermission: function(groupId, permissionId, callback) {
            RestClient.sendDeleteRequest(UrlList.StickyBoard.getGroupPermissionIdUrl(groupId, permissionId), callback)
        },

        // Permission
        createPermission: function(permission, callback) {
            RestClient.sendPostRequest(UrlList.StickyBoard.getPermissionUrl(), permission, callback)
        },

        readPermissions: function(callback) {
            RestClient.sendGetRequest(UrlList.StickyBoard.getPermissionUrl(), callback)
        },

        updatePermission: function(permission, callback) {
            RestClient.sendPutRequest(UrlList.StickyBoard.getPermissionIdUrl(permission.id), permission, callback)
        },

        deletePermission: function(permissionId, callback) {
            RestClient.sendDeleteRequest(UrlList.StickyBoard.getPermissionIdUrl(permissionId), callback)
        },
    },

    /**
     * Database APIs
     */
    MySQL: {
        readUsers: function(offset, limit, callback) {
            var params = { offset: offset, limit: limit };
            RestClient.sendGetRequestWithParams(UrlList.MySQL.getUserUrl(), params, callback)
        },
    },

    Firestore: {
        readUsers: function(offset, limit, callback) {
            var params = { offset: offset, limit: limit };
            RestClient.sendGetRequestWithParams(UrlList.Firestore.getUserUrl(), params, callback)
        },
    },

    MongoDB: {
        readUsers: function(offset, limit, callback) {
            var params = { offset: offset, limit: limit };
            RestClient.sendGetRequestWithParams(UrlList.MongoDB.getUserUrl(), params, callback)
        },
    },

    /**
     * Your App's APIs
     */
    MyApp: {
    },
}

export default ApiManager;
