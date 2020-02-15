// src/models/MySQL/UserLayoutRoute.js

var StatusCode = require('network/StatusCode');

var UserLayout = require('../models/UserLayout')
var User = require('../models/User')

var UserLayoutRoute = {
    // Create
    create: function (req, res) {
        var userId = req.params.userId;
        var route = req.body.route;
        var layout = req.body.layout;

        UserLayout.find({
            where: {
                user_id: userId,
                route: route,
            }
        })
        .then(function (result) {
            if (result !== null) {
                res.status(StatusCode.CONFLICT).json({msg: 'Error'})
            } else {
                UserLayout.create({
                    user_id: userId,
                    route: route,
                    layout: layout,
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

    // Read
    read: function (req, res) {
        var userId = req.params.userId;
        var route = req.query.route;

        UserLayout.findOne({
            where: {
                user_id: userId,
                route: route,
            }
        })
        .then(function (result) {
            // console.log(result)
            if (result !== null) {
                res.status(StatusCode.OK).json(result)
            } else {
                res.status(StatusCode.NOT_FOUND).json({})
            }
        })
    },

    // Update
    update: function (req, res) {
        var userId = req.params.userId;
        var { route, layout, blocks } = req.body;

        var updateObj = {
            user_id: userId,
            route: route,
            layout: layout,
            blocks: blocks,
        }
        var whereObj = {
            where: {
                user_id: userId,
                route: route,
            }
        }

        UserLayout.upsert(updateObj, whereObj)
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
        var userId = req.params.userId;
        var route = req.body.route;

        UserLayout.destroy({
            where: {
                user_id: userId,
                route: route,
            }
        }).then(function (result) {
            res.json(result)
        })
    }
}

module.exports = UserLayoutRoute
