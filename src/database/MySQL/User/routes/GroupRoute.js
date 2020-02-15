// src/models/MySQL/GroupRoute.js

var StatusCode = require('network/StatusCode');

var Group = require('../models/Group')

var GroupRoute = {
    // Create
    create: function (req, res) {
        Group.create({
            name: req.body.name,
            description: req.body.description
        })
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.name === 'SequelizeUniqueConstraintError' && err.fields.email !== undefined) {
                res.status(StatusCode.EMAIL_ALREADY_TAKEN).json({msg: '이미 존재하는 그룹 이름입니다.'})
            } else {
                res.status(StatusCode.BAD_REQUEST).json({msg: '잘못된 요청입니다.'})
            }
        })
    },

    // Read All
    readAll: function (req, res) {
        Group.findAll()
        .then(function (result) {
            res.json(result)
        })
    },

    // Read
    read: function (req, res) {
        var groupId = req.params.groupId

        Group.findById(groupId)
        .then(function (result) {
            res.json(result)
        })
    },

    // Update
    update: function (req, res) {
        var groupId = req.params.groupId

        var updateObj = {
            name: req.body.name
        }
        var whereObj = {
            where: {
                id: groupId
            }
        }

        Group.update(updateObj, whereObj)
        .then(function (result) {
            if (result === 1) {
                res.status(StatusCode.OK)
            } else {
                res.status(StatusCode.NOT_FOUND)
            }
        })
        .catch(function (err) {
            console.log(err)
        })
    },

    // Delete
    delete: function (req, res) {
        var groupId = req.params.groupId
        Group.destroy({
            where: {
                id: groupId
            }
        }).then(function (result) {
            res.json(result)
        })
    }
}

module.exports = GroupRoute
