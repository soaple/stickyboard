// src/components/page/IntroDatabasePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayouts = {
    lg: [
        { i: 1, x: 0, y: 0, w: 4, h: 16 },
        { i: 2, x: 4, y: 0, w: 4, h: 16 },
        { i: 3, x: 8, y: 0, w: 4, h: 16 },
    ],
    md: [
        { i: 1, x: 0, y: 0, w: 4, h: 15 },
        { i: 2, x: 4, y: 0, w: 4, h: 15 },
        { i: 3, x: 8, y: 0, w: 4, h: 15 },
    ],
    sm: [
        { i: 1, x: 0, y: 0, w: 4, h: 8 },
        { i: 2, x: 4, y: 0, w: 4, h: 8 },
        { i: 3, x: 0, y: 8, w: 4, h: 8 },
    ],
    xs: [
        { i: 1, x: 0, y: 0, w: 6, h: 7 },
        { i: 2, x: 0, y: 7, w: 6, h: 7 },
        { i: 3, x: 0, y: 14, w: 6, h: 7 },
    ],
    xxs: [
        { i: 1, x: 0, y: 0, w: 4, h: 7 },
        { i: 2, x: 0, y: 7, w: 4, h: 7 },
        { i: 3, x: 0, y: 14, w: 4, h: 7 },
    ],
};

const initialStickers = [
    { i: 1, name: 'DatabaseMySQL' },
    { i: 2, name: 'DatabaseFirestore' },
    { i: 3, name: 'DatabaseMongoDB' },
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
                initialLayouts={initialLayouts}
                initialStickers={initialStickers}
            />
        );
    }
}

IntroDatabasePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntroDatabasePage);
