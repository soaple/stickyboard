import React from 'react';
import { AreaChart } from '@stickyboard/recharts';

const areaChartData = [
    { month: '2018.01', a: 250, b: 210, c: 180 },
    { month: '2018.02', a: 300, b: 198, c: 160 },
    { month: '2018.03', a: 150, b: 180, c: 250 },
    { month: '2018.04', a: 170, b: 108, c: 90 },
    { month: '2018.05', a: 180, b: 245, c: 111 },
    { month: '2018.06', a: 360, b: 190, c: 560 },
    { month: '2018.07', a: 315, b: 230, c: 140 },
];

function RechartsAreaChart(props) {
    const { colors } = props;

    return (
        <AreaChart
            data={areaChartData}
            xAxisDataKey={'month'}
            areaAttrArray={[
                {
                    type: 'monotone',
                    dataKey: 'a',
                    stackId: '1',
                    stroke: colors.colorArray[7],
                    fill: colors.colorArray[7],
                },
                {
                    type: 'monotone',
                    dataKey: 'b',
                    stackId: '1',
                    stroke: colors.colorArray[9],
                    fill: colors.colorArray[9],
                },
                {
                    type: 'monotone',
                    dataKey: 'c',
                    stackId: '1',
                    stroke: colors.colorArray[3],
                    fill: colors.colorArray[3],
                },
            ]}
        />
    );
}

export default RechartsAreaChart;
