// src/graphql/MyApp/schemas/UserSchema.js

const MODEL_NAME = 'User';

const UserSchema = {
    model: `
        type ${MODEL_NAME} {
            id: Int!
            email: String!
            password: String!
            date_joined: Date
            last_online: Date
        }

        type ${MODEL_NAME}Page {
            count: Int!
            rows: [${MODEL_NAME}]
        }
    `,

    query: `
        readUser(id: Int!): ${MODEL_NAME}
        readUsers(offset: Int!, limit: Int!): ${MODEL_NAME}Page
    `,

    mutation: `
        createUser(email: String!, password: String!): ${MODEL_NAME}
        updateUser(id: Int!, email: String!, password: String!, date_joined: Date, last_online: Date): ${MODEL_NAME}
    `,
};

module.exports = UserSchema;
