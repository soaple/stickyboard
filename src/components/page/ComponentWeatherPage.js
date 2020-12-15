// src/components/page/ComponentWeatherPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayouts = {
    lg: [
        { i: 1, x: 0, y: 0, w: 4, h: 5 },
        { i: 2, x: 4, y: 0, w: 8, h: 5 },
        { i: 3, x: 0, y: 5, w: 12, h: 6 },
        { i: 4, x: 8, y: 11, w: 4, h: 5 },
        { i: 5, x: 0, y: 11, w: 8, h: 5 },
    ],
    md: [
        { i: 1, x: 0, y: 0, w: 4, h: 5 },
        { i: 2, x: 4, y: 0, w: 8, h: 5 },
        { i: 3, x: 0, y: 5, w: 12, h: 6 },
        { i: 4, x: 8, y: 11, w: 4, h: 5 },
        { i: 5, x: 0, y: 11, w: 8, h: 5 },
    ],
    sm: [
        { i: 1, x: 0, y: 0, w: 4, h: 5 },
        { i: 2, x: 4, y: 0, w: 4, h: 5 },
        { i: 3, x: 0, y: 5, w: 8, h: 6 },
        { i: 4, x: 4, y: 11, w: 4, h: 5 },
        { i: 5, x: 0, y: 11, w: 4, h: 5 },
    ],
    xs: [
        { i: 1, x: 0, y: 0, w: 6, h: 5 },
        { i: 2, x: 0, y: 5, w: 6, h: 5 },
        { i: 3, x: 0, y: 10, w: 6, h: 6 },
        { i: 4, x: 0, y: 21, w: 6, h: 5 },
        { i: 5, x: 0, y: 16, w: 6, h: 5 },
    ],
    xxs: [
        { i: 1, x: 0, y: 0, w: 4, h: 5 },
        { i: 2, x: 0, y: 5, w: 4, h: 5 },
        { i: 3, x: 0, y: 10, w: 4, h: 6 },
        { i: 4, x: 0, y: 21, w: 4, h: 5 },
        { i: 5, x: 0, y: 16, w: 4, h: 5 },
    ],
};

const initialStickers = [
    { i: 1, name: 'OpenWeatherMap' },
    { i: 2, name: 'OpenWeatherMap3days' },
    { i: 3, name: 'OpenWeatherMap7days' },
    { i: 4, name: 'YahooWeather' },
    { i: 5, name: 'YahooWeatherForecast' },
];

class ComponentWeatherPage extends React.Component {
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

ComponentWeatherPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentWeatherPage);
