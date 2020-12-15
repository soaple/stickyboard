// src/components/page/intro/SupportChart.js

import React from 'react';
import styled from 'styled-components';

import PageBaseContainer from 'redux/containers/PageBaseContainer';
import IntroSection from './IntroSection';
import IntroTab from './IntroTab';

const initialChartLayout = {
    lg: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 0, y: 6, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 8, y: 0, w: 4, h: 6 },
        { i: 6, x: 8, y: 6, w: 4, h: 6 },
    ],
    md: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 0, y: 6, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 8, y: 0, w: 4, h: 6 },
        { i: 6, x: 8, y: 6, w: 4, h: 6 },
    ],
    sm: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 0, y: 6, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 4, y: 12, w: 4, h: 6 },
        { i: 6, x: 0, y: 12, w: 4, h: 6 },
    ],
    xs: [
        { i: 1, x: 0, y: 0, w: 6, h: 6 },
        { i: 2, x: 0, y: 6, w: 6, h: 7 },
        { i: 3, x: 0, y: 19, w: 6, h: 6 },
        { i: 4, x: 0, y: 25, w: 6, h: 6 },
        { i: 5, x: 0, y: 13, w: 6, h: 6 },
        { i: 6, x: 0, y: 31, w: 6, h: 6 },
    ],
    xxs: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 0, y: 6, w: 4, h: 6 },
        { i: 3, x: 0, y: 18, w: 4, h: 6 },
        { i: 4, x: 0, y: 24, w: 4, h: 6 },
        { i: 5, x: 0, y: 12, w: 4, h: 6 },
        { i: 6, x: 0, y: 30, w: 4, h: 6 },
    ],
};

const initialChartBlocks = [
    { i: 1, name: 'RechartsLineChart' },
    { i: 2, name: 'RechartsMultiLineChart' },
    { i: 3, name: 'RechartsBarChart' },
    { i: 4, name: 'RechartsStackedBarChart' },
    { i: 5, name: 'RechartsComposedChart' },
    { i: 6, name: 'RechartsAreaChart' },
];

const initialHighLayout = {
    lg: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 8, y: 0, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 8, y: 6, w: 4, h: 6 },
        { i: 6, x: 0, y: 6, w: 4, h: 6 },
    ],
    md: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 8, y: 0, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 8, y: 6, w: 4, h: 6 },
        { i: 6, x: 0, y: 6, w: 4, h: 6 },
    ],
    sm: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 0, y: 6, w: 4, h: 6 },
        { i: 4, x: 0, y: 12, w: 4, h: 6 },
        { i: 5, x: 4, y: 12, w: 4, h: 6 },
        { i: 6, x: 4, y: 6, w: 4, h: 6 },
    ],
    xs: [
        { i: 1, x: 0, y: 0, w: 6, h: 6 },
        { i: 2, x: 0, y: 6, w: 6, h: 6 },
        { i: 3, x: 0, y: 12, w: 6, h: 6 },
        { i: 4, x: 0, y: 18, w: 6, h: 6 },
        { i: 5, x: 0, y: 30, w: 6, h: 6 },
        { i: 6, x: 0, y: 24, w: 6, h: 6 },
    ],
    xxs: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 0, y: 6, w: 4, h: 6 },
        { i: 3, x: 0, y: 12, w: 4, h: 6 },
        { i: 4, x: 0, y: 18, w: 4, h: 6 },
        { i: 5, x: 0, y: 30, w: 4, h: 6 },
        { i: 6, x: 0, y: 24, w: 4, h: 6 },
    ],
};

const initialHighBlocks = [
    { i: 1, name: 'HighchartsLineChart' },
    { i: 2, name: 'HighchartsBarChart' },
    { i: 3, name: 'HighchartsPieChart' },
    { i: 4, name: 'HighchartsPolarChart' },
    { i: 5, name: 'HighchartsAreaChart' },
    { i: 6, name: 'HighchartsBoxPlot' },
];

const PageBaseWrapper = styled.div`
    min-height: 832px;
`;

function SupportChart(props) {
    return (
        <IntroSection title={'Supports various chart'}>
            <small>
                For more charts, please see the Recharts and Highcharts menu of
                components.
            </small>
            <IntroTab labels={['Recharts', 'HighCharts']}>
                <PageBaseWrapper>
                    <PageBaseContainer
                        readonly
                        initialLayouts={initialChartLayout}
                        initialStickers={initialChartBlocks}
                    />
                </PageBaseWrapper>
                <PageBaseWrapper>
                    <PageBaseContainer
                        readonly
                        initialLayouts={initialHighLayout}
                        initialStickers={initialHighBlocks}
                    />
                </PageBaseWrapper>
            </IntroTab>
        </IntroSection>
    );
}

export default SupportChart;
