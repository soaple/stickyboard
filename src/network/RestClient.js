// src/network/RestClient.js

var request = require('request')

var StatusCode = require('./StatusCode')
var CookieManager = require('./CookieManager')

var RestClient = {
    // GET
    sendGetRequest: function (url, callback) {
        var option = {url: url}
        var token = CookieManager.getCookie('token')
        if (token) {
            option.headers = {'Authorization': `Bearer ${token}`};
        }

        request.get(option, function (error, response, body) {
            if (error) {
                console.log(error)
                return
            }

            if (response.statusCode === StatusCode.BAD_REQUEST ||
                response.statusCode === StatusCode.UNAUTHORIZED) {
                CookieManager.deleteAllCookie()
                window.location = '/signin'
            }

            callback(response.statusCode, JSON.parse(response.body))
        })
    },

    // GET with params
    sendGetRequestWithParams: function (url, params, callback) {
        var option = {url: url, qs: params}
        var token = CookieManager.getCookie('token')
        if (token) {
            option.headers = {'Authorization': `Bearer ${token}`};
        }

        request.get(option, function (error, response, body) {
            if (error) {
                console.log(error)
                return
            }

            if (response.statusCode === StatusCode.BAD_REQUEST ||
                response.statusCode === StatusCode.UNAUTHORIZED) {
                CookieManager.deleteAllCookie()
                window.location = '/signin'
            }

            callback(response.statusCode, JSON.parse(response.body))
        })
    },

    // POST
    sendPostRequest: function (url, data, callback) {
        var option = {url: url, form: data}
        var token = CookieManager.getCookie('token')
        if (token) {
            option.headers = {'Authorization': `Bearer ${token}`};
        }

        request.post(option, function (error, response, body) {
            if (error) {
                console.log(error)
                return
            }

            if (response.statusCode === StatusCode.BAD_REQUEST ||
                response.statusCode === StatusCode.UNAUTHORIZED) {
                CookieManager.deleteAllCookie()
                window.location = '/signin'
            }

            callback(response.statusCode, JSON.parse(response.body))
        })
    },

    uploadFile: function (url, file, callback) {
        var data = new FormData()
        data.append('floorImage', file, file.name)

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            processData: false,
            contentType: false,
            success: function (result, status, xhr) {
                callback(200, result)
            },
            error: function (xhr, status, error) {
                callback(400, {msg: error})
            }
        })
    },

    // PUT
    sendPutRequest: function (url, data, callback) {
        var option = {url: url, form: data}
        var token = CookieManager.getCookie('token')
        if (token) {
            option.headers = {'Authorization': `Bearer ${token}`};
        }

        request.put(option, function (error, response, body) {
            if (error) {
                console.log(error)
                return
            }

            if (response.statusCode === StatusCode.BAD_REQUEST ||
                response.statusCode === StatusCode.UNAUTHORIZED) {
                CookieManager.deleteAllCookie()
                window.location = '/signin'
            }

            callback(response.statusCode, JSON.parse(response.body))
        })
    },

    // DELETE
    sendDeleteRequest: function (url, callback) {
        var option = {url: url}
        var token = CookieManager.getCookie('token')
        if (token) {
            option.headers = {'Authorization': `Bearer ${token}`};
        }

        request.delete(option, function (error, response, body) {
            if (error) {
                console.log(error)
                return
            }

            if (response.statusCode === StatusCode.BAD_REQUEST ||
                response.statusCode === StatusCode.UNAUTHORIZED) {
                CookieManager.deleteAllCookie()
                window.location = '/signin'
            }

            callback(response.statusCode, JSON.parse(response.body))
        })
    }
}

module.exports = RestClient
