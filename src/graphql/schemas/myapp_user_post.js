const myapp_user_post = {
    model: `
        type myapp_user_post {
            id: Int!
user_id: Int!
title: String!
content: String!
hits: Int!
created: Date!
updated: Date!
        }
        type myapp_user_post_page {
            count: Int!
            rows: [myapp_user_post]
        }
    `,
    query: {
        read: 'read_myapp_user_post(id: Int!): myapp_user_post',
        readItems: 'read_multiple_myapp_user_post(offset: Int!, limit: Int!): myapp_user_post_page',
    },
    mutation: {
        create: 'create_myapp_user_post(user_id: Int!, title: String!, content: String!, hits: Int!): myapp_user_post',
        update: 'update_myapp_user_post(id: Int!, user_id: Int!, title: String!, content: String!, hits: Int!, created: Date!, updated: Date!): myapp_user_post',
    },
};

module.exports = myapp_user_post;