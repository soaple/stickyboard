// src/network/ApiManager.js

import RestClient from './RestClient';
import UrlList from './UrlList';

const ApiManager = {

    // Admin
    signUp: function (admin, callback) {
        RestClient.sendPostRequest(UrlList.getAdminSignUpUrl(), admin, callback)
    },

    signIn: function (email, password, callback) {
        var params = {email: email, password: password}
        RestClient.sendPostRequest(UrlList.getAdminSignInUrl(), params, callback)
    },

    signOut: function (callback) {
        RestClient.sendPostRequest(UrlList.getAdminSignInUrl(), callback)
    },

    readAdmins: function (offset, limit, callback) {
        var params = {offset: offset, limit: limit}
        RestClient.sendGetRequestWithParams(UrlList.getAdminUrl(), params, callback)
    },

    readAdminsByKeyword: function (keyword, callback) {
        var params = {keyword: keyword}
        RestClient.sendGetRequestWithParams(UrlList.getAdminUrl(), params, callback)
    },

    readAdmin: function (adminId, callback) {
        RestClient.sendGetRequest(UrlList.getAdminIdUrl(adminId), callback)
    },

    readAdminGroup: function (adminId, callback) {
        RestClient.sendGetRequest(UrlList.getAdminGroupUrl(adminId), callback)
    },

    readAdminPermissions: function (adminId, callback) {
        RestClient.sendGetRequest(UrlList.getAdminPermissionUrl(adminId), callback)
    },

    updateAdmin: function (admin, callback) {
        RestClient.sendPutRequest(UrlList.getAdminIdUrl(admin.id), admin, callback)
    },

    updatePassword: function (adminId, newPassword, callback) {
        RestClient.sendPutRequest(UrlList.getAdminPasswordUrl(adminId), {password: newPassword}, callback)
    },

    deleteAdmin: function (adminId, callback) {
        RestClient.sendDeleteRequest(UrlList.getAdminIdUrl(adminId), callback)
    },

    // Admin Layout
    readAdminLayout: function (adminId, route, callback) {
        var params = {route: route}
        RestClient.sendGetRequestWithParams(UrlList.getAdminLayoutUrl(adminId), params, callback)
    },

    updateAdminLayout: function (adminId, route, layout, callback) {
        var params = {route: route, layout: layout}
        RestClient.sendPutRequest(UrlList.getAdminLayoutUrl(adminId), params, callback)
    },

    deleteAdminLayout: function (adminId, route, callback) {
        RestClient.sendDeleteRequest(UrlList.getAdminLayoutUrl(adminId), callback)
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

    // GroupAdmin
    createGroupAdmin: function (groupId, adminId, callback) {
        RestClient.sendPostRequest(UrlList.getGroupAdminUrl(groupId), {adminId: adminId}, callback)
    },

    readGroupAdmins: function (groupId, callback) {
        RestClient.sendGetRequest(UrlList.getGroupAdminUrl(groupId), callback)
    },

    deleteGroupAdmin: function (groupId, adminId, callback) {
        RestClient.sendDeleteRequest(UrlList.getGroupAdminIdUrl(groupId, adminId), callback)
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

module.exports = ApiManager;
