import React from 'react';
import { Sticker } from '@stickyboard/core';
import { PieChart } from '@stickyboard/recharts';

const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

function PieChartSticker(props) {
    const { colors } = props;

    return (
        <Sticker>
            <PieChart data={pieChartData} colorArray={colors} />
        </Sticker>
    );
}

export default PieChartSticker;
