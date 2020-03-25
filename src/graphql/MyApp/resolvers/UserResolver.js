// src/graphql/MyApp/resolvers/UserResolver.js

const User = require('database/MySQL/MyApp/models/User');

const UserResolver = {
    readUser: ({ id }) => {
        return User.findByPk(id);
    },

    readUsers: ({ offset, limit }) => {
        return User.findAndCountAll({
            where: {
            },
            offset: offset,
            limit: limit,
        });
    },
};

module.exports = UserResolver;
