// src/components/page/ComponentChartsPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import { Sticker } from '@stickyboard/core';
// import {
//     LineChart,
//     MultiLineChart,
//     BarChart,
//     StackedBarChart,
//     ComposedChart,
//     PieChart,
//     RadarChart,
//     AreaChart,
//     ScatterChart,
//     Treemap,
// } from '@stickyboard/recharts';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'LineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'MultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'BarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'StackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'ComposedChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'RadarChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'PieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'AreaChart', x: 8, y: 6, w: 4, h: 6 },
        { i: 'ScatterChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'TreeMap', x: 4, y: 18, w: 4, h: 6 },
        { i: 'TinyChart', x: 8, y: 12, w: 4, h: 6 },
    ],
    md: [
        { i: 'LineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'MultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'BarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'StackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'ComposedChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'RadarChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'PieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'AreaChart', x: 8, y: 6, w: 4, h: 6 },
        { i: 'ScatterChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'TreeMap', x: 4, y: 18, w: 4, h: 6 },
        { i: 'TinyChart', x: 8, y: 12, w: 4, h: 6 },
    ],
    sm: [
        { i: 'LineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'MultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'BarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'StackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'ComposedChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'RadarChart', x: 4, y: 33, w: 4, h: 6 },
        { i: 'PieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'AreaChart', x: 4, y: 18, w: 4, h: 6 },
        { i: 'ScatterChart', x: 0, y: 33, w: 4, h: 6 },
        { i: 'TreeMap', x: 0, y: 18, w: 4, h: 6 },
        { i: 'TinyChart', x: 0, y: 24, w: 8, h: 9 },
    ],
    xs: [
        { i: 'LineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'MultiLineChart', x: 0, y: 6, w: 6, h: 7 },
        { i: 'BarChart', x: 0, y: 19, w: 6, h: 6 },
        { i: 'StackedBarChart', x: 0, y: 25, w: 6, h: 6 },
        { i: 'ComposedChart', x: 0, y: 13, w: 6, h: 6 },
        { i: 'RadarChart', x: 0, y: 37, w: 6, h: 6 },
        { i: 'PieChart', x: 0, y: 31, w: 6, h: 6 },
        { i: 'AreaChart', x: 0, y: 43, w: 6, h: 6 },
        { i: 'ScatterChart', x: 0, y: 49, w: 6, h: 6 },
        { i: 'TreeMap', x: 0, y: 55, w: 6, h: 6 },
        { i: 'TinyChart', x: 0, y: 61, w: 6, h: 9 },
    ],
    xxs: [
        { i: 'LineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'MultiLineChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'BarChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'StackedBarChart', x: 0, y: 24, w: 4, h: 6 },
        { i: 'ComposedChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'RadarChart', x: 0, y: 36, w: 4, h: 6 },
        { i: 'PieChart', x: 0, y: 30, w: 4, h: 6 },
        { i: 'AreaChart', x: 0, y: 42, w: 4, h: 6 },
        { i: 'ScatterChart', x: 0, y: 48, w: 4, h: 6 },
        { i: 'TreeMap', x: 0, y: 54, w: 4, h: 6 },
        { i: 'TinyChart', x: 0, y: 60, w: 4, h: 6 },
    ],
};

const initialBlocks = [
    { i: 'LineChart' },
    { i: 'MultiLineChart' },
    { i: 'BarChart' },
    { i: 'StackedBarChart' },
    { i: 'ComposedChart' },
    { i: 'RadarChart' },
    { i: 'PieChart' },
    { i: 'AreaChart' },
    { i: 'ScatterChart' },
    { i: 'TreeMap' },
    { i: 'TinyChart' },
];

class ComponentChartsPage extends React.Component {
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

ComponentChartsPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentChartsPage);
