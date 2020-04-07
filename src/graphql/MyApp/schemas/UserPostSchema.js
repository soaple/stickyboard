// src/graphql/MyApp/schemas/UserPostSchema.js

const MODEL_NAME = 'myapp_user_post';

const UserPostSchema = {
    model: `
        type ${MODEL_NAME} {
            id: Int!
            title: String!
            content: String!
            hits: Int!
            created: Date
            updated: Date
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
        create: `create_${MODEL_NAME}(title: String!, content: String!): ${MODEL_NAME}`,
        update: `update_${MODEL_NAME}(id: Int!, title: String!, content: String!, hit: Int!, created: Date, updated: Date): ${MODEL_NAME}`,
    },
};

module.exports = UserPostSchema;
