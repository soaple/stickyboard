// src/components/page/ComponentRechartsPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayouts = {
    lg: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 0, y: 6, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 8, y: 0, w: 4, h: 6 },
        { i: 6, x: 4, y: 12, w: 4, h: 6 },
        { i: 7, x: 0, y: 12, w: 4, h: 6 },
        { i: 8, x: 8, y: 6, w: 4, h: 6 },
        { i: 9, x: 0, y: 18, w: 4, h: 6 },
        { i: 10, x: 4, y: 18, w: 4, h: 6 },
        { i: 11, x: 8, y: 12, w: 4, h: 6 },
    ],
    md: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 0, y: 6, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 8, y: 0, w: 4, h: 6 },
        { i: 6, x: 4, y: 12, w: 4, h: 6 },
        { i: 7, x: 0, y: 12, w: 4, h: 6 },
        { i: 8, x: 8, y: 6, w: 4, h: 6 },
        { i: 9, x: 0, y: 18, w: 4, h: 6 },
        { i: 10, x: 4, y: 18, w: 4, h: 6 },
        { i: 11, x: 8, y: 12, w: 4, h: 6 },
    ],
    sm: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 0, y: 6, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 4, y: 12, w: 4, h: 6 },
        { i: 6, x: 4, y: 33, w: 4, h: 6 },
        { i: 7, x: 0, y: 12, w: 4, h: 6 },
        { i: 8, x: 4, y: 18, w: 4, h: 6 },
        { i: 9, x: 0, y: 33, w: 4, h: 6 },
        { i: 10, x: 0, y: 18, w: 4, h: 6 },
        { i: 11, x: 0, y: 24, w: 8, h: 9 },
    ],
    xs: [
        { i: 1, x: 0, y: 0, w: 6, h: 6 },
        { i: 2, x: 0, y: 6, w: 6, h: 7 },
        { i: 3, x: 0, y: 19, w: 6, h: 6 },
        { i: 4, x: 0, y: 25, w: 6, h: 6 },
        { i: 5, x: 0, y: 13, w: 6, h: 6 },
        { i: 6, x: 0, y: 37, w: 6, h: 6 },
        { i: 7, x: 0, y: 31, w: 6, h: 6 },
        { i: 8, x: 0, y: 43, w: 6, h: 6 },
        { i: 9, x: 0, y: 49, w: 6, h: 6 },
        { i: 10, x: 0, y: 55, w: 6, h: 6 },
        { i: 11, x: 0, y: 61, w: 6, h: 9 },
    ],
    xxs: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 0, y: 6, w: 4, h: 6 },
        { i: 3, x: 0, y: 18, w: 4, h: 6 },
        { i: 4, x: 0, y: 24, w: 4, h: 6 },
        { i: 5, x: 0, y: 12, w: 4, h: 6 },
        { i: 6, x: 0, y: 36, w: 4, h: 6 },
        { i: 7, x: 0, y: 30, w: 4, h: 6 },
        { i: 8, x: 0, y: 42, w: 4, h: 6 },
        { i: 9, x: 0, y: 48, w: 4, h: 6 },
        { i: 10, x: 0, y: 54, w: 4, h: 6 },
        { i: 11, x: 0, y: 60, w: 4, h: 6 },
    ],
};

const initialStickers = [
    { i: 1, name: 'RechartsLineChart' },
    { i: 2, name: 'RechartsMultiLineChart' },
    { i: 3, name: 'RechartsBarChart' },
    { i: 4, name: 'RechartsStackedBarChart' },
    { i: 5, name: 'RechartsComposedChart' },
    { i: 6, name: 'RechartsRadarChart' },
    { i: 7, name: 'RechartsPieChart' },
    { i: 8, name: 'RechartsAreaChart' },
    { i: 9, name: 'RechartsScatterChart' },
    { i: 10, name: 'RechartsTreeMap' },
    { i: 11, name: 'RechartsTinyChart' },
];

class ComponentRechartsPage extends React.Component {
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

ComponentRechartsPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentRechartsPage);
