// src/graphql/schema.js

const { buildSchema } = require('graphql');

const UserSchema = require('./UserSchema');
const UserPostSchema = require('./UserPostSchema');

const schema = buildSchema(`
    ${UserSchema.model}
    ${UserPostSchema.model}

    type Query {
        ${UserSchema.query}
        ${UserPostSchema.query}
    }
`);

module.exports = schema;
