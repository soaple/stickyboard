import React from 'react';
import { PieChart } from '@stickyboard/recharts';

const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

function RechartsPieChart(props) {
    const { colors } = props;

    return <PieChart data={pieChartData} colorArray={colors} />;
}

export default RechartsPieChart;
