const stkbd_user = {
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
        readItems: 'read_multiple_stkbd_user(offset: Int!, limit: Int!): stkbd_user_page',
    },
    mutation: {
        create: 'create_stkbd_user(email: String!, password: String!, is_superuser: Boolean!): stkbd_user',
        update: 'update_stkbd_user(id: Int!, email: String!, password: String!, is_superuser: Boolean!, date_joined: Date!, last_online: Date!): stkbd_user',
    },
};

module.exports = stkbd_user;