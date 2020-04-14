// src/components/page/ComponentChartsPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'RechartsRadarChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'RechartsPieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
        { i: 'RechartsScatterChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'RechartsTreeMap', x: 4, y: 18, w: 4, h: 6 },
        { i: 'RechartsTinyChart', x: 8, y: 12, w: 4, h: 6 },
    ],
    md: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'RechartsRadarChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'RechartsPieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
        { i: 'RechartsScatterChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'RechartsTreeMap', x: 4, y: 18, w: 4, h: 6 },
        { i: 'RechartsTinyChart', x: 8, y: 12, w: 4, h: 6 },
    ],
    sm: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'RechartsRadarChart', x: 4, y: 33, w: 4, h: 6 },
        { i: 'RechartsPieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 4, y: 18, w: 4, h: 6 },
        { i: 'RechartsScatterChart', x: 0, y: 33, w: 4, h: 6 },
        { i: 'RechartsTreeMap', x: 0, y: 18, w: 4, h: 6 },
        { i: 'RechartsTinyChart', x: 0, y: 24, w: 8, h: 9 },
    ],
    xs: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 6, w: 6, h: 7 },
        { i: 'RechartsBarChart', x: 0, y: 19, w: 6, h: 6 },
        { i: 'RechartsStackedBarChart', x: 0, y: 25, w: 6, h: 6 },
        { i: 'RechartsComposedChart', x: 0, y: 13, w: 6, h: 6 },
        { i: 'RechartsRadarChart', x: 0, y: 37, w: 6, h: 6 },
        { i: 'RechartsPieChart', x: 0, y: 31, w: 6, h: 6 },
        { i: 'RechartsAreaChart', x: 0, y: 43, w: 6, h: 6 },
        { i: 'RechartsScatterChart', x: 0, y: 49, w: 6, h: 6 },
        { i: 'RechartsTreeMap', x: 0, y: 55, w: 6, h: 6 },
        { i: 'RechartsTinyChart', x: 0, y: 61, w: 6, h: 9 },
    ],
    xxs: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 0, y: 24, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'RechartsRadarChart', x: 0, y: 36, w: 4, h: 6 },
        { i: 'RechartsPieChart', x: 0, y: 30, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 0, y: 42, w: 4, h: 6 },
        { i: 'RechartsScatterChart', x: 0, y: 48, w: 4, h: 6 },
        { i: 'RechartsTreeMap', x: 0, y: 54, w: 4, h: 6 },
        { i: 'RechartsTinyChart', x: 0, y: 60, w: 4, h: 6 },
    ],
};

const initialBlocks = [
    { i: 'RechartsLineChart' },
    { i: 'RechartsMultiLineChart' },
    { i: 'RechartsBarChart' },
    { i: 'RechartsStackedBarChart' },
    { i: 'RechartsComposedChart' },
    { i: 'RechartsRadarChart' },
    { i: 'RechartsPieChart' },
    { i: 'RechartsAreaChart' },
    { i: 'RechartsScatterChart' },
    { i: 'RechartsTreeMap' },
    { i: 'RechartsTinyChart' },
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
