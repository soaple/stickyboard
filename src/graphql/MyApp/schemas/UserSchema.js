// src/graphql/MyApp/schemas/UserSchema.js

const MODEL_NAME = 'myapp_user';

const UserSchema = {
    model: `
        type ${MODEL_NAME} {
            id: Int!
            email: String!
            password: String!
            date_joined: Date
            last_online: Date
        }

        type ${MODEL_NAME}_page {
            count: Int!
            rows: [${MODEL_NAME}]
        }
    `,

    query: {
        read: `read_${MODEL_NAME}(id: Int!): ${MODEL_NAME}`,
        readItems: `read_multiple_${MODEL_NAME}(offset: Int!, limit: Int!): ${MODEL_NAME}_page`,
    },

    mutation: {
        create: `create_${MODEL_NAME}(email: String!, password: String!): ${MODEL_NAME}`,
        update: `update_${MODEL_NAME}(id: Int!, email: String!, password: String!, date_joined: Date, last_online: Date): ${MODEL_NAME}`,
    },
};

module.exports = UserSchema;
