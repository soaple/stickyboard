// src/graphql/MyApp/resolvers/UserPostResolver.js

const UserPost = require('database/MySQL/MyApp/models/UserPost');

const UserPostResolver = {
    readUserPost: ({ id }) => {
        return UserPost.findByPk(id);
    },

    readUserPosts: ({ offset, limit }) => {
        return UserPost.findAndCountAll({
            where: {},
            offset: offset,
            limit: limit,
        });
    },

    createUserPost: async ({ title, content }) => {},
};

module.exports = UserPostResolver;
