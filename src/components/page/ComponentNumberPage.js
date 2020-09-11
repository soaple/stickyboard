// src/components/page/ComponentNumberPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'NumberDAU', x: 0, y: 8, w: 3, h: 2 },
        { i: 'NumberWAU', x: 3, y: 8, w: 3, h: 2 },
        { i: 'NumberMAU', x: 6, y: 0, w: 3, h: 2 },
        { i: 'NumberARPU', x: 9, y: 0, w: 3, h: 2 },
        { i: 'NumberDAU2', x: 0, y: 0, w: 6, h: 8 },
        { i: 'NumberWAU2', x: 3, y: 10, w: 3, h: 4 },
        { i: 'NumberMAU2', x: 6, y: 2, w: 6, h: 8 },
        { i: 'NumberARPU2', x: 0, y: 10, w: 3, h: 4 },
        { i: 'NumberDAU3', x: 6, y: 10, w: 3, h: 4 },
        { i: 'NumberMQTT', x: 9, y: 10, w: 3, h: 4 },
    ],
    md: [
        { i: 'NumberDAU', x: 0, y: 8, w: 3, h: 2 },
        { i: 'NumberWAU', x: 3, y: 8, w: 3, h: 2 },
        { i: 'NumberMAU', x: 6, y: 0, w: 3, h: 2 },
        { i: 'NumberARPU', x: 9, y: 0, w: 3, h: 2 },
        { i: 'NumberDAU2', x: 0, y: 0, w: 6, h: 8 },
        { i: 'NumberWAU2', x: 3, y: 10, w: 3, h: 4 },
        { i: 'NumberMAU2', x: 6, y: 2, w: 6, h: 8 },
        { i: 'NumberARPU2', x: 0, y: 10, w: 3, h: 4 },
        { i: 'NumberDAU3', x: 6, y: 10, w: 3, h: 4 },
        { i: 'NumberMQTT', x: 9, y: 10, w: 3, h: 4 },
    ],
    sm: [
        { i: 'NumberDAU', x: 0, y: 8, w: 2, h: 2 },
        { i: 'NumberWAU', x: 2, y: 8, w: 2, h: 2 },
        { i: 'NumberMAU', x: 4, y: 0, w: 2, h: 2 },
        { i: 'NumberARPU', x: 6, y: 0, w: 2, h: 2 },
        { i: 'NumberDAU2', x: 0, y: 0, w: 4, h: 8 },
        { i: 'NumberWAU2', x: 2, y: 10, w: 2, h: 4 },
        { i: 'NumberMAU2', x: 4, y: 2, w: 4, h: 8 },
        { i: 'NumberARPU2', x: 0, y: 10, w: 2, h: 4 },
        { i: 'NumberDAU3', x: 4, y: 10, w: 2, h: 4 },
        { i: 'NumberMQTT', x: 6, y: 10, w: 2, h: 4 },
    ],
    xs: [
        { i: 'NumberDAU', x: 0, y: 8, w: 3, h: 2 },
        { i: 'NumberWAU', x: 0, y: 10, w: 3, h: 2 },
        { i: 'NumberMAU', x: 3, y: 0, w: 3, h: 2 },
        { i: 'NumberARPU', x: 3, y: 2, w: 3, h: 2 },
        { i: 'NumberDAU2', x: 0, y: 0, w: 3, h: 8 },
        { i: 'NumberWAU2', x: 3, y: 12, w: 3, h: 4 },
        { i: 'NumberMAU2', x: 3, y: 4, w: 3, h: 8 },
        { i: 'NumberARPU2', x: 0, y: 12, w: 3, h: 4 },
        { i: 'NumberDAU3', x: 0, y: 16, w: 3, h: 4 },
        { i: 'NumberMQTT', x: 3, y: 16, w: 3, h: 4 },
    ],
    xxs: [
        { i: 'NumberDAU', x: 0, y: 12, w: 2, h: 2 },
        { i: 'NumberWAU', x: 2, y: 12, w: 2, h: 2 },
        { i: 'NumberMAU', x: 0, y: 5, w: 2, h: 2 },
        { i: 'NumberARPU', x: 2, y: 5, w: 2, h: 2 },
        { i: 'NumberDAU2', x: 0, y: 0, w: 4, h: 5 },
        { i: 'NumberWAU2', x: 2, y: 14, w: 2, h: 4 },
        { i: 'NumberMAU2', x: 0, y: 7, w: 4, h: 5 },
        { i: 'NumberARPU2', x: 0, y: 14, w: 2, h: 4 },
        { i: 'NumberDAU3', x: 0, y: 18, w: 2, h: 4 },
        { i: 'NumberMQTT', x: 2, y: 18, w: 2, h: 4 },
    ],
};

const initialBlocks = [
    { i: 'NumberDAU' },
    { i: 'NumberWAU' },
    { i: 'NumberMAU' },
    { i: 'NumberARPU' },
    { i: 'NumberDAU2' },
    { i: 'NumberWAU2' },
    { i: 'NumberMAU2' },
    { i: 'NumberARPU2' },
    { i: 'NumberDAU3' },
    { i: 'NumberMQTT' },
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
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

ComponentNumberPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentNumberPage);
