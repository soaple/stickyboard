// src/components/page/ComponentOthersPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { Sticker } from '@stickyboard/core';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const initialLayout = {
    lg: [{ i: 'OtherGitHubCalendar', x: 0, y: 0, w: 12, h: 5 }],
    md: [{ i: 'OtherGitHubCalendar', x: 0, y: 0, w: 12, h: 5 }],
    sm: [{ i: 'OtherGitHubCalendar', x: 0, y: 0, w: 12, h: 5 }],
    xs: [{ i: 'OtherGitHubCalendar', x: 0, y: 0, w: 12, h: 5 }],
    xxs: [{ i: 'OtherGitHubCalendar', x: 0, y: 0, w: 12, h: 5 }],
};

const initialBlocks = [{ i: 'OtherGitHubCalendar' }];

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
