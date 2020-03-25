// src/graphql/MyApp/resolvers/UserPostResolver.js

const UserPost = require('database/MySQL/MyApp/models/UserPost');

const UserPostResolver = {
    readUserPost: ({ id }) => {
        return UserPost.findByPk(id);
    },

    readUsers: ({ offset, limit }) => {
        return UserPost.findAll({
            where: {
            },
            offset: offset,
            limit: limit,
        });
    },
};

module.exports = UserPostResolver;
