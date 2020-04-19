import React from 'react';
import { BoxPlot } from '@stickyboard/highcharts';

const lineChartData = [
    {
        index: 1,
        time: new Date('2018-03-01 00:00:00').getTime(),
        visitors: 121,
    },
    {
        index: 2,
        time: new Date('2018-03-02 00:00:00').getTime(),
        visitors: 140,
    },
    {
        index: 3,
        time: new Date('2018-03-03 00:00:00').getTime(),
        visitors: 150,
    },
    {
        index: 4,
        time: new Date('2018-03-04 00:00:00').getTime(),
        visitors: 107,
    },
    {
        index: 5,
        time: new Date('2018-03-05 00:00:00').getTime(),
        visitors: 98,
    },
    {
        index: 6,
        time: new Date('2018-03-06 00:00:00').getTime(),
        visitors: 118,
    },
    {
        index: 7,
        time: new Date('2018-03-07 00:00:00').getTime(),
        visitors: 130,
    },
    {
        index: 8,
        time: new Date('2018-03-08 00:00:00').getTime(),
        visitors: 121,
    },
    {
        index: 9,
        time: new Date('2018-03-09 00:00:00').getTime(),
        visitors: 89,
    },
    {
        index: 10,
        time: new Date('2018-03-10 00:00:00').getTime(),
        visitors: 170,
    },
    {
        index: 11,
        time: new Date('2018-03-11 00:00:00').getTime(),
        visitors: 190,
    },
];

function HighchartsBoxPlot(props) {
    const { colors } = props;

    return <BoxPlot title={'Box Plot'} data={lineChartData} />;
}

export default HighchartsBoxPlot;
