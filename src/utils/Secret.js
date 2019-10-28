// src/utils/Secret.js

var jwt = require('jsonwebtoken')
var StatusCode = require('../network/StatusCode')

var PermissionChecker = require('./PermissionChecker')

var Secret = {
    key: process.env.SECRET_KEY,

    verifyToken: function (req, res, next) {
        // check header or url parameters or post parameters for token
        // var token = req.body.token || req.query.token || req.headers['x-access-token']
        var token = req.cookies.token

        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, Secret.key, function (err, decoded) {
                if (err) {
                    return res.status(StatusCode.UNAUTHORIZED).send({
                        success: false,
                        message: 'Please sign in.'
                    })
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded
                    next()
                }
            })
        } else {
            // if there is no token
            // return an error
            return res.status(StatusCode.UNAUTHORIZED).send({
                success: false,
                msg: 'Please sign in.'
            })
        }
    },

    verifyUserId: function (req, res, next) {
        this.verifyToken(req, res, function () {
            console.log(req.decoded.data.id)
            console.log(req.params.userId)
            if (req.decoded.data.id === parseInt(req.params.userId)) {
                next()
            } else {
                return res.status(StatusCode.UNAUTHORIZED).send({
                    success: false,
                    msg: 'No permission.'
                })
            }
        })
    },

    checkPermission: function (req, res, next, signInRequired) {
        // console.log('check permission...', req.cookies.token)
        var token = req.cookies.token

        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, Secret.key, function (err, decoded) {
                if (err) {
                    console.log(err)
                    if (err.name === 'TokenExpiredError') {
                        signInRequired()
                        // return res.status(StatusCode.UNAUTHORIZED).send({
                        //     success: false,
                        //     message: 'Token expired. Please sign-in again.'
                        // })
                    } else {
                        signInRequired()
                        // return res.status(StatusCode.UNAUTHORIZED).send({
                        //     success: false,
                        //     message: 'Token verifing error.'
                        // })
                    }
                } else {
                    // console.log(decoded)
                    var admin = decoded.admin

                    PermissionChecker.checkPermission(admin.id, req.url, function (isUserHasPermission) {
                        if (admin.is_superuser || isUserHasPermission) {
                            // if everything is good, save to request for use in other routes
                            req.decoded = decoded
                            next()
                        } else {
                            return res.status(StatusCode.UNAUTHORIZED).send({
                                success: false,
                                msg: 'The admin doesn\'t have a permission.'
                            })
                        }
                    })
                }
            })
        } else {
            next()
            // // if there is no token
            // // return an error
            // return res.status(StatusCode.UNAUTHORIZED).send({
            //     success: false,
            //     message: 'No token. Please sign in.'
            // })
        }
    }
}

module.exports = Secret
