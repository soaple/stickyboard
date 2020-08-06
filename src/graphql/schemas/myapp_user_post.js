const myapp_user_post = {
    columns: [
        {"name":"id","type":"Int","required":true,"requiredToCreate":false,"updatable":false},
{"name":"user_id","type":"Int","required":true,"requiredToCreate":true,"updatable":true},
{"name":"title","type":"String","required":false,"requiredToCreate":true,"updatable":true,"defaultValue":""},
{"name":"content","type":"String","required":false,"requiredToCreate":true,"updatable":true,"defaultValue":""},
{"name":"hits","type":"Int","required":false,"requiredToCreate":true,"updatable":true,"defaultValue":0},
{"name":"created","type":"Date","required":true,"requiredToCreate":false,"updatable":true},
{"name":"updated","type":"Date","required":true,"requiredToCreate":false,"updatable":true}
    ],
    model: `
        type myapp_user_post {
            id: Int!
user_id: Int!
title: String
content: String
hits: Int
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
        readItems: 'read_multiple_myapp_user_post(offset: Int!, limit: Int!, filter_options: [FilterOption], order_column: String, order_method: String): myapp_user_post_page',
    },
    mutation: {
        create: 'create_myapp_user_post(user_id: Int!, title: String, content: String, hits: Int): myapp_user_post',
        update: 'update_myapp_user_post(id: Int!, user_id: Int!, title: String, content: String, hits: Int, created: Date!, updated: Date!): myapp_user_post',
    },
};

module.exports = myapp_user_post;