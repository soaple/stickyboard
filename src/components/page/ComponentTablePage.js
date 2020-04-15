// src/components/page/ComponentTablePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

// const initialLayout = {
//     lg: [
//         { i: 'TableOrder', x: 0, y: 0, w: 6, h: 7 },
//         { i: 'TableUser', x: 6, y: 0, w: 6, h: 7 },
//         { i: 'TableRealtimeOrder', x: 0, y: 7, w: 4, h: 7 },
//         { i: 'TableRealtimeUser', x: 4, y: 7, w: 4, h: 7 },
//         { i: 'RealtimeMessageTable', x: 8, y: 7, w: 4, h: 7 },
//     ],
//     md: [
//         { i: 'TableOrder', x: 0, y: 0, w: 6, h: 7 },
//         { i: 'TableUser', x: 6, y: 0, w: 6, h: 7 },
//         { i: 'TableRealtimeOrder', x: 0, y: 7, w: 4, h: 7 },
//         { i: 'TableRealtimeUser', x: 4, y: 7, w: 4, h: 7 },
//         { i: 'RealtimeMessageTable', x: 8, y: 7, w: 4, h: 7 },
//     ],
//     sm: [
//         { i: 'TableOrder', x: 0, y: 0, w: 8, h: 7 },
//         { i: 'TableUser', x: 0, y: 7, w: 8, h: 7 },
//         { i: 'TableRealtimeOrder', x: 0, y: 14, w: 8, h: 6 },
//         { i: 'TableRealtimeUser', x: 0, y: 20, w: 4, h: 6 },
//         { i: 'RealtimeMessageTable', x: 4, y: 20, w: 4, h: 6 },
//     ],
//     xs: [
//         { i: 'TableOrder', x: 0, y: 0, w: 6, h: 7 },
//         { i: 'TableUser', x: 0, y: 7, w: 6, h: 7 },
//         { i: 'TableRealtimeOrder', x: 0, y: 14, w: 6, h: 6 },
//         { i: 'TableRealtimeUser', x: 0, y: 20, w: 6, h: 6 },
//         { i: 'RealtimeMessageTable', x: 0, y: 26, w: 6, h: 6 },
//     ],
//     xxs: [
//         { i: 'TableOrder', x: 0, y: 0, w: 4, h: 7 },
//         { i: 'TableUser', x: 0, y: 7, w: 4, h: 7 },
//         { i: 'TableRealtimeOrder', x: 0, y: 14, w: 4, h: 6 },
//         { i: 'TableRealtimeUser', x: 0, y: 20, w: 4, h: 6 },
//         { i: 'RealtimeMessageTable', x: 0, y: 26, w: 4, h: 6 },
//     ],
// };
const initialLayout = {
    lg: [
        { i: 'TableOrder', x: 0, y: 0, w: 6, h: 14 },
        { i: 'TableUser', x: 6, y: 0, w: 6, h: 14 },
    ],
    md: [
        { i: 'TableOrder', x: 0, y: 0, w: 6, h: 14 },
        { i: 'TableUser', x: 6, y: 0, w: 6, h: 14 },
    ],
    sm: [
        { i: 'TableOrder', x: 0, y: 14, w: 8, h: 14 },
        { i: 'TableUser', x: 0, y: 0, w: 8, h: 14 },
    ],
    xs: [
        { i: 'TableOrder', x: 0, y: 14, w: 6, h: 14 },
        { i: 'TableUser', x: 0, y: 0, w: 6, h: 14 },
    ],
    xxs: [
        { i: 'TableOrder', x: 0, y: 14, w: 4, h: 14 },
        { i: 'TableUser', x: 0, y: 0, w: 4, h: 14 },
    ],
};

// const initialBlocks = [
//     { i: 'TableOrder' },
//     { i: 'TableUser' },
//     { i: 'TableRealtimeOrder' },
//     { i: 'TableRealtimeUser' },
//     { i: 'RealtimeMessageTable' },
// ];
const initialBlocks = [{ i: 'TableOrder' }, { i: 'TableUser' }];

class ComponentTablePage extends React.Component {
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

ComponentTablePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentTablePage);
