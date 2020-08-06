const stkbd_user_profile = {
    columns: [
        {"name":"id","type":"Int","required":true,"requiredToCreate":false,"updatable":false},
{"name":"user_id","type":"Int","required":true,"requiredToCreate":true,"updatable":true},
{"name":"name","type":"String","required":false,"requiredToCreate":true,"updatable":true,"defaultValue":""},
{"name":"gender","type":"Int","required":false,"requiredToCreate":true,"updatable":true,"defaultValue":0},
{"name":"company","type":"String","required":false,"requiredToCreate":true,"updatable":true},
{"name":"department","type":"String","required":false,"requiredToCreate":true,"updatable":true},
{"name":"position","type":"String","required":false,"requiredToCreate":true,"updatable":true},
{"name":"mobile","type":"String","required":false,"requiredToCreate":true,"updatable":true},
{"name":"office","type":"String","required":false,"requiredToCreate":true,"updatable":true},
{"name":"is_superuser","type":"Boolean","required":false,"requiredToCreate":true,"updatable":true,"defaultValue":false},
{"name":"date_joined","type":"Date","required":true,"requiredToCreate":false,"updatable":true},
{"name":"last_online","type":"Date","required":true,"requiredToCreate":false,"updatable":true}
    ],
    model: `
        type stkbd_user_profile {
            id: Int!
user_id: Int!
name: String
gender: Int
company: String
department: String
position: String
mobile: String
office: String
is_superuser: Boolean
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
        readItems: 'read_multiple_stkbd_user_profile(offset: Int!, limit: Int!, filter_options: [FilterOption], order_column: String, order_method: String): stkbd_user_profile_page',
    },
    mutation: {
        create: 'create_stkbd_user_profile(user_id: Int!, name: String, gender: Int, company: String, department: String, position: String, mobile: String, office: String, is_superuser: Boolean): stkbd_user_profile',
        update: 'update_stkbd_user_profile(id: Int!, user_id: Int!, name: String, gender: Int, company: String, department: String, position: String, mobile: String, office: String, is_superuser: Boolean, date_joined: Date!, last_online: Date!): stkbd_user_profile',
    },
};

module.exports = stkbd_user_profile;