// src/network/UrlList.js

const BASE_URL = window.location.origin + '/api/'

var UrlList = {

    // User
    getUserUrl: function () {
        return BASE_URL + 'user/'
    },

    getUserSignUpUrl: function () {
        return this.getUserUrl() + 'signup/'
    },

    getUserSignInUrl: function () {
        return this.getUserUrl() + 'signin/'
    },

    getUserSignOutUrl: function () {
        return this.getUserUrl() + 'signout/'
    },

    getUserIdUrl: function (userId) {
        return this.getUserUrl() + userId + '/'
    },

    getUserPasswordUrl: function (userId) {
        return this.getUserIdUrl(userId) + 'password/'
    },

    getUserGroupUrl: function (userId) {
        return this.getUserIdUrl(userId) + 'group/'
    },

    getUserPermissionUrl: function (userId) {
        return this.getUserIdUrl(userId) + 'permission/'
    },

    // User Layout
    getUserLayoutUrl: function (userId) {
        return this.getUserIdUrl(userId) + 'layout/'
    },

    // Group
    getGroupUrl: function () {
        return BASE_URL + 'group/'
    },

    getGroupIdUrl: function (groupId) {
        return this.getGroupUrl() + groupId + '/'
    },

    // GroupUser
    getGroupUserUrl: function (groupId) {
        return this.getGroupIdUrl(groupId) + 'user/'
    },

    getGroupUserIdUrl: function (groupId, userId) {
        return this.getGroupUserUrl(groupId) + userId + '/'
    },

    // GroupPermission
    getGroupPermissionUrl: function (groupId) {
        return this.getGroupIdUrl(groupId) + 'permission/'
    },

    getGroupPermissionIdUrl: function (groupId, permissionId) {
        return this.getGroupPermissionUrl(groupId) + permissionId + '/'
    },

    // Permission
    getPermissionUrl: function (groupId) {
        return BASE_URL + 'permission/'
    },

    getPermissionIdUrl: function (permissionId) {
        return this.getPermissionUrl() + permissionId + '/'
    },

}

module.exports = UrlList;
