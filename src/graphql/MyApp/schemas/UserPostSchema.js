// src/graphql/MyApp/schemas/UserPostSchema.js

const MODEL_NAME = 'UserPost';

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

        type ${MODEL_NAME}Page {
            count: Int!
            rows: [${MODEL_NAME}]
        }
    `,

    query: `
        readUserPost(id: Int!): ${MODEL_NAME}
        readUserPosts(offset: Int!, limit: Int!): ${MODEL_NAME}Page
    `,
};

module.exports = UserPostSchema;
