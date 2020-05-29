// src/database/Firestore/User/routes/UserRoute.js

// const FirebaseConn = require('../../Connection');
// const db = FirebaseConn.firestore;

const StatusCode = require('network/StatusCode');

const UserRoute = {
    readAll: function(req, res) {
        // let userRef = db.collection('User');

        // res.status(StatusCode.OK).json(userRef);

        res.status(StatusCode.OK).json({
            name: 'Firestore',
            company: 'Google',
        });
    },
};

module.exports = UserRoute;
