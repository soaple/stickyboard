const stkbd_permission = {
    columns: [
        {"name":"id","type":"Int","required":false,"updatable":false},
{"name":"route","type":"String","required":true,"updatable":true},
{"name":"name","type":"String","required":true,"updatable":true},
{"name":"description","type":"String","required":true,"updatable":true},
{"name":"key","type":"String","required":true,"updatable":true},
{"name":"read_write","type":"Boolean","required":true,"updatable":true},
{"name":"level","type":"Int","required":true,"updatable":true},
{"name":"created","type":"Date","required":false,"updatable":true},
{"name":"updated","type":"Date","required":false,"updatable":true}
    ],
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
        readItems: 'read_multiple_stkbd_permission(offset: Int!, limit: Int!, order_column: String, order_method: String): stkbd_permission_page',
    },
    mutation: {
        create: 'create_stkbd_permission(route: String!, name: String!, description: String!, key: String!, read_write: Boolean!, level: Int!): stkbd_permission',
        update: 'update_stkbd_permission(id: Int!, route: String!, name: String!, description: String!, key: String!, read_write: Boolean!, level: Int!, created: Date!, updated: Date!): stkbd_permission',
    },
};

module.exports = stkbd_permission;