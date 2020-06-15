const stkbd_user = {
    columns: [
        {"name":"id","type":"Int","required":false,"updatable":false},
{"name":"email","type":"String","required":true,"updatable":true},
{"name":"password","type":"String","required":true,"updatable":true},
{"name":"is_superuser","type":"Boolean","required":true,"updatable":true},
{"name":"date_joined","type":"Date","required":false,"updatable":true},
{"name":"last_online","type":"Date","required":false,"updatable":true}
    ],
    model: `
        type stkbd_user {
            id: Int!
email: String!
password: String!
is_superuser: Boolean!
date_joined: Date!
last_online: Date!
        }
        type stkbd_user_page {
            count: Int!
            rows: [stkbd_user]
        }
    `,
    query: {
        read: 'read_stkbd_user(id: Int!): stkbd_user',
        readItems: 'read_multiple_stkbd_user(offset: Int!, limit: Int!, filter_options: [FilterOption], order_column: String, order_method: String): stkbd_user_page',
    },
    mutation: {
        create: 'create_stkbd_user(email: String!, password: String!, is_superuser: Boolean!): stkbd_user',
        update: 'update_stkbd_user(id: Int!, email: String!, password: String!, is_superuser: Boolean!, date_joined: Date!, last_online: Date!): stkbd_user',
    },
};

module.exports = stkbd_user;