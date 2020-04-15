// src/components/page/ComponentSmartTablePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'SmartTableUser', x: 0, y: 0, w: 6, h: 15 },
        { i: 'SmartTableUserPost', x: 6, y: 0, w: 6, h: 15 },
    ],
    md: [
        { i: 'SmartTableUser', x: 0, y: 0, w: 6, h: 15 },
        { i: 'SmartTableUserPost', x: 6, y: 0, w: 6, h: 15 },
    ],
    sm: [
        { i: 'SmartTableUser', x: 0, y: 0, w: 8, h: 15 },
        { i: 'SmartTableUserPost', x: 0, y: 15, w: 8, h: 15 },
    ],
    xs: [
        { i: 'SmartTableUser', x: 0, y: 0, w: 6, h: 15 },
        { i: 'SmartTableUserPost', x: 0, y: 15, w: 6, h: 15 },
    ],
    xxs: [
        { i: 'SmartTableUser', x: 0, y: 0, w: 4, h: 15 },
        { i: 'SmartTableUserPost', x: 0, y: 15, w: 4, h: 15 },
    ],
};

const initialBlocks = [{ i: 'SmartTableUser' }, { i: 'SmartTableUserPost' }];

class ComponentSmartTablePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <PageBaseContainer
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
