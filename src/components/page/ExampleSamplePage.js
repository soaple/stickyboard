// src/components/page/ExampleSamplePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayouts = {
    lg: [
        { i: 1, x: 8, y: 10, w: 4, h: 6 },
        { i: 2, x: 4, y: 10, w: 4, h: 6 },
        { i: 3, x: 0, y: 10, w: 4, h: 6 },
        { i: 4, x: 8, y: 3, w: 4, h: 7 },
        { i: 5, x: 4, y: 3, w: 4, h: 7 },
        { i: 6, x: 6, y: 0, w: 3, h: 3 },
        { i: 7, x: 0, y: 0, w: 3, h: 3 },
        { i: 8, x: 3, y: 0, w: 3, h: 3 },
        { i: 9, x: 9, y: 0, w: 3, h: 3 },
        { i: 10, x: 0, y: 3, w: 4, h: 7 },
    ],
    md: [
        { i: 1, x: 8, y: 10, w: 4, h: 6 },
        { i: 2, x: 4, y: 10, w: 4, h: 6 },
        { i: 3, x: 0, y: 10, w: 4, h: 6 },
        { i: 4, x: 8, y: 3, w: 4, h: 7 },
        { i: 5, x: 4, y: 3, w: 4, h: 7 },
        { i: 6, x: 6, y: 0, w: 3, h: 3 },
        { i: 7, x: 0, y: 0, w: 3, h: 3 },
        { i: 8, x: 3, y: 0, w: 3, h: 3 },
        { i: 9, x: 9, y: 0, w: 3, h: 3 },
        { i: 10, x: 0, y: 3, w: 4, h: 7 },
    ],
    sm: [
        { i: 1, x: 4, y: 19, w: 4, h: 7 },
        { i: 2, x: 4, y: 13, w: 4, h: 6 },
        { i: 3, x: 0, y: 13, w: 4, h: 6 },
        { i: 4, x: 0, y: 19, w: 4, h: 7 },
        { i: 5, x: 4, y: 6, w: 4, h: 7 },
        { i: 6, x: 0, y: 3, w: 4, h: 3 },
        { i: 7, x: 0, y: 0, w: 4, h: 3 },
        { i: 8, x: 4, y: 0, w: 4, h: 3 },
        { i: 9, x: 4, y: 3, w: 4, h: 3 },
        { i: 10, x: 0, y: 6, w: 4, h: 7 },
    ],
    xs: [
        { i: 1, x: 0, y: 21, w: 6, h: 6 },
        { i: 2, x: 0, y: 27, w: 6, h: 6 },
        { i: 3, x: 3, y: 6, w: 3, h: 7 },
        { i: 4, x: 0, y: 33, w: 6, h: 7 },
        { i: 5, x: 0, y: 13, w: 6, h: 8 },
        { i: 6, x: 0, y: 3, w: 3, h: 3 },
        { i: 7, x: 0, y: 0, w: 3, h: 3 },
        { i: 8, x: 3, y: 0, w: 3, h: 3 },
        { i: 9, x: 3, y: 3, w: 3, h: 3 },
        { i: 10, x: 0, y: 6, w: 3, h: 7 },
    ],
    xxs: [
        { i: 1, x: 0, y: 30, w: 4, h: 6 },
        { i: 2, x: 0, y: 42, w: 4, h: 6 },
        { i: 3, x: 0, y: 18, w: 4, h: 6 },
        { i: 4, x: 0, y: 24, w: 4, h: 6 },
        { i: 5, x: 0, y: 36, w: 4, h: 6 },
        { i: 6, x: 0, y: 9, w: 4, h: 3 },
        { i: 7, x: 0, y: 0, w: 4, h: 3 },
        { i: 8, x: 0, y: 3, w: 4, h: 3 },
        { i: 9, x: 0, y: 6, w: 4, h: 3 },
        { i: 10, x: 0, y: 12, w: 4, h: 6 },
    ],
};

const initialStickers = [
    { i: 1, name: 'RechartsAreaChart' },
    { i: 2, name: 'RechartsBarChart' },
    { i: 3, name: 'RechartsPieChart' },
    { i: 4, name: 'RechartsStackedBarChart' },
    { i: 5, name: 'TableUser' },
    { i: 6, name: 'NumberMAU' },
    { i: 7, name: 'NumberDAU' },
    { i: 8, name: 'NumberWAU' },
    { i: 9, name: 'NumberARPU' },
    { i: 10, name: 'NumberDAU2' },
];

class ExampleSamplePage extends React.Component {
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

ExampleSamplePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ExampleSamplePage);
