// src/components/page/intro/LayoutCustomization.js

import React from 'react';
import styled from 'styled-components';

import PageBaseContainer from 'redux/containers/PageBaseContainer';
import IntroSection from './IntroSection';
import IntroTab from './IntroTab';

const initialLayoutsA = {
    lg: [
        { i: 1, x: 0, y: 0, w: 4, h: 2 },
        { i: 2, x: 4, y: 0, w: 4, h: 2 },
        { i: 3, x: 8, y: 0, w: 4, h: 2 },
        { i: 4, x: 0, y: 2, w: 6, h: 6 },
        { i: 5, x: 6, y: 2, w: 6, h: 6 },
        { i: 6, x: 0, y: 8, w: 12, h: 6 },
    ],
    md: [
        { i: 1, x: 0, y: 0, w: 4, h: 2 },
        { i: 2, x: 4, y: 0, w: 4, h: 2 },
        { i: 3, x: 8, y: 0, w: 4, h: 2 },
        { i: 4, x: 0, y: 2, w: 6, h: 6 },
        { i: 5, x: 6, y: 2, w: 6, h: 6 },
        { i: 6, x: 0, y: 8, w: 12, h: 6 },
    ],
    sm: [
        { i: 1, x: 0, y: 0, w: 2, h: 2 },
        { i: 2, x: 2, y: 0, w: 3, h: 2 },
        { i: 3, x: 5, y: 0, w: 3, h: 2 },
        { i: 4, x: 0, y: 2, w: 4, h: 5 },
        { i: 5, x: 4, y: 2, w: 4, h: 5 },
        { i: 6, x: 0, y: 7, w: 8, h: 6 },
    ],
    xs: [
        { i: 1, x: 0, y: 0, w: 6, h: 2 },
        { i: 2, x: 0, y: 2, w: 6, h: 2 },
        { i: 3, x: 0, y: 4, w: 6, h: 2 },
        { i: 4, x: 0, y: 6, w: 6, h: 5 },
        { i: 5, x: 0, y: 11, w: 6, h: 5 },
        { i: 6, x: 0, y: 16, w: 6, h: 5 },
    ],
    xxs: [
        { i: 1, x: 0, y: 0, w: 4, h: 3 },
        { i: 2, x: 0, y: 3, w: 4, h: 3 },
        { i: 3, x: 0, y: 6, w: 4, h: 3 },
        { i: 4, x: 0, y: 9, w: 4, h: 5 },
        { i: 5, x: 0, y: 14, w: 4, h: 5 },
        { i: 6, x: 0, y: 19, w: 4, h: 6 },
    ],
};

const initialLayoutsB = {
    lg: [
        { i: 1, x: 7, y: 6, w: 5, h: 2 },
        { i: 2, x: 7, y: 8, w: 5, h: 2 },
        { i: 3, x: 7, y: 10, w: 5, h: 2 },
        { i: 4, x: 0, y: 6, w: 7, h: 6 },
        { i: 5, x: 0, y: 0, w: 6, h: 6 },
        { i: 6, x: 6, y: 0, w: 6, h: 6 },
    ],
    md: [
        { i: 1, x: 6, y: 6, w: 6, h: 2 },
        { i: 2, x: 6, y: 8, w: 6, h: 2 },
        { i: 3, x: 6, y: 10, w: 6, h: 2 },
        { i: 4, x: 0, y: 6, w: 6, h: 6 },
        { i: 5, x: 0, y: 0, w: 6, h: 6 },
        { i: 6, x: 6, y: 0, w: 6, h: 6 },
    ],
    sm: [
        { i: 1, x: 4, y: 6, w: 4, h: 2 },
        { i: 2, x: 4, y: 8, w: 4, h: 2 },
        { i: 3, x: 4, y: 10, w: 4, h: 2 },
        { i: 4, x: 0, y: 6, w: 4, h: 6 },
        { i: 5, x: 0, y: 0, w: 4, h: 6 },
        { i: 6, x: 4, y: 0, w: 4, h: 6 },
    ],
    xs: [
        { i: 1, x: 0, y: 10, w: 6, h: 2 },
        { i: 2, x: 0, y: 12, w: 6, h: 2 },
        { i: 3, x: 0, y: 14, w: 6, h: 2 },
        { i: 4, x: 0, y: 16, w: 6, h: 5 },
        { i: 5, x: 0, y: 0, w: 6, h: 5 },
        { i: 6, x: 0, y: 5, w: 6, h: 5 },
    ],
    xxs: [
        { i: 1, x: 0, y: 11, w: 4, h: 3 },
        { i: 2, x: 0, y: 14, w: 4, h: 3 },
        { i: 3, x: 0, y: 17, w: 4, h: 3 },
        { i: 4, x: 0, y: 20, w: 4, h: 5 },
        { i: 5, x: 0, y: 0, w: 4, h: 5 },
        { i: 6, x: 0, y: 5, w: 4, h: 6 },
    ],
};

const initialStickers = [
    { i: 1, name: 'NumberDAU' },
    { i: 2, name: 'NumberWAU' },
    { i: 3, name: 'NumberMAU' },
    { i: 4, name: 'TableOrder' },
    { i: 5, name: 'RechartsMultiLineChart' },
    { i: 6, name: 'HighchartsBarChart' },
];

const PageBaseWrapper = styled.div`
    min-height: 968px;
`;

function LayoutCustomization(props) {
    return (
        <IntroSection title={'Layout customization'}>
            <small>
                Users can customize the layout of components to make their own
                dashboards.
            </small>
            <IntroTab labels={['USER A', 'USER B']}>
                <PageBaseWrapper>
                    <PageBaseContainer
                        initialLayouts={initialLayoutsA}
                        initialStickers={initialStickers}
                    />
                </PageBaseWrapper>
                <PageBaseWrapper>
                    <PageBaseContainer
                        initialLayouts={initialLayoutsB}
                        initialStickers={initialStickers}
                    />
                </PageBaseWrapper>
            </IntroTab>
        </IntroSection>
    );
}

export default LayoutCustomization;
