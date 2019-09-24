// src/models/MySQL/PageRoute.js

var StatusCode = require('../../../../../network/StatusCode');

var Page = require('../Page');

var PageRoute = {
    // Create
    create: function (req, res) {
        Page.create({
            route: req.body.route,
        })
        .then(function (result) {
            res.json(result)
        })
        .catch(function (err) {
            res.status(StatusCode.BAD_REQUEST).json(err);
        })
    },

    // Read All
    readAll: function (req, res) {
        Page.findAll({
        })
        .then(function (result) {
            res.json(result)
        })
    },

    // Read
    read: function (req, res) {
        var pageId = req.params.pageId;

        Page.findById(pageId)
        .then(function (result) {
            res.json(result)
        })
    },

    // Update
    update: function (req, res) {
        var pageId = req.params.pageId;

        var updateObj = {
            route: req.body.route
        }
        var whereObj = {
            where: {
                id: pageId
            }
        }

        Page.update(updateObj, whereObj)
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
        var pageId = req.params.pageId;

        Page.destroy({
            where: {
                id: pageId
            }
        }).then(function (result) {
            res.json(result)
        })
    }
}

module.exports = PageRoute;
