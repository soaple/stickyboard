// src/graphql/MyApp/resolvers/UserPostResolver.js

const MySqlConn = require('database/connections/MySqlConn');
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

    createUserPost: async ({ title, content }) => {
        return await UserPost.create(
            {
                title: title,
                content: content,
            },
            { returning: true }
        );
    },

    updateUserPost: ({ id, title, content, hits, created, updated }) => {
        return MySqlConn.transaction(async (transaction) => {
            const result = await UserPost.update(
                {
                    title: title,
                    content: content,
                    hits: hits,
                    created: created,
                    updated: updated,
                },
                {
                    where: {
                        id: id,
                    },
                    // returning: true,
                    // plain: true,
                },
                { transaction }
            );

            return UserPost.findByPk(id, { transaction });
        });
    },
};

module.exports = UserPostResolver;
