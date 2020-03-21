// src/models/MySQL/PermissionRoute.js

var StatusCode = require('network/StatusCode');

var Permission = require('../models/Permission')

var PermissionRoute = {
    // Create
    create: function (req, res) {
        Permission.create({
            name: req.body.name,
            description: req.body.description,
            key: req.body.key,
            read_write: req.body.readWrite,
            level: req.body.level
        })
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.name === 'SequelizeUniqueConstraintError' && err.fields.email !== undefined) {
                res.status(StatusCode.EMAIL_ALREADY_TAKEN).json({msg: 'Permission is already exist.'})
            } else {
                res.status(StatusCode.ACCOUNT_DOES_NOT_EXIST).json({msg: '잘못된 요청입니다.'})
            }
        })
    },

    // Read All
    readAll: function (req, res) {
        Permission.findAll({
        })
        .then(function (result) {
            res.json(result)
        })
    },

    // Read
    read: function (req, res) {
        var permissionId = req.params.permissionId

        Permission.findByPk(permissionId)
        .then(function (result) {
            res.json(result)
        })
    },

    // Update
    update: function (req, res) {
        var permissionId = req.params.permissionId

        var updateObj = {
            name: req.body.name,
            description: req.body.description,
            key: req.body.key,
            read_write: req.body.readWrite,
            level: req.body.level
        }
        var whereObj = {
            where: {
                id: permissionId
            }
        }

        Permission.update(updateObj, whereObj)
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
        var permissionId = req.params.permissionId

        Permission.destroy({
            where: {
                id: permissionId
            }
        }).then(function (result) {
            res.json(result)
        })
    }
}

module.exports = PermissionRoute
