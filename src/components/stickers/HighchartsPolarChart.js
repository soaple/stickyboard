import React from 'react';
import { PolarChart } from '@stickyboard/highcharts';

const pieChartData = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
];

function HighchartsPolarChart(props) {
    const { colors } = props;

    return (
        <PolarChart
            chartType={'polar'}
            title={'Polar Chart'}
            data={pieChartData}
            xAxisDataKey={'name'}
            yAxisDataKey={'value'}
            seriesType={'area'} />
    );
}

export default HighchartsPolarChart;
