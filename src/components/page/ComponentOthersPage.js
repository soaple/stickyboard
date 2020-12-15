// src/components/page/ComponentOthersPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const initialLayouts = {
    lg: [
        { i: 1, x: 0, y: 9, w: 12, h: 5 },
        { i: 2, x: 6, y: 0, w: 6, h: 9 },
        { i: 3, x: 0, y: 0, w: 6, h: 9 },
    ],
    md: [
        { i: 1, x: 0, y: 9, w: 12, h: 5 },
        { i: 2, x: 6, y: 0, w: 6, h: 9 },
        { i: 3, x: 0, y: 0, w: 6, h: 9 },
    ],
    sm: [
        { i: 1, x: 0, y: 9, w: 8, h: 5 },
        { i: 2, x: 4, y: 0, w: 4, h: 9 },
        { i: 3, x: 0, y: 0, w: 4, h: 9 },
    ],
    xs: [
        { i: 1, x: 0, y: 18, w: 6, h: 5 },
        { i: 2, x: 0, y: 9, w: 6, h: 9 },
        { i: 3, x: 0, y: 0, w: 6, h: 9 },
    ],
    xxs: [
        { i: 1, x: 0, y: 18, w: 4, h: 5 },
        { i: 2, x: 0, y: 9, w: 4, h: 9 },
        { i: 3, x: 0, y: 0, w: 4, h: 9 },
    ],
};

const initialStickers = [
    { i: 1, name: 'OthersGitHubCalendar' },
    { i: 2, name: 'OthersMarkdown' },
    { i: 3, name: 'OthersCardList' },
];

class ComponentOthersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <PageBaseContainer
                initialLayouts={initialLayouts}
                initialStickers={initialStickers}
            />
        );
    }
}

ComponentOthersPage.propTypes = {};

export default ComponentOthersPage;
