const myapp_user = {
    columns: [
        {"name":"id","type":"Int","required":false,"updatable":false},
{"name":"email","type":"String","required":true,"updatable":true},
{"name":"password","type":"String","required":true,"updatable":true},
{"name":"date_joined","type":"Date","required":false,"updatable":true},
{"name":"last_online","type":"Date","required":false,"updatable":true}
    ],
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