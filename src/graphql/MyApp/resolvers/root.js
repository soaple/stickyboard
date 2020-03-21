// src/graphql/root.js

const UserResolver = require('./UserResolver');
const UserPostResolver = require('./UserPostResolver');

const root = {
    ...UserResolver,
    ...UserPostResolver,
};

module.exports = root;
