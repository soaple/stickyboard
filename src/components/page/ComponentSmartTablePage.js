// src/components/page/ComponentSmartTablePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Sticker } from '@stickyboard/core';
import { SmartTable, InputType } from '@stickyboard/smart-table';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

import UserSchema from 'graphql/MyApp/schemas/UserSchema';
import UserPostSchema from 'graphql/MyApp/schemas/UserPostSchema';

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
                                title={'User'}
                                columns={[
                                    {
                                        name: 'id',
                                        label: 'ID',
                                        type: InputType.NUMBER,
                                        show: true,
                                        required: false,
                                        updatable: false,
                                    },
                                    {
                                        name: 'email',
                                        label: 'Email',
                                        type: InputType.TEXT,
                                        show: true,
                                        required: true,
                                        updatable: true,
                                    },
                                    {
                                        name: 'password',
                                        label: 'Password',
                                        type: InputType.PASSWORD,
                                        show: false,
                                        required: true,
                                        updatable: true,
                                    },
                                    {
                                        name: 'date_joined',
                                        label: 'Date Joined',
                                        type: InputType.DATE,
                                        show: true,
                                        required: false,
                                        updatable: true,
                                    },
                                    {
                                        name: 'last_online',
                                        label: 'Last Online',
                                        type: InputType.DATE,
                                        show: true,
                                        required: false,
                                        updatable: true,
                                    },
                                ]}
                                schema={UserSchema}
                            />
                        </Sticker>
                    );
                case 'UserPostsTable':
                    return (
                        <Sticker key={block.i}>
                            <SmartTable
                                title={'User Post'}
                                columns={[
                                    {
                                        name: 'id',
                                        label: 'ID',
                                        type: InputType.NUMBER,
                                        show: true,
                                        required: false,
                                        updatable: false,
                                    },
                                    {
                                        name: 'title',
                                        label: 'Title',
                                        type: InputType.TEXT,
                                        show: true,
                                        required: true,
                                        updatable: true,
                                    },
                                    {
                                        name: 'content',
                                        label: 'Content',
                                        type: InputType.TEXT,
                                        show: true,
                                        required: true,
                                        updatable: true,
                                    },
                                    {
                                        name: 'hits',
                                        label: 'Hits',
                                        type: InputType.NUMBER,
                                        show: true,
                                        required: false,
                                        updatable: true,
                                    },
                                    {
                                        name: 'created',
                                        label: 'Created',
                                        type: InputType.DATE,
                                        show: true,
                                        required: false,
                                        updatable: true,
                                    },
                                    {
                                        name: 'updated',
                                        label: 'Updated',
                                        type: InputType.DATE,
                                        show: true,
                                        required: false,
                                        updatable: true,
                                    },
                                ]}
                                schema={UserPostSchema}
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
