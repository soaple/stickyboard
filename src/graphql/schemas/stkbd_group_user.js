const stkbd_group_user = {
    columns: [
        {"name":"id","type":"Int","required":false,"updatable":false},
{"name":"group_id","type":"Int","required":true,"updatable":true},
{"name":"user_id","type":"Int","required":true,"updatable":true},
{"name":"created","type":"Date","required":false,"updatable":true}
    ],
    model: `
        type stkbd_group_user {
            id: Int!
group_id: Int!
user_id: Int!
created: Date!
        }
        type stkbd_group_user_page {
            count: Int!
            rows: [stkbd_group_user]
        }
    `,
    query: {
        read: 'read_stkbd_group_user(id: Int!): stkbd_group_user',
        readItems: 'read_multiple_stkbd_group_user(offset: Int!, limit: Int!, order_column: String, order_method: String): stkbd_group_user_page',
    },
    mutation: {
        create: 'create_stkbd_group_user(group_id: Int!, user_id: Int!): stkbd_group_user',
        update: 'update_stkbd_group_user(id: Int!, group_id: Int!, user_id: Int!, created: Date!): stkbd_group_user',
    },
};

module.exports = stkbd_group_user;