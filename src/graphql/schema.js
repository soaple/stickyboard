// src/graphql/schema.js

const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        id: Int!
        email: String!
    }

    type Query {
        getUser(id: Int!): User
    }
`);

module.exports = schema;
