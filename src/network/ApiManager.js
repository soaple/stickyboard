// src/network/ApiManager.js

import RestClient from './RestClient';
import UrlList from './UrlList';

const ApiManager = {

    // User
    signUp: function (user, callback) {
        RestClient.sendPostRequest(UrlList.getUserSignUpUrl(), user, callback)
    },

    signIn: function (email, password, callback) {
        var params = {email: email, password: password}
        RestClient.sendPostRequest(UrlList.getUserSignInUrl(), params, callback)
    },

    signOut: function (callback) {
        RestClient.sendPostRequest(UrlList.getUserSignInUrl(), callback)
    },

    readUsers: function (offset, limit, callback) {
        var params = {offset: offset, limit: limit}
        RestClient.sendGetRequestWithParams(UrlList.getUserUrl(), params, callback)
    },

    readUsersByKeyword: function (keyword, callback) {
        var params = {keyword: keyword}
        RestClient.sendGetRequestWithParams(UrlList.getUserUrl(), params, callback)
    },

    readUser: function (userId, callback) {
        RestClient.sendGetRequest(UrlList.getUserIdUrl(userId), callback)
    },

    readUserGroup: function (userId, callback) {
        RestClient.sendGetRequest(UrlList.getUserGroupUrl(userId), callback)
    },

    readUserPermissions: function (userId, callback) {
        RestClient.sendGetRequest(UrlList.getUserPermissionUrl(userId), callback)
    },

    updateUser: function (user, callback) {
        RestClient.sendPutRequest(UrlList.getUserIdUrl(user.id), user, callback)
    },

    updatePassword: function (userId, newPassword, callback) {
        RestClient.sendPutRequest(UrlList.getUserPasswordUrl(userId), {password: newPassword}, callback)
    },

    deleteUser: function (userId, callback) {
        RestClient.sendDeleteRequest(UrlList.getUserIdUrl(userId), callback)
    },

    // User Layout
    readUserLayout: function (userId, route, callback) {
        var params = {route: route}
        RestClient.sendGetRequestWithParams(UrlList.getUserLayoutUrl(userId), params, callback)
    },

    updateUserLayout: function (userId, route, layout, callback) {
        var params = {route: route, layout: layout}
        RestClient.sendPutRequest(UrlList.getUserLayoutUrl(userId), params, callback)
    },

    deleteUserLayout: function (userId, route, callback) {
        RestClient.sendDeleteRequest(UrlList.getUserLayoutUrl(userId), callback)
    },

    // Group
    createGroup: function (group, callback) {
        RestClient.sendPostRequest(UrlList.getGroupUrl(), group, callback)
    },

    readGroups: function (callback) {
        RestClient.sendGetRequest(UrlList.getGroupUrl(), callback)
    },

    updateGroup: function (group, callback) {
        RestClient.sendPutRequest(UrlList.getGroupIdUrl(group.id), group, callback)
    },

    deleteGroup: function (groupId, callback) {
        RestClient.sendDeleteRequest(UrlList.getGroupIdUrl(groupId), callback)
    },

    // GroupUser
    createGroupUser: function (groupId, userId, callback) {
        RestClient.sendPostRequest(UrlList.getGroupUserUrl(groupId), {userId: userId}, callback)
    },

    readGroupUsers: function (groupId, callback) {
        RestClient.sendGetRequest(UrlList.getGroupUserUrl(groupId), callback)
    },

    deleteGroupUser: function (groupId, userId, callback) {
        RestClient.sendDeleteRequest(UrlList.getGroupUserIdUrl(groupId, userId), callback)
    },

    // GroupPermission
    createGroupPermission: function (groupId, permissionId, callback) {
        RestClient.sendPostRequest(UrlList.getGroupPermissionUrl(groupId), {permissionId: permissionId}, callback)
    },

    readGroupPermissions: function (groupId, callback) {
        RestClient.sendGetRequest(UrlList.getGroupPermissionUrl(groupId), callback)
    },

    deleteGroupPermission: function (groupId, permissionId, callback) {
        RestClient.sendDeleteRequest(UrlList.getGroupPermissionIdUrl(groupId, permissionId), callback)
    },

    // Permission
    createPermission: function (permission, callback) {
        RestClient.sendPostRequest(UrlList.getPermissionUrl(), permission, callback)
    },

    readPermissions: function (callback) {
        RestClient.sendGetRequest(UrlList.getPermissionUrl(), callback)
    },

    updatePermission: function (permission, callback) {
        RestClient.sendPutRequest(UrlList.getPermissionIdUrl(permission.id), permission, callback)
    },

    deletePermission: function (permissionId, callback) {
        RestClient.sendDeleteRequest(UrlList.getPermissionIdUrl(permissionId), callback)
    },

}

export default ApiManager;
