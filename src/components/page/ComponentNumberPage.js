// src/components/page/ComponentNumberPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayouts = {
    lg: [
        { i: 1, x: 0, y: 8, w: 3, h: 2 },
        { i: 2, x: 3, y: 8, w: 3, h: 2 },
        { i: 3, x: 6, y: 0, w: 3, h: 2 },
        { i: 4, x: 9, y: 0, w: 3, h: 2 },
        { i: 5, x: 0, y: 0, w: 6, h: 8 },
        { i: 6, x: 3, y: 10, w: 3, h: 4 },
        { i: 7, x: 6, y: 2, w: 6, h: 8 },
        { i: 8, x: 0, y: 10, w: 3, h: 4 },
        { i: 9, x: 6, y: 10, w: 3, h: 4 },
        { i: 10, x: 9, y: 10, w: 3, h: 4 },
    ],
    md: [
        { i: 1, x: 0, y: 8, w: 3, h: 2 },
        { i: 2, x: 3, y: 8, w: 3, h: 2 },
        { i: 3, x: 6, y: 0, w: 3, h: 2 },
        { i: 4, x: 9, y: 0, w: 3, h: 2 },
        { i: 5, x: 0, y: 0, w: 6, h: 8 },
        { i: 6, x: 3, y: 10, w: 3, h: 4 },
        { i: 7, x: 6, y: 2, w: 6, h: 8 },
        { i: 8, x: 0, y: 10, w: 3, h: 4 },
        { i: 9, x: 6, y: 10, w: 3, h: 4 },
        { i: 10, x: 9, y: 10, w: 3, h: 4 },
    ],
    sm: [
        { i: 1, x: 0, y: 8, w: 2, h: 2 },
        { i: 2, x: 2, y: 8, w: 2, h: 2 },
        { i: 3, x: 4, y: 0, w: 2, h: 2 },
        { i: 4, x: 6, y: 0, w: 2, h: 2 },
        { i: 5, x: 0, y: 0, w: 4, h: 8 },
        { i: 6, x: 2, y: 10, w: 2, h: 4 },
        { i: 7, x: 4, y: 2, w: 4, h: 8 },
        { i: 8, x: 0, y: 10, w: 2, h: 4 },
        { i: 9, x: 4, y: 10, w: 2, h: 4 },
        { i: 10, x: 6, y: 10, w: 2, h: 4 },
    ],
    xs: [
        { i: 1, x: 0, y: 8, w: 3, h: 2 },
        { i: 2, x: 0, y: 10, w: 3, h: 2 },
        { i: 3, x: 3, y: 0, w: 3, h: 2 },
        { i: 4, x: 3, y: 2, w: 3, h: 2 },
        { i: 5, x: 0, y: 0, w: 3, h: 8 },
        { i: 6, x: 3, y: 12, w: 3, h: 4 },
        { i: 7, x: 3, y: 4, w: 3, h: 8 },
        { i: 8, x: 0, y: 12, w: 3, h: 4 },
        { i: 9, x: 0, y: 16, w: 3, h: 4 },
        { i: 10, x: 3, y: 16, w: 3, h: 4 },
    ],
    xxs: [
        { i: 1, x: 0, y: 12, w: 2, h: 2 },
        { i: 2, x: 2, y: 12, w: 2, h: 2 },
        { i: 3, x: 0, y: 5, w: 2, h: 2 },
        { i: 4, x: 2, y: 5, w: 2, h: 2 },
        { i: 5, x: 0, y: 0, w: 4, h: 5 },
        { i: 6, x: 2, y: 14, w: 2, h: 4 },
        { i: 7, x: 0, y: 7, w: 4, h: 5 },
        { i: 8, x: 0, y: 14, w: 2, h: 4 },
        { i: 9, x: 0, y: 18, w: 2, h: 4 },
        { i: 10, x: 2, y: 18, w: 2, h: 4 },
    ],
};

const initialStickers = [
    { i: 1, name: 'NumberDAU' },
    { i: 2, name: 'NumberWAU' },
    { i: 3, name: 'NumberMAU' },
    { i: 4, name: 'NumberARPU' },
    { i: 5, name: 'NumberDAU2' },
    { i: 6, name: 'NumberWAU2' },
    { i: 7, name: 'NumberMAU2' },
    { i: 8, name: 'NumberARPU2' },
    { i: 9, name: 'NumberDAU3' },
    { i: 10, name: 'NumberMQTT' },
];

class ComponentNumberPage extends React.Component {
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

ComponentNumberPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentNumberPage);
