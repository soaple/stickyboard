// src/components/page/IntroPlaygroundPage.js

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const Wrapper = styled.div``;

function IntroPlaygroundPage(props) {
    console.log(props);
    const { showDialog } = props;

    useEffect(() => {
        showDialog('AlertDialog', {
            title: 'Welcome to StickyBoard!',
            message:
                "Click 'Insert Sticker' button in the menu at the bottom right of the screen. And change the content and layout of the stickers as you want!",
            confirmButtonText: 'Got it!',
        });
    }, []);

    return <PageBaseContainer />;
}

IntroPlaygroundPage.propTypes = {};

export default IntroPlaygroundPage;
