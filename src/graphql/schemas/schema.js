const schema = `
    scalar Date

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
type myapp_user {
    id: Int!
email: String!
password: String!
date_joined: Date!
last_online: Date!
}
type myapp_user_page {
    count: Int!
    rows: [myapp_user]
}
type myapp_user_post {
    id: Int!
user_id: Int!
title: String!
content: String!
hits: Int!
created: Date!
updated: Date!
}
type myapp_user_post_page {
    count: Int!
    rows: [myapp_user_post]
}

    type Query {
    read_stkbd_user(id: Int!): stkbd_user
read_multiple_stkbd_user(offset: Int!, limit: Int!): stkbd_user_page
read_stkbd_user_profile(id: Int!): stkbd_user_profile
read_multiple_stkbd_user_profile(offset: Int!, limit: Int!): stkbd_user_profile_page
read_stkbd_user_layout(id: Int!): stkbd_user_layout
read_multiple_stkbd_user_layout(offset: Int!, limit: Int!): stkbd_user_layout_page
read_stkbd_group(id: Int!): stkbd_group
read_multiple_stkbd_group(offset: Int!, limit: Int!): stkbd_group_page
read_stkbd_group_user(id: Int!): stkbd_group_user
read_multiple_stkbd_group_user(offset: Int!, limit: Int!): stkbd_group_user_page
read_stkbd_permission(id: Int!): stkbd_permission
read_multiple_stkbd_permission(offset: Int!, limit: Int!): stkbd_permission_page
read_stkbd_group_permission(id: Int!): stkbd_group_permission
read_multiple_stkbd_group_permission(offset: Int!, limit: Int!): stkbd_group_permission_page
read_myapp_user(id: Int!): myapp_user
read_multiple_myapp_user(offset: Int!, limit: Int!): myapp_user_page
read_myapp_user_post(id: Int!): myapp_user_post
read_multiple_myapp_user_post(offset: Int!, limit: Int!): myapp_user_post_page
    }

    type Mutation {
    create_stkbd_user(email: String!, password: String!, is_superuser: Boolean!): stkbd_user
update_stkbd_user(id: Int!, email: String!, password: String!, is_superuser: Boolean!, date_joined: Date!, last_online: Date!): stkbd_user
create_stkbd_user_profile(user_id: Int!, name: String!, company: String!, department: String!, position: String!, mobile: String!, office: String!, is_superuser: Boolean!): stkbd_user_profile
update_stkbd_user_profile(id: Int!, user_id: Int!, name: String!, gender: Int, company: String!, department: String!, position: String!, mobile: String!, office: String!, is_superuser: Boolean!, date_joined: Date!, last_online: Date!): stkbd_user_profile
create_stkbd_user_layout(user_id: Int!, route: String!, layout: String!, blocks: String!): stkbd_user_layout
update_stkbd_user_layout(id: Int!, user_id: Int!, route: String!, layout: String!, blocks: String!, created: Date!, updated: Date!): stkbd_user_layout
create_stkbd_group(name: String!, description: String!): stkbd_group
update_stkbd_group(id: Int!, name: String!, description: String!, created: Date!, updated: Date!): stkbd_group
create_stkbd_group_user(group_id: Int!, user_id: Int!): stkbd_group_user
update_stkbd_group_user(id: Int!, group_id: Int!, user_id: Int!, created: Date!): stkbd_group_user
create_stkbd_permission(route: String!, name: String!, description: String!, key: String!, read_write: Boolean!, level: Int!): stkbd_permission
update_stkbd_permission(id: Int!, route: String!, name: String!, description: String!, key: String!, read_write: Boolean!, level: Int!, created: Date!, updated: Date!): stkbd_permission
create_stkbd_group_permission(group_id: Int!, permission_id: Int!): stkbd_group_permission
update_stkbd_group_permission(id: Int!, group_id: Int!, permission_id: Int!, created: Date!): stkbd_group_permission
create_myapp_user(email: String!, password: String!): myapp_user
update_myapp_user(id: Int!, email: String!, password: String!, date_joined: Date!, last_online: Date!): myapp_user
create_myapp_user_post(user_id: Int!, title: String!, content: String!, hits: Int!): myapp_user_post
update_myapp_user_post(id: Int!, user_id: Int!, title: String!, content: String!, hits: Int!, created: Date!, updated: Date!): myapp_user_post
    }
`;

module.exports = schema;