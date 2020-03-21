// src/models/MySQL/GroupUserRoute.js

var StatusCode = require('network/StatusCode');

var GroupUser = require('../models/GroupUser')
var User = require('../models/User')

var GroupUserRoute = {
    // Create
    create: function (req, res) {
        var groupId = req.params.groupId
        var userId = req.body.userId

        GroupUser.find({
            where: {
                user_id: userId
            }
        })
        .then(function (result) {
            if (result !== null) {
                res.status(StatusCode.ALREADY_IN_THE_OTHER_GROUP).json({msg: '선택하신 관리자가 이미 다른 그룹에 속해있습니다.'})
            } else {
                GroupUser.create({
                    group_id: groupId,
                    user_id: userId
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

        GroupUser.findAll({
            where: {
                group_id: groupId
            },
            include: [{
                model: User,
                attributes: { exclude: ['password'] },
            }]
        })
        .then(function (result) {
            res.json(result)
        })
    },

    // Read
    read: function (req, res) {
        var groupId = req.params.groupId
        var userId = req.params.userId

        GroupUser.findByPk(groupId)
        .then(function (result) {
            res.json(result)
        })
    },

    // Update
    update: function (req, res) {
        var groupId = req.params.groupId
        var userId = req.params.userId

        var updateObj = {
            name: req.body.name
        }
        var whereObj = {
            where: {
                id: groupId
            }
        }

        GroupUser.update(updateObj, whereObj)
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
        var userId = req.params.userId

        GroupUser.destroy({
            where: {
                group_id: groupId,
                user_id: userId
            }
        }).then(function (result) {
            res.json(result)
        })
    }
}

module.exports = GroupUserRoute
