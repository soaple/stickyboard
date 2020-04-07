const myapp_user = {
    model: `
        type myapp_user {
            id: Int!
email: String!
password: String!
date_joined: Date!
last_online: Date!
        }
        type myapp_user_page {
            count: Int!
            rows: [myapp_user]
        }
    `,
    query: {
        read: 'read_myapp_user(id: Int!): myapp_user',
        readItems: 'read_multiple_myapp_user(offset: Int!, limit: Int!): myapp_user_page',
    },
    mutation: {
        create: 'create_myapp_user(email: String!, password: String!): myapp_user',
        update: 'update_myapp_user(id: Int!, email: String!, password: String!, date_joined: Date!, last_online: Date!): myapp_user',
    },
};

module.exports = myapp_user;