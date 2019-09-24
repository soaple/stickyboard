// src/models/MySQL/UserRoute.js

var jwt = require('jsonwebtoken');

var StatusCode = require('../../../../../network/StatusCode');
var Secret = require('../../../../../utils/Secret');

var User = require('../User')
var GroupUser = require('../GroupUser')
var GroupPermission = require('../GroupPermission')
var Group = require('../Group')
var Permission = require('../Permission')

var UserRoute = {
    signUp: function (req, res) {
        User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            // gender: req.body.gender,
            // company: req.body.company,
            // department: req.body.department,
            // position: req.body.position,
            // mobile: req.body.mobile,
            // office: req.body.office
        })
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            if (err.name === 'SequelizeUniqueConstraintError' && err.fields.email !== undefined) {
                res.status(StatusCode.EMAIL_ALREADY_TAKEN).json({msg: '이미 존재하는 이메일입니다.'})
            } else if (err.name === 'SequelizeValidationError' && err.errors[0].path === 'email') {
                res.status(StatusCode.INVALID_EMAIL_FORMAT).json({msg: '이메일 포맷이 잘못 되었습니다.'})
            } else {
                res.status(StatusCode.ACCOUNT_DOES_NOT_EXIST).json({msg: '잘못된 요청입니다.'})
            }
        })
    },

    signIn: function (req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function (result) {
            if (result === null) {
                res.status(StatusCode.ACCOUNT_DOES_NOT_EXIST).json({msg: '존재하지 않는 계정입니다.'})
            }

            var user = result.dataValues
            // Check password
            if (user.password !== req.body.password) {
                res.status(StatusCode.WRONG_PASSWORD).json({msg: '패스워드가 틀렸습니다. 다시 한 번 확인해주세요.'})
            }

            // Delete password information from the user object
            delete user.password

            // https://github.com/auth0/node-jsonwebtoken
            // Create a token
            var token = jwt.sign({
                user: user
            }, Secret.key, { expiresIn: '24h' })

            // Reponse
            res.status(StatusCode.OK)
                .cookie('token', token, { secure: false, maxAage: 86400000, httpOnly: false })
                .cookie('userId', user.id, { secure: false, maxAage: 86400000, httpOnly: false })
                .cookie('userEmail', user.email, { secure: false, maxAage: 86400000, httpOnly: false })
                .cookie('userName', user.name, { secure: false, maxAage: 86400000, httpOnly: false })
                .cookie('userGender', user.gender, { secure: false, maxAage: 86400000, httpOnly: false })
                .cookie('userCompany', user.company, { secure: false, maxAage: 86400000, httpOnly: false })
                .cookie('userDepartment', user.department, { secure: false, maxAage: 86400000, httpOnly: false })
                .cookie('userPosition', user.position, { secure: false, maxAage: 86400000, httpOnly: false })
                .cookie('isSuperuser', user.is_superuser, { secure: false, maxAage: 86400000, httpOnly: false })
                .json({
                    user: user
                })
        })
    },

    signOut: function (req, res) {

    },

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

        if (parseInt(userId) !== req.decoded.user.id) {
            res.status(StatusCode.PERMISSION_DENIED).json({msg: '권한이 없습니다.'})
        }

        User.findById(userId)
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
