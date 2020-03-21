// src/graphql/root.js

const User = require('database/MySQL/User/models/User');

const root = {
    getUser: ({ id }) => {
        return User.findByPk(id);
    },
};

module.exports = root;
