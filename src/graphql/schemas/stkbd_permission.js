const stkbd_permission = {
    columns: [
        {"name":"id","type":"Int","required":true,"requiredToCreate":false,"updatable":false},
{"name":"route","type":"String","required":true,"requiredToCreate":true,"updatable":true},
{"name":"name","type":"String","required":true,"requiredToCreate":true,"updatable":true},
{"name":"description","type":"String","required":false,"requiredToCreate":true,"updatable":true},
{"name":"key","type":"String","required":true,"requiredToCreate":true,"updatable":true},
{"name":"read_write","type":"Boolean","required":false,"requiredToCreate":true,"updatable":true,"defaultValue":false},
{"name":"level","type":"Int","required":false,"requiredToCreate":true,"updatable":true,"defaultValue":0},
{"name":"created","type":"Date","required":true,"requiredToCreate":false,"updatable":true},
{"name":"updated","type":"Date","required":true,"requiredToCreate":false,"updatable":true}
    ],
    model: `
        type stkbd_permission {
            id: Int!
route: String!
name: String!
description: String
key: String!
read_write: Boolean
level: Int
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
        readItems: 'read_multiple_stkbd_permission(offset: Int!, limit: Int!, filter_options: [FilterOption], order_column: String, order_method: String): stkbd_permission_page',
    },
    mutation: {
        create: 'create_stkbd_permission(route: String!, name: String!, description: String, key: String!, read_write: Boolean, level: Int): stkbd_permission',
        update: 'update_stkbd_permission(id: Int!, route: String!, name: String!, description: String, key: String!, read_write: Boolean, level: Int, created: Date!, updated: Date!): stkbd_permission',
    },
};

module.exports = stkbd_permission;