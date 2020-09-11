// src/components/page/ComponentOthersPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const initialLayout = {
    lg: [
        { i: 'OthersGitHubCalendar', x: 0, y: 9, w: 12, h: 5 },
        { i: 'OthersMarkdown', x: 6, y: 0, w: 6, h: 9 },
        { i: 'OthersCardList', x: 0, y: 0, w: 6, h: 9 },
    ],
    md: [
        { i: 'OthersGitHubCalendar', x: 0, y: 9, w: 12, h: 5 },
        { i: 'OthersMarkdown', x: 6, y: 0, w: 6, h: 9 },
        { i: 'OthersCardList', x: 0, y: 0, w: 6, h: 9 },
    ],
    sm: [
        { i: 'OthersGitHubCalendar', x: 0, y: 9, w: 8, h: 5 },
        { i: 'OthersMarkdown', x: 4, y: 0, w: 4, h: 9 },
        { i: 'OthersCardList', x: 0, y: 0, w: 4, h: 9 },
    ],
    xs: [
        { i: 'OthersGitHubCalendar', x: 0, y: 18, w: 6, h: 5 },
        { i: 'OthersMarkdown', x: 0, y: 9, w: 6, h: 9 },
        { i: 'OthersCardList', x: 0, y: 0, w: 6, h: 9 },
    ],
    xxs: [
        { i: 'OthersGitHubCalendar', x: 0, y: 18, w: 4, h: 5 },
        { i: 'OthersMarkdown', x: 0, y: 9, w: 4, h: 9 },
        { i: 'OthersCardList', x: 0, y: 0, w: 4, h: 9 },
    ],
};

const initialBlocks = [
    { i: 'OthersGitHubCalendar' },
    { i: 'OthersMarkdown' },
    { i: 'OthersCardList' },
];

class ComponentOthersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <PageBaseContainer
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

ComponentOthersPage.propTypes = {};

export default ComponentOthersPage;
