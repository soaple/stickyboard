// src/graphql/MyApp/resolvers/UserPostResolver.js

const UserPost = require('database/MySQL/MyApp/models/UserPost');

const UserPostResolver = {
    getUserPost: ({ id }) => {
        return UserPost.findByPk(id);
    },
};

module.exports = UserPostResolver;
