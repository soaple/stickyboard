const stkbd_user_layout = {
    model: `
        type stkbd_user_layout {
            id: Int!
user_id: Int!
route: String!
layout: String!
blocks: String!
created: Date!
updated: Date!
        }
        type stkbd_user_layout_page {
            count: Int!
            rows: [stkbd_user_layout]
        }
    `,
    query: {
        read: 'read_stkbd_user_layout(id: Int!): stkbd_user_layout',
        readItems: 'read_multiple_stkbd_user_layout(offset: Int!, limit: Int!): stkbd_user_layout_page',
    },
    mutation: {
        create: 'create_stkbd_user_layout(user_id: Int!, route: String!, layout: String!, blocks: String!): stkbd_user_layout',
        update: 'update_stkbd_user_layout(id: Int!, user_id: Int!, route: String!, layout: String!, blocks: String!, created: Date!, updated: Date!): stkbd_user_layout',
    },
};

module.exports = stkbd_user_layout;