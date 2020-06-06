// src/database/Firestore/User/routes/UserRoute.js

const firestore = require('../../Connection');

const StatusCode = require('network/StatusCode');

const UserRoute = {
    readAll: async function(req, res) {
        const userSnapshot = await firestore.collection('user').get();

        let userArray = [];
        userSnapshot.forEach((doc) => {
            userArray.push(doc.data());
        });

        res.status(StatusCode.OK).json(userArray);
    },
};

module.exports = UserRoute;
