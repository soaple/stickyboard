// src/components/page/intro/LayoutCustomization.js

import React from 'react';
import styled from 'styled-components';

import PageBaseContainer from 'redux/containers/PageBaseContainer';
import IntroSection from './IntroSection';
import IntroTab from './IntroTab';

const initialLayoutA = {
    lg: [
        { i: 'NumberDAU', x: 0, y: 0, w: 4, h: 2 },
        { i: 'NumberWAU', x: 4, y: 0, w: 4, h: 2 },
        { i: 'NumberMAU', x: 8, y: 0, w: 4, h: 2 },
        { i: 'TableOrder', x: 0, y: 2, w: 6, h: 6 },
        { i: 'RechartsMultiLineChart', x: 6, y: 2, w: 6, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 8, w: 12, h: 6 },
    ],
    md: [
        { i: 'NumberDAU', x: 0, y: 0, w: 4, h: 2 },
        { i: 'NumberWAU', x: 4, y: 0, w: 4, h: 2 },
        { i: 'NumberMAU', x: 8, y: 0, w: 4, h: 2 },
        { i: 'TableOrder', x: 0, y: 2, w: 6, h: 6 },
        { i: 'RechartsMultiLineChart', x: 6, y: 2, w: 6, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 8, w: 12, h: 6 },
    ],
    sm: [
        { i: 'NumberDAU', x: 0, y: 0, w: 2, h: 2 },
        { i: 'NumberWAU', x: 2, y: 0, w: 3, h: 2 },
        { i: 'NumberMAU', x: 5, y: 0, w: 3, h: 2 },
        { i: 'TableOrder', x: 0, y: 2, w: 4, h: 5 },
        { i: 'RechartsMultiLineChart', x: 4, y: 2, w: 4, h: 5 },
        { i: 'HighchartsBarChart', x: 0, y: 7, w: 8, h: 6 },
    ],
    xs: [
        { i: 'NumberDAU', x: 0, y: 0, w: 6, h: 2 },
        { i: 'NumberWAU', x: 0, y: 2, w: 6, h: 2 },
        { i: 'NumberMAU', x: 0, y: 4, w: 6, h: 2 },
        { i: 'TableOrder', x: 0, y: 6, w: 6, h: 5 },
        { i: 'RechartsMultiLineChart', x: 0, y: 11, w: 6, h: 5 },
        { i: 'HighchartsBarChart', x: 0, y: 16, w: 6, h: 5 },
    ],
    xxs: [
        { i: 'NumberDAU', x: 0, y: 0, w: 4, h: 3 },
        { i: 'NumberWAU', x: 0, y: 3, w: 4, h: 3 },
        { i: 'NumberMAU', x: 0, y: 6, w: 4, h: 3 },
        { i: 'TableOrder', x: 0, y: 9, w: 4, h: 5 },
        { i: 'RechartsMultiLineChart', x: 0, y: 14, w: 4, h: 5 },
        { i: 'HighchartsBarChart', x: 0, y: 19, w: 4, h: 6 },
    ],
};

const initialLayoutB = {
    lg: [
        { i: 'NumberDAU', x: 7, y: 6, w: 5, h: 2 },
        { i: 'NumberWAU', x: 7, y: 8, w: 5, h: 2 },
        { i: 'NumberMAU', x: 7, y: 10, w: 5, h: 2 },
        { i: 'TableOrder', x: 0, y: 6, w: 7, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'HighchartsBarChart', x: 6, y: 0, w: 6, h: 6 },
    ],
    md: [
        { i: 'NumberDAU', x: 6, y: 6, w: 6, h: 2 },
        { i: 'NumberWAU', x: 6, y: 8, w: 6, h: 2 },
        { i: 'NumberMAU', x: 6, y: 10, w: 6, h: 2 },
        { i: 'TableOrder', x: 0, y: 6, w: 6, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'HighchartsBarChart', x: 6, y: 0, w: 6, h: 6 },
    ],
    sm: [
        { i: 'NumberDAU', x: 4, y: 6, w: 4, h: 2 },
        { i: 'NumberWAU', x: 4, y: 8, w: 4, h: 2 },
        { i: 'NumberMAU', x: 4, y: 10, w: 4, h: 2 },
        { i: 'TableOrder', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
    ],
    xs: [
        { i: 'NumberDAU', x: 0, y: 10, w: 6, h: 2 },
        { i: 'NumberWAU', x: 0, y: 12, w: 6, h: 2 },
        { i: 'NumberMAU', x: 0, y: 14, w: 6, h: 2 },
        { i: 'TableOrder', x: 0, y: 16, w: 6, h: 5 },
        { i: 'RechartsMultiLineChart', x: 0, y: 0, w: 6, h: 5 },
        { i: 'HighchartsBarChart', x: 0, y: 5, w: 6, h: 5 },
    ],
    xxs: [
        { i: 'NumberDAU', x: 0, y: 11, w: 4, h: 3 },
        { i: 'NumberWAU', x: 0, y: 14, w: 4, h: 3 },
        { i: 'NumberMAU', x: 0, y: 17, w: 4, h: 3 },
        { i: 'TableOrder', x: 0, y: 20, w: 4, h: 5 },
        { i: 'RechartsMultiLineChart', x: 0, y: 0, w: 4, h: 5 },
        { i: 'HighchartsBarChart', x: 0, y: 5, w: 4, h: 6 },
    ],
};

const initialBlocks = [
    { i: 'NumberDAU' },
    { i: 'NumberWAU' },
    { i: 'NumberMAU' },
    { i: 'TableOrder' },
    { i: 'RechartsMultiLineChart' },
    { i: 'HighchartsBarChart' },
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
                        initialLayout={initialLayoutA}
                        initialBlocks={initialBlocks}
                    />
                </PageBaseWrapper>
                <PageBaseWrapper>
                    <PageBaseContainer
                        initialLayout={initialLayoutB}
                        initialBlocks={initialBlocks}
                    />
                </PageBaseWrapper>
            </IntroTab>
        </IntroSection>
    );
}

export default LayoutCustomization;
