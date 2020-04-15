// src/components/IntroPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'IntroCustomLayout', x: 0, y: 6, w: 4, h: 6 },
        { i: 'IntroIntroduction', x: 0, y: 0, w: 4, h: 6 },
        { i: 'IntroDatabaseSupport', x: 4, y: 6, w: 4, h: 6 },
        { i: 'IntroChartSupport', x: 4, y: 0, w: 4, h: 6 },
        { i: 'IntroMapSupport', x: 8, y: 0, w: 4, h: 6 },
        { i: 'IntroContact', x: 8, y: 6, w: 4, h: 6 },
    ],
    md: [
        { i: 'IntroCustomLayout', x: 0, y: 6, w: 4, h: 6 },
        { i: 'IntroIntroduction', x: 0, y: 0, w: 4, h: 6 },
        { i: 'IntroDatabaseSupport', x: 4, y: 6, w: 4, h: 6 },
        { i: 'IntroChartSupport', x: 4, y: 0, w: 4, h: 6 },
        { i: 'IntroMapSupport', x: 8, y: 0, w: 4, h: 6 },
        { i: 'IntroContact', x: 8, y: 6, w: 4, h: 6 },
    ],
    sm: [
        { i: 'IntroCustomLayout', x: 4, y: 6, w: 4, h: 6 },
        { i: 'IntroIntroduction', x: 0, y: 0, w: 4, h: 6 },
        { i: 'IntroDatabaseSupport', x: 0, y: 12, w: 4, h: 6 },
        { i: 'IntroChartSupport', x: 4, y: 0, w: 4, h: 6 },
        { i: 'IntroMapSupport', x: 0, y: 6, w: 4, h: 6 },
        { i: 'IntroContact', x: 4, y: 12, w: 4, h: 6 },
    ],
    xs: [
        { i: 'IntroCustomLayout', x: 3, y: 6, w: 3, h: 6 },
        { i: 'IntroIntroduction', x: 0, y: 0, w: 3, h: 6 },
        { i: 'IntroDatabaseSupport', x: 0, y: 12, w: 3, h: 6 },
        { i: 'IntroChartSupport', x: 3, y: 0, w: 3, h: 6 },
        { i: 'IntroMapSupport', x: 0, y: 6, w: 3, h: 6 },
        { i: 'IntroContact', x: 3, y: 12, w: 3, h: 6 },
    ],
    xxs: [
        { i: 'IntroCustomLayout', x: 0, y: 21, w: 4, h: 7 },
        { i: 'IntroIntroduction', x: 0, y: 0, w: 4, h: 7 },
        { i: 'IntroDatabaseSupport', x: 0, y: 28, w: 4, h: 7 },
        { i: 'IntroChartSupport', x: 0, y: 7, w: 4, h: 7 },
        { i: 'IntroMapSupport', x: 0, y: 14, w: 4, h: 7 },
        { i: 'IntroContact', x: 0, y: 35, w: 4, h: 7 },
    ],
};

const initialBlocks = [
    { i: 'IntroCustomLayout' },
    { i: 'IntroIntroduction' },
    { i: 'IntroDatabaseSupport' },
    { i: 'IntroChartSupport' },
    { i: 'IntroMapSupport' },
    { i: 'IntroContact' },
];

class IntroPage extends React.Component {
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

IntroPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntroPage);
