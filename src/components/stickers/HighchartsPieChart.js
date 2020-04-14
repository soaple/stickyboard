import React from 'react';
import { Highcharts } from '@stickyboard/highcharts';

const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

function HighchartsPieChart(props) {
    const { colors } = props;

    return (
        <Highcharts
            chartType={'pie'}
            title={'Pie Chart'}
            data={pieChartData}
            xAxisDataKey={'name'}
            yAxisDataKey={'value'}
        />
    );
}

export default HighchartsPieChart;
