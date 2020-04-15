import React from 'react';
import { SmartTable } from '@stickyboard/smart-table';
import MyAppUserSchema from 'graphql/schemas/myapp_user';

function SmartTableUser(props) {
    const { colors } = props;

    return (
        <SmartTable
            title={'User'}
            schema={MyAppUserSchema}
            customHeaderTitle={{
                id: 'ID',
                email: 'Email',
                password: 'Password',
                date_joined: 'Date Joined',
                last_online: 'Last Online',
            }}
        />
    );
}

export default SmartTableUser;
