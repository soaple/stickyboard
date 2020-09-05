// src/components/page/IntroPage.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GetStarted from 'components/page/intro/GetStarted';
import SupportChart from 'components/page/intro/SupportChart';
import SupportMap from 'components/page/intro/SupportMap';
import LayoutCustomization from 'components/page/intro/LayoutCustomization';

const Wrapper = styled.div`
    padding: 0 50px;
    width: 100%;
    @media (max-width: 1450px) {
        padding: 0 30px;
    }
    @media (max-width: 600px) {
        padding: 0;
    }
`;

function IntroPage(props) {
    return (
        <Wrapper>
            <GetStarted />
            <SupportChart />
            <SupportMap />
            <LayoutCustomization />
        </Wrapper>
    );
}

export default IntroPage;
