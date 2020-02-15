// src/network/UrlList.js

const BASE_URL = window.location.origin + '/';
const API_BASE_URL = BASE_URL + 'api/';
const STICKYBOARD_BASE_URL = API_BASE_URL + 'stkbd/';

var UrlList = {
    /**
     * Auth URLs
     */
    Auth: {
        // Auth
        getAuthUrl: function () {
            return `${BASE_URL}auth/`
        },

        getAuthSignUpUrl: function () {
            return `${this.getAuthUrl()}signup/`
        },

        getAuthSignInUrl: function () {
            return `${this.getAuthUrl()}signin/`
        },

        getAuthSignOutUrl: function () {
            return `${this.getAuthUrl()}signout/`
        },
    },

    /**
     * StickyBoard URLs
     */
    StickyBoard: {
        // User
        getUserUrl: function () {
            return `${STICKYBOARD_BASE_URL}user/`
        },

        getUserIdUrl: function (userId) {
            return `${this.getUserUrl()}${userId}/`
        },

        getUserPasswordUrl: function (userId) {
            return `${this.getUserIdUrl(userId)}password/`
        },

        getUserGroupUrl: function (userId) {
            return `${this.getUserIdUrl(userId)}group/`
        },

        getUserPermissionUrl: function (userId) {
            return `${this.getUserIdUrl(userId)}permission/`
        },

        // User Layout
        getUserLayoutUrl: function (userId) {
            return `${this.getUserIdUrl(userId)}layout/`
        },

        // Group
        getGroupUrl: function () {
            return `${STICKYBOARD_BASE_URL}group/`
        },

        getGroupIdUrl: function (groupId) {
            return `${this.getGroupUrl()}${groupId}/`
        },

        // GroupUser
        getGroupUserUrl: function (groupId) {
            return `${this.getGroupIdUrl(groupId)}user/`
        },

        getGroupUserIdUrl: function (groupId, userId) {
            return `${this.getGroupUserUrl(groupId)}${userId}/`
        },

        // GroupPermission
        getGroupPermissionUrl: function (groupId) {
            return `${this.getGroupIdUrl(groupId)}permission/`
        },

        getGroupPermissionIdUrl: function (groupId, permissionId) {
            return `${this.getGroupPermissionUrl(groupId)}${permissionId}/`
        },

        // Permission
        getPermissionUrl: function (groupId) {
            return `${STICKYBOARD_BASE_URL}permission/`
        },

        getPermissionIdUrl: function (permissionId) {
            return `${this.getPermissionUrl()}${permissionId}/`
        },
    },

    /**
     * Your App's URLs
     */
    MyApp: {
    },

}

module.exports = UrlList;
