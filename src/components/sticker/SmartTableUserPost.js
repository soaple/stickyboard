import React from 'react';
import { SmartTable } from '@stickyboard/smart-table';
import MyAppUserPostSchema from 'graphql/schemas/myapp_user_post';

function SmartTableUserPost(props) {
    const { colors } = props;

    return (
        <SmartTable
            title={'User Post'}
            schema={MyAppUserPostSchema}
            customHeaderTitle={{
                id: 'ID',
                user_id: 'User ID',
                title: 'Title',
                content: 'Content',
                hits: 'Hits',
                created: 'Created',
                updated: 'Updated',
            }}
        />
    );
}

export default SmartTableUserPost;
