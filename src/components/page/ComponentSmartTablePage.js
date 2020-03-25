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
    lg: [{ i: 'SmartTable', x: 0, y: 0, w: 6, h: 14 }],
    md: [{ i: 'SmartTable', x: 0, y: 0, w: 6, h: 14 }],
    sm: [{ i: 'SmartTable', x: 0, y: 14, w: 8, h: 14 }],
    xs: [{ i: 'SmartTable', x: 0, y: 14, w: 6, h: 14 }],
    xxs: [{ i: 'SmartTable', x: 0, y: 14, w: 4, h: 14 }],
};

const initialBlocks = [{ i: 'SmartTable' }];

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
                case 'SmartTable':
                    return (
                        <Sticker key={block.i}>
                            <SmartTable
                                title={'Users'}
                                columns={[
                                    { name: 'id', label: 'ID' },
                                    { name: 'email', label: 'Email' },
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
