// src/components/page/ComponentSmartTablePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Sticker } from '@stickyboard/core';
import { SmartTable } from '@stickyboard/smart-table';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

// var User = require('database/MySQL/User/models/User');

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
                                title={'Users'}
                                columns={[
                                    { name: 'id', label: 'ID' },
                                    { name: 'email', label: 'Email' },
                                    {
                                        name: 'date_joined',
                                        label: 'Date Joined',
                                    },
                                    {
                                        name: 'last_online',
                                        label: 'Last Online',
                                    },
                                ]}
                                queryName={{
                                    create: 'createUser',
                                    readItems: 'readUsers',
                                    read: 'readUser',
                                    update: 'updateUser',
                                    delete: 'deleteUser',
                                }}
                            />
                        </Sticker>
                    );
                case 'UserPostsTable':
                    return (
                        <Sticker key={block.i}>
                            <SmartTable
                                title={'User Posts'}
                                columns={[
                                    { name: 'id', label: 'ID' },
                                    { name: 'title', label: 'Title' },
                                    { name: 'content', label: 'Content' },
                                    { name: 'hits', label: 'Hits' },
                                    { name: 'created', label: 'Created' },
                                    { name: 'updated', label: 'Updated' },
                                ]}
                                queryName={{
                                    create: 'createUserPost',
                                    readItems: 'readUserPosts',
                                    read: 'readUserPost',
                                    update: 'updateUserPost',
                                    delete: 'deleteUserPost',
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
