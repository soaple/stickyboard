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

    query: {
        read: `readUser(id: Int!): ${MODEL_NAME}`,
        readItems: `readUsers(offset: Int!, limit: Int!): ${MODEL_NAME}Page`,
    },

    mutation: {
        create: `createUser(email: String!, password: String!): ${MODEL_NAME}`,
        update: `updateUser(id: Int!, email: String!, password: String!, date_joined: Date, last_online: Date): ${MODEL_NAME}`,
    },
};

module.exports = UserSchema;
