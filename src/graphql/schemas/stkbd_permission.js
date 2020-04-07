const stkbd_permission = {
    model: `
        type stkbd_permission {
            id: Int!
route: String!
name: String!
description: String!
key: String!
read_write: Boolean!
level: Int!
created: Date!
updated: Date!
        }
        type stkbd_permission_page {
            count: Int!
            rows: [stkbd_permission]
        }
    `,
    query: {
        read: 'read_stkbd_permission(id: Int!): stkbd_permission',
        readItems: 'read_multiple_stkbd_permission(offset: Int!, limit: Int!): stkbd_permission_page',
    },
    mutation: {
        create: 'create_stkbd_permission(route: String!, name: String!, description: String!, key: String!, read_write: Boolean!, level: Int!): stkbd_permission',
        update: 'update_stkbd_permission(id: Int!, route: String!, name: String!, description: String!, key: String!, read_write: Boolean!, level: Int!, created: Date!, updated: Date!): stkbd_permission',
    },
};

module.exports = stkbd_permission;