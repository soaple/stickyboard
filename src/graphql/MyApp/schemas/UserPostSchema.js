// src/graphql/MyApp/schemas/UserPostSchema.js

const UserPostSchema = {
    model: `
        type UserPost {
            id: Int!
            title: String!
            content: String!
        }
    `,

    query: `
        getUserPost(id: Int!): UserPost
    `,
};

module.exports = UserPostSchema;
