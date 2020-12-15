// src/components/page/ComponentTablePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

// const initialLayouts = {
//     lg: [
//         { i: 1, x: 0, y: 0, w: 6, h: 7 },
//         { i: 2, x: 6, y: 0, w: 6, h: 7 },
//         { i: 3, x: 0, y: 7, w: 4, h: 7 },
//         { i: 4, x: 4, y: 7, w: 4, h: 7 },
//         { i: 5, x: 8, y: 7, w: 4, h: 7 },
//     ],
//     md: [
//         { i: 1, x: 0, y: 0, w: 6, h: 7 },
//         { i: 2, x: 6, y: 0, w: 6, h: 7 },
//         { i: 3, x: 0, y: 7, w: 4, h: 7 },
//         { i: 4, x: 4, y: 7, w: 4, h: 7 },
//         { i: 5, x: 8, y: 7, w: 4, h: 7 },
//     ],
//     sm: [
//         { i: 1, x: 0, y: 0, w: 8, h: 7 },
//         { i: 2, x: 0, y: 7, w: 8, h: 7 },
//         { i: 3, x: 0, y: 14, w: 8, h: 6 },
//         { i: 4, x: 0, y: 20, w: 4, h: 6 },
//         { i: 5, x: 4, y: 20, w: 4, h: 6 },
//     ],
//     xs: [
//         { i: 1, x: 0, y: 0, w: 6, h: 7 },
//         { i: 2, x: 0, y: 7, w: 6, h: 7 },
//         { i: 3, x: 0, y: 14, w: 6, h: 6 },
//         { i: 4, x: 0, y: 20, w: 6, h: 6 },
//         { i: 5, x: 0, y: 26, w: 6, h: 6 },
//     ],
//     xxs: [
//         { i: 1, x: 0, y: 0, w: 4, h: 7 },
//         { i: 2, x: 0, y: 7, w: 4, h: 7 },
//         { i: 3, x: 0, y: 14, w: 4, h: 6 },
//         { i: 4, x: 0, y: 20, w: 4, h: 6 },
//         { i: 5, x: 0, y: 26, w: 4, h: 6 },
//     ],
// };
const initialLayouts = {
    lg: [
        { i: 1, x: 0, y: 0, w: 6, h: 14 },
        { i: 2, x: 6, y: 0, w: 6, h: 14 },
    ],
    md: [
        { i: 1, x: 0, y: 0, w: 6, h: 14 },
        { i: 2, x: 6, y: 0, w: 6, h: 14 },
    ],
    sm: [
        { i: 1, x: 0, y: 14, w: 8, h: 14 },
        { i: 2, x: 0, y: 0, w: 8, h: 14 },
    ],
    xs: [
        { i: 1, x: 0, y: 14, w: 6, h: 14 },
        { i: 2, x: 0, y: 0, w: 6, h: 14 },
    ],
    xxs: [
        { i: 1, x: 0, y: 14, w: 4, h: 14 },
        { i: 2, x: 0, y: 0, w: 4, h: 14 },
    ],
};

// const initialStickers = [
//     { i: 1, name: 'TableOrder' },
//     { i: 2, name: 'TableUser' },
//     { i: 3, name: 'TableRealtimeOrder' },
//     { i: 4, name: 'TableRealtimeUser' },
//     { i: 5, name: 'RealtimeMessageTable' },
// ];
const initialStickers = [
    { i: 1, name: 'TableOrder' },
    { i: 2, name: 'TableUser' },
];

class ComponentTablePage extends React.Component {
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

ComponentTablePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentTablePage);
