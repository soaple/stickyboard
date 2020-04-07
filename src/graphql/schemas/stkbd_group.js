const stkbd_group = {
    model: `
        type stkbd_group {
            id: Int!
name: String!
description: String!
created: Date!
updated: Date!
        }
        type stkbd_group_page {
            count: Int!
            rows: [stkbd_group]
        }
    `,
    query: {
        read: 'read_stkbd_group(id: Int!): stkbd_group',
        readItems: 'read_multiple_stkbd_group(offset: Int!, limit: Int!): stkbd_group_page',
    },
    mutation: {
        create: 'create_stkbd_group(name: String!, description: String!): stkbd_group',
        update: 'update_stkbd_group(id: Int!, name: String!, description: String!, created: Date!, updated: Date!): stkbd_group',
    },
};

module.exports = stkbd_group;