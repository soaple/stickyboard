// src/models/MySQL/UserRoute.js

var StatusCode = require('network/StatusCode');

var User = require('../models/User')
var GroupUser = require('../models/GroupUser')
var GroupPermission = require('../models/GroupPermission')
var Group = require('../models/Group')
var Permission = require('../models/Permission')

var UserRoute = {
    // Read
    readAll: function (req, res) {
        var offset = parseInt(req.query.offset)
        var limit = parseInt(req.query.limit)
        var keyword = req.query.keyword

        if (keyword) {
            console.log('keyword', req.query.keyword)
            User.findAll({
                attributes: { exclude: ['password'] },
                where: {
                    $or: [
                        {
                            email: {
                                $like: '%' + keyword + '%'
                            }
                        },
                        {
                            name: {
                                $like: '%' + keyword + '%'
                            }
                        }
                    ]
                }
            })
            .then(function (result) {
                if (result === null) {
                    res.status(StatusCode.NOT_FOUND)
                } else {
                    res.json(result)
                }
            })
        } else {
            User.findAndCountAll({
                attributes: { exclude: ['password'] },
                offset: offset,
                limit: limit,
                order: [['date_joined', 'DESC']]
            })
            .then(function (result) {
                res.json(result)
            })
        }
    },

    // Read
    read: function (req, res) {
        var userId = req.params.userId

        if (parseInt(userId) !== req.user.id) {
            res.status(StatusCode.PERMISSION_DENIED).json({msg: '권한이 없습니다.'})
        }

        User.findByPk(userId)
        .then(function (result) {
            delete result.dataValues.password
            res.json(result)
        })
    },

    // Read group
    readGroup: function (req, res) {
        var userId = req.params.userId

        GroupUser.find({
            where: {
                user_id: userId
            },
            include: [{
                model: Group
            }]
        })
        .then(function (result) {
            if (result !== null) {
                var group = result.dataValues
                var groupId = result.group_id

                GroupPermission.findAll({
                    where: {
                        group_id: groupId
                    },
                    include: [{
                        model: Permission
                    }]
                })
                .then(function (result) {
                    var permissions = []
                    result.forEach(function (permission) {
                        permissions.push(permission.dataValues.permission)
                    })
                    group.permissions = permissions
                    res.status(StatusCode.OK).json(group)
                })
            } else {
                res.status(StatusCode.OK).json({})
            }
        })
    },

    // Read permissions
    readPermissions: function (req, res) {
        var userId = req.params.userId

        GroupUser.find({
            where: {
                user_id: userId
            }
        })
        .then(function (result) {
            // console.log(result)
            if (result !== null) {
                var groupId = result.group_id

                GroupPermission.findAll({
                    where: {
                        group_id: groupId
                    },
                    include: [{
                        model: Permission
                    }]
                })
                .then(function (result) {
                    res.status(StatusCode.OK).json(result)
                })
            } else {
                res.status(StatusCode.OK).json([])
            }
        })
    },

    // Update
    update: function (req, res) {
        var userId = req.params.userId

        var updateObj = {
            email: req.body.email,
            name: req.body.name,
            company: req.body.company,
            department: req.body.department,
            position: req.body.position,
            mobile: req.body.mobile,
            office: req.body.office
        }
        var whereObj = {
            where: {
                id: userId
            }
        }

        User.update(updateObj, whereObj)
        .then(function (result) {
            console.log(result)
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

    // Update password
    updatePassword: function (req, res) {
        var userId = req.params.userId

        var updateObj = {
            password: req.body.password
        }
        var whereObj = {
            where: {
                id: userId
            }
        }

        User.update(updateObj, whereObj)
        .then(function (result) {
            console.log(result)
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
        var userId = req.params.userId
        User.destroy({
            where: {
                id: userId
            }
        }).then(function (result) {
            res.json(result)
        })
    }
}

module.exports = UserRoute
