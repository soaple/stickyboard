import React from 'react';
import { LineChart } from '@stickyboard/recharts';

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

function RechartsLineChart(props) {
    const { colors } = props;

    return (
        <LineChart
            data={lineChartData}
            xAxisDataKey={'time'}
            lineType={'linear'}
            lineDataKey={'visitors'}
            lineName={'Visitors'}
            lineColor={colors[0]}
        />
    );
}

export default RechartsLineChart;
