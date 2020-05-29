// src/components/page/IntroDatabasePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'DatabaseMySQL', x: 0, y: 0, w: 4, h: 16 },
        { i: 'DatabaseFirestore', x: 4, y: 0, w: 4, h: 16 },
        { i: 'DatabaseMongoDB', x: 8, y: 0, w: 4, h: 16 },
    ],
    md: [
        { i: 'DatabaseMySQL', x: 0, y: 0, w: 4, h: 15 },
        { i: 'DatabaseFirestore', x: 4, y: 0, w: 4, h: 15 },
        { i: 'DatabaseMongoDB', x: 8, y: 0, w: 4, h: 15 },
    ],
    sm: [
        { i: 'DatabaseMySQL', x: 0, y: 0, w: 4, h: 8 },
        { i: 'DatabaseFirestore', x: 4, y: 0, w: 4, h: 8 },
        { i: 'DatabaseMongoDB', x: 0, y: 8, w: 4, h: 8 },
    ],
    xs: [
        { i: 'DatabaseMySQL', x: 0, y: 0, w: 6, h: 7 },
        { i: 'DatabaseFirestore', x: 0, y: 7, w: 6, h: 7 },
        { i: 'DatabaseMongoDB', x: 0, y: 14, w: 6, h: 7 },
    ],
    xxs: [
        { i: 'DatabaseMySQL', x: 0, y: 0, w: 4, h: 7 },
        { i: 'DatabaseFirestore', x: 0, y: 7, w: 4, h: 7 },
        { i: 'DatabaseMongoDB', x: 0, y: 14, w: 4, h: 7 },
    ],
};

const initialBlocks = [
    { i: 'DatabaseMySQL' },
    { i: 'DatabaseFirestore' },
    { i: 'DatabaseMongoDB' },
];

class IntroDatabasePage extends React.Component {
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

IntroDatabasePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntroDatabasePage);
