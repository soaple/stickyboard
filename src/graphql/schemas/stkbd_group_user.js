const stkbd_group_user = {
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
        readItems: 'read_multiple_stkbd_group_user(offset: Int!, limit: Int!): stkbd_group_user_page',
    },
    mutation: {
        create: 'create_stkbd_group_user(group_id: Int!, user_id: Int!): stkbd_group_user',
        update: 'update_stkbd_group_user(id: Int!, group_id: Int!, user_id: Int!, created: Date!): stkbd_group_user',
    },
};

module.exports = stkbd_group_user;