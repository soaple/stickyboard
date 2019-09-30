// src/network/UrlList.js

const BASE_URL = 'http://' + window.location.host + '/api/'

var UrlList = {

    // Admin
    getAdminUrl: function () {
        return BASE_URL + 'admin/'
    },

    getAdminSignUpUrl: function () {
        return this.getAdminUrl() + 'signup/'
    },

    getAdminSignInUrl: function () {
        return this.getAdminUrl() + 'signin/'
    },

    getAdminSignOutUrl: function () {
        return this.getAdminUrl() + 'signout/'
    },

    getAdminIdUrl: function (adminId) {
        return this.getAdminUrl() + adminId + '/'
    },

    getAdminPasswordUrl: function (adminId) {
        return this.getAdminIdUrl(adminId) + 'password/'
    },

    getAdminGroupUrl: function (adminId) {
        return this.getAdminIdUrl(adminId) + 'group/'
    },

    getAdminPermissionUrl: function (adminId) {
        return this.getAdminIdUrl(adminId) + 'permission/'
    },

    // Admin Layout
    getAdminLayoutUrl: function (adminId) {
        return this.getAdminIdUrl(adminId) + 'layout/'
    },

    // Group
    getGroupUrl: function () {
        return BASE_URL + 'group/'
    },

    getGroupIdUrl: function (groupId) {
        return this.getGroupUrl() + groupId + '/'
    },

    // GroupAdmin
    getGroupAdminUrl: function (groupId) {
        return this.getGroupIdUrl(groupId) + 'admin/'
    },

    getGroupAdminIdUrl: function (groupId, adminId) {
        return this.getGroupAdminUrl(groupId) + adminId + '/'
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
