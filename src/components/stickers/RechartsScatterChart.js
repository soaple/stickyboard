import React from 'react';
import { ScatterChart } from '@stickyboard/recharts';

const scatterChartData = [
    { tall: 170, weight: 67 },
    { tall: 178, weight: 80 },
    { tall: 172, weight: 56 },
    { tall: 167, weight: 64 },
    { tall: 180, weight: 72 },
    { tall: 176, weight: 75 },
    { tall: 158, weight: 53 },
    { tall: 159, weight: 48 },
    { tall: 163, weight: 49 },
    { tall: 167, weight: 60 },
    { tall: 176, weight: 63 },
];

function RechartsScatterChart(props) {
    const { colors } = props;

    return (
        <ScatterChart
            data={scatterChartData}
            xAxisAttr={{
                dataKey: 'tall',
                type: 'number',
                name: 'tall',
                unit: 'cm',
                domain: ['auto', 'auto'],
            }}
            yAxisAttr={{
                dataKey: 'weight',
                type: 'number',
                name: 'weight',
                unit: 'kg',
                domain: ['auto', 'auto'],
            }}
            scatterName={'tall and weight'}
            scatterColor={colors[1]}
        />
    );
}

export default RechartsScatterChart;
