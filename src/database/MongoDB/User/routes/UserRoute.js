// src/database/MongoDB/User/routes/UserRoute.js

const MongoDbConn = require('../../Connection');

const StatusCode = require('network/StatusCode');

const UserRoute = {
    readAll: function(req, res) {
        res.status(StatusCode.OK).json({
            name: 'MongoDB',
            company: 'MongoDB Inc.',
        });
    },
};

module.exports = UserRoute;
