// src/graphql/MyApp/schemas/UserSchema.js

const UserSchema = {
    model: `
        type User {
            id: Int!
            email: String!
        }
    `,

    query: `
        getUser(id: Int!): User
    `,
};

module.exports = UserSchema;
