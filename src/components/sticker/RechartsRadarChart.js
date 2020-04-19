import React from 'react';
import { RadarChart } from '@stickyboard/recharts';

const radarChartData = [
    { subject: 'Math', A: 120, B: 70, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 60, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

function RechartsRadarChart(props) {
    const { colors } = props;

    return (
        <RadarChart
            data={radarChartData}
            polarAngleAxisKey={'subject'}
            radarAttrArray={[
                {
                    name: 'Mike',
                    dataKey: 'A',
                    stroke: '#ffed00',
                    fill: colors.colorArray[4],
                },
                {
                    name: 'Lily',
                    dataKey: 'B',
                    stroke: '#66d522',
                    fill: colors.colorArray[5],
                },
            ]}
        />
    );
}

export default RechartsRadarChart;
