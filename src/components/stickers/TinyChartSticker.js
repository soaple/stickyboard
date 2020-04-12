import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Sticker } from '@stickyboard/core';
import { LineChart, BarChart, AreaChart } from '@stickyboard/recharts';

const lineChartData = [
    {
        index: 1,
        time: new Date('2018-03-01 00:00:00').getTime(),
        visitors: 121,
        staff: 12,
    },
    {
        index: 2,
        time: new Date('2018-03-02 00:00:00').getTime(),
        visitors: 140,
        staff: 16,
    },
    {
        index: 3,
        time: new Date('2018-03-03 00:00:00').getTime(),
        visitors: 150,
        staff: 22,
    },
    {
        index: 4,
        time: new Date('2018-03-04 00:00:00').getTime(),
        visitors: 107,
        staff: 6,
    },
    {
        index: 5,
        time: new Date('2018-03-05 00:00:00').getTime(),
        visitors: 98,
        staff: 10,
    },
    {
        index: 6,
        time: new Date('2018-03-06 00:00:00').getTime(),
        visitors: 118,
        staff: 14,
    },
    {
        index: 7,
        time: new Date('2018-03-07 00:00:00').getTime(),
        visitors: 130,
        staff: 16,
    },
    {
        index: 8,
        time: new Date('2018-03-08 00:00:00').getTime(),
        visitors: 121,
        staff: 9,
    },
    {
        index: 9,
        time: new Date('2018-03-09 00:00:00').getTime(),
        visitors: 89,
        staff: 4,
    },
    {
        index: 10,
        time: new Date('2018-03-10 00:00:00').getTime(),
        visitors: 170,
        staff: 25,
    },
    {
        index: 11,
        time: new Date('2018-03-11 00:00:00').getTime(),
        visitors: 190,
        staff: 30,
    },
];

const areaChartData = [
    { month: '2018.01', a: 250, b: 210, c: 180 },
    { month: '2018.02', a: 300, b: 198, c: 160 },
    { month: '2018.03', a: 150, b: 180, c: 250 },
    { month: '2018.04', a: 170, b: 108, c: 90 },
    { month: '2018.05', a: 180, b: 245, c: 111 },
    { month: '2018.06', a: 360, b: 190, c: 560 },
    { month: '2018.07', a: 315, b: 230, c: 140 },
];

function TinyChartSticker(props) {
    const { colors } = props;

    return (
        <Sticker>
            <Grid container spacing={2} style={{ height: '100%' }}>
                <Grid item xs={6}>
                    <LineChart
                        data={lineChartData}
                        lineType={'monotone'}
                        lineDataKey={'visitors'}
                        lineName={'Visitors'}
                        lineColor={colors[3]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <BarChart
                        data={lineChartData}
                        barDataKey={'visitors'}
                        barName={'Visitors'}
                        barColor={colors[2]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <AreaChart
                        data={areaChartData}
                        xAxisDataKey={'month'}
                        areaAttrArray={[
                            {
                                type: 'monotone',
                                dataKey: 'b',
                                stroke: colors[0],
                                fill: colors[0],
                            },
                        ]}
                    />
                </Grid>
                <Grid item xs={6}>
                    <AreaChart
                        data={areaChartData}
                        xAxisDataKey={'month'}
                        areaAttrArray={[
                            {
                                type: 'monotone',
                                dataKey: 'c',
                                stroke: colors[6],
                                fill: colors[6],
                            },
                        ]}
                    />
                </Grid>
            </Grid>
        </Sticker>
    );
}

export default TinyChartSticker;
