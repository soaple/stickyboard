const stkbd_group_permission = {
    model: `
        type stkbd_group_permission {
            id: Int!
group_id: Int!
permission_id: Int!
created: Date!
        }
        type stkbd_group_permission_page {
            count: Int!
            rows: [stkbd_group_permission]
        }
    `,
    query: {
        read: 'read_stkbd_group_permission(id: Int!): stkbd_group_permission',
        readItems: 'read_multiple_stkbd_group_permission(offset: Int!, limit: Int!): stkbd_group_permission_page',
    },
    mutation: {
        create: 'create_stkbd_group_permission(group_id: Int!, permission_id: Int!): stkbd_group_permission',
        update: 'update_stkbd_group_permission(id: Int!, group_id: Int!, permission_id: Int!, created: Date!): stkbd_group_permission',
    },
};

module.exports = stkbd_group_permission;