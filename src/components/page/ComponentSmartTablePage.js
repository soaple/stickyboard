// src/components/page/ComponentSmartTablePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Sticker } from '@stickyboard/core';
import { SmartTable, InputType } from '@stickyboard/smart-table';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

import MyAppUserSchema from 'graphql/schemas/myapp_user';
import MyAppUserPostSchema from 'graphql/schemas/myapp_user_post';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'UsersTable', x: 0, y: 0, w: 6, h: 15 },
        { i: 'UserPostsTable', x: 6, y: 0, w: 6, h: 15 },
    ],
    md: [
        { i: 'UsersTable', x: 0, y: 0, w: 6, h: 15 },
        { i: 'UserPostsTable', x: 6, y: 0, w: 6, h: 15 },
    ],
    sm: [
        { i: 'UsersTable', x: 0, y: 0, w: 8, h: 15 },
        { i: 'UserPostsTable', x: 0, y: 15, w: 8, h: 15 },
    ],
    xs: [
        { i: 'UsersTable', x: 0, y: 0, w: 6, h: 15 },
        { i: 'UserPostsTable', x: 0, y: 15, w: 6, h: 15 },
    ],
    xxs: [
        { i: 'UsersTable', x: 0, y: 0, w: 4, h: 15 },
        { i: 'UserPostsTable', x: 0, y: 15, w: 4, h: 15 },
    ],
};

const initialBlocks = [{ i: 'UsersTable' }, { i: 'UserPostsTable' }];

class ComponentSmartTablePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {
        const { classes, theme } = this.props;

        const generateBlock = (block) => {
            switch (block.i) {
                case 'UsersTable':
                    return (
                        <Sticker key={block.i}>
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
                        </Sticker>
                    );
                case 'UserPostsTable':
                    return (
                        <Sticker key={block.i}>
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
                        </Sticker>
                    );
            }
        };

        return (
            <PageBaseContainer
                generateBlock={generateBlock}
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

ComponentSmartTablePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentSmartTablePage);
