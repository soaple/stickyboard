// src/components/page/intro/IntroTitle.js

import React from 'react';
import styled from 'styled-components';
import { Circle } from './GetStarted';

const Title = styled.p`
    margin-bottom: 10px;
    font-size: 28px;
    font-weight: bold;

    @media (max-width: 828px) {
        text-align: center;
        padding: 0 20px;
    }

    @media (max-width: 600px) {
        font-size: 22px;
    }
`;

function IntroTitle({ title }) {
    return (
        <Title>
            <Circle>{title}</Circle>
        </Title>
    );
}

export default IntroTitle;
