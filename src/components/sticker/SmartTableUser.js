import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { SmartTable, OrderMethod } from '@stickyboard/smart-table';
import MyAppUserSchema from 'graphql/schemas/myapp_user';

const Wrapper = styled.div``;

function CustomColumn(props) {
    return (
        <Wrapper>
            <Button
                variant="outlined"
                onClick={(event) => {
                    event.stopPropagation();
                    alert('Custom column button clicked!');
                }}
                color="primary">
                Click
            </Button>
        </Wrapper>
    );
}

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
            customColumns={[
                {
                    headerTitle: 'Custom Column',
                    component: CustomColumn,
                },
            ]}
            initialOrderColumn={'date_joined'}
            initialOrderMethod={OrderMethod.DESC}
        />
    );
}

export default SmartTableUser;
