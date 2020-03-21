// src/graphql/MyApp/resolvers/UserResolver.js

const User = require('database/MySQL/MyApp/models/User');

const UserResolver = {
    getUser: ({ id }) => {
        return User.findByPk(id);
    },
};

module.exports = UserResolver;
