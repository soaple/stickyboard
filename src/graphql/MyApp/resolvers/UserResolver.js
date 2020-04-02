// src/graphql/MyApp/resolvers/UserResolver.js

const MySqlConn = require('database/connections/MySqlConn');
const User = require('database/MySQL/MyApp/models/User');

const UserResolver = {
    readUser: ({ id }) => {
        return User.findByPk(id);
    },

    readUsers: ({ offset, limit }) => {
        return User.findAndCountAll({
            where: {},
            offset: offset,
            limit: limit,
        });
    },

    createUser: async ({ email, password }) => {
        return await User.create(
            {
                email: email,
                password: password,
            },
            { returning: true }
        );
    },

    updateUser: ({ id, email, password }) => {
        return MySqlConn.transaction(async (transaction) => {
            const result = await User.update(
                {
                    email: email,
                    password: password,
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

            return User.findByPk(id, { transaction });
        });
    },
};

module.exports = UserResolver;
