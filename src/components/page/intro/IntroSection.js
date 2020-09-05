// src/components/page/intro/IntroSection.js

import React from 'react';
import styled from 'styled-components';
import IntroTitle from './IntroTitle';

const Section = styled.section`
    margin: 100px auto;

    display: flex;
    flex-direction: column;

    max-width: 1350px;
    width: 100%;

    & small {
        margin: 0 0 0 25px;
        font-size: 15px;
    }

    @media (max-width: 828px) {
        & small {
            margin: 0 0 20px 0;
            text-align: center;
        }
    }

    @media (max-width: 600px) {
        & small {
            padding: 0 20px;
        }
    }
`;

function IntroSection({ children, title }) {
    return (
        <Section>
            <IntroTitle title={title} />
            {children}
        </Section>
    );
}

export default IntroSection;
