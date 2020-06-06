// src/database/MongoDB/User/routes/UserRoute.js

const MongoDbConn = require('../../Connection');

const StatusCode = require('network/StatusCode');

const UserRoute = {
    readAll: function(req, res) {
        MongoDbConn.getDbInstance()
            .then((db) => {
                db.collection('stkbd_user')
                    .find({})
                    .toArray(function(err, result) {
                        if (err) throw err;
                        
                        res.status(StatusCode.OK).json(result);

                        MongoDbConn.close();
                    });
            })
            .catch((err) => {
                res.status(StatusCode.INTERNAL_SERVER_ERROR).json(result);
            });
    },
};

module.exports = UserRoute;
