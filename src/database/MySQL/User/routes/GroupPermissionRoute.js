// src/models/MySQL/GroupPermissionRoute.js

var StatusCode = require('network/StatusCode');

var GroupPermission = require('../models/GroupPermission')
var Permission = require('../models/Permission')

var GroupPermissionRoute = {
    // Create
    create: function (req, res) {
        var groupId = req.params.groupId
        var permissionId = req.body.permissionId

        GroupPermission.find({
            where: {
                group_id: groupId,
                permission_id: permissionId
            }
        })
        .then(function (result) {
            console.log('result', result)

            if (result !== null) {
                res.status(StatusCode.ALREADY_IN_THE_OTHER_GROUP).json({msg: 'Selected permission is already included in the group.'})
            } else {
                GroupPermission.create({
                    group_id: groupId,
                    permission_id: permissionId
                })
                .then(function (result) {
                    res.json(result)
                })
                .catch(function (err) {
                    console.log(err)
                })
            }
        })
    },

    // Read All
    readAll: function (req, res) {
        var groupId = req.params.groupId

        GroupPermission.findAll({
            where: {
                group_id: groupId
            },
            include: [{
                model: Permission
            }]
        })
        .then(function (result) {
            res.json(result)
        })
    },

    // Read
    read: function (req, res) {
        var groupId = req.params.groupId
        var permissionId = req.params.permissionId

        GroupPermission.findByPk(groupId)
        .then(function (result) {
            res.json(result)
        })
    },

    // Update
    update: function (req, res) {
        var groupId = req.params.groupId
        var permissionId = req.params.permissionId

        var updateObj = {
            name: req.body.name
        }
        var whereObj = {
            where: {
                id: groupId
            }
        }

        GroupPermission.update(updateObj, whereObj)
        .then(function (result) {
            if (result !== null) {
                res.status(StatusCode.OK).json({})
            } else {
                res.status(StatusCode.NOT_FOUND).json({})
            }
        })
        .catch(function (err) {
            console.log(err)
        })
    },

    // Delete
    delete: function (req, res) {
        var groupId = req.params.groupId
        var permissionId = req.params.permissionId

        GroupPermission.destroy({
            where: {
                group_id: groupId,
                permission_id: permissionId
            }
        }).then(function (result) {
            res.json(result)
        })
    }
}

module.exports = GroupPermissionRoute
