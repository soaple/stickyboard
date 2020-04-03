// src/graphql/schema.js

const { buildSchema } = require('graphql');

const UserSchema = require('./UserSchema');
const UserPostSchema = require('./UserPostSchema');

const schema = buildSchema(`
    scalar Date

    ${UserSchema.model}
    ${UserPostSchema.model}

    type Query {
        ${UserSchema.query.read}
        ${UserSchema.query.readItems}

        ${UserPostSchema.query.read}
        ${UserPostSchema.query.readItems}
    }

    type Mutation {
        ${UserSchema.mutation.create}
        ${UserSchema.mutation.update}
        
        ${UserPostSchema.mutation.create}
    }
`);

module.exports = schema;
