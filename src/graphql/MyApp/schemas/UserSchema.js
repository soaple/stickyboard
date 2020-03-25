// src/graphql/MyApp/schemas/UserSchema.js

const MODEL_NAME = 'User';

const UserSchema = {
    model: `
        type ${MODEL_NAME} {
            id: Int!
            email: String!
        }
    `,

    query: `
        readUser(id: Int!): ${MODEL_NAME}
        readUsers(offset: Int!, limit: Int!): [${MODEL_NAME}]
    `,
};

module.exports = UserSchema;
