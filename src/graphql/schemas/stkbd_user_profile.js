const stkbd_user_profile = {
    model: `
        type stkbd_user_profile {
            id: Int!
user_id: Int!
name: String!
gender: Int
company: String!
department: String!
position: String!
mobile: String!
office: String!
is_superuser: Boolean!
date_joined: Date!
last_online: Date!
        }
        type stkbd_user_profile_page {
            count: Int!
            rows: [stkbd_user_profile]
        }
    `,
    query: {
        read: 'read_stkbd_user_profile(id: Int!): stkbd_user_profile',
        readItems: 'read_multiple_stkbd_user_profile(offset: Int!, limit: Int!): stkbd_user_profile_page',
    },
    mutation: {
        create: 'create_stkbd_user_profile(user_id: Int!, name: String!, company: String!, department: String!, position: String!, mobile: String!, office: String!, is_superuser: Boolean!): stkbd_user_profile',
        update: 'update_stkbd_user_profile(id: Int!, user_id: Int!, name: String!, gender: Int, company: String!, department: String!, position: String!, mobile: String!, office: String!, is_superuser: Boolean!, date_joined: Date!, last_online: Date!): stkbd_user_profile',
    },
};

module.exports = stkbd_user_profile;