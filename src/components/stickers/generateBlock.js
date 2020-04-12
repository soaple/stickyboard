import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Sticker } from '@stickyboard/core';
import {
    LineChart,
    MultiLineChart,
    BarChart,
    StackedBarChart,
    ComposedChart,
    PieChart,
    RadarChart,
    AreaChart,
    ScatterChart,
    Treemap,
} from '@stickyboard/recharts';

// import LineChartSticker from './LineChartSticker';
// import BarChartSticker from './BarChartSticker';
// import ComposedChartSticker from './ComposedChartSticker';
// import MultiLineChartSticker from './MultiLineChartSticker';
// import PieChartSticker from './PieChartSticker';
// import AreaChartSticker from './AreaChartSticker';
// import RadarChartSticker from './RadarChartSticker';
// import ScatterChartSticker from './ScatterChartSticker';
// import TinyChartSticker from './TinyChartSticker';
// import TreeMapSticker from './TreeMapSticker';
// import StackedBarChartSticker from './StackedBarChartSticker';

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

const radarChartData = [
    { subject: 'Math', A: 120, B: 70, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 60, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const pieChartData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
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

const treeMapData = [
    {
        name: 'axis',
        children: [
            { name: 'Axes', size: 1302 },
            { name: 'Axis', size: 24593 },
            { name: 'AxisGridLine', size: 652 },
            { name: 'AxisLabel', size: 636 },
            { name: 'CartesianAxes', size: 6703 },
        ],
    },
    {
        name: 'controls',
        children: [
            { name: 'AnchorControl', size: 2138 },
            { name: 'ClickControl', size: 3824 },
            { name: 'Control', size: 1353 },
            { name: 'ControlList', size: 4665 },
            { name: 'DragControl', size: 2649 },
            { name: 'ExpandControl', size: 2832 },
            { name: 'HoverControl', size: 4896 },
            { name: 'IControl', size: 763 },
            { name: 'PanZoomControl', size: 5222 },
            { name: 'SelectionControl', size: 7862 },
            { name: 'TooltipControl', size: 8435 },
        ],
    },
    {
        name: 'data',
        children: [
            { name: 'Data', size: 20544 },
            { name: 'DataList', size: 19788 },
            { name: 'DataSprite', size: 10349 },
            { name: 'EdgeSprite', size: 3301 },
            { name: 'NodeSprite', size: 19382 },
            {
                name: 'render',
                children: [
                    { name: 'ArrowType', size: 698 },
                    { name: 'EdgeRenderer', size: 5569 },
                    { name: 'IRenderer', size: 353 },
                    { name: 'ShapeRenderer', size: 2247 },
                ],
            },
            { name: 'ScaleBinding', size: 11275 },
            { name: 'Tree', size: 7147 },
            { name: 'TreeBuilder', size: 9930 },
        ],
    },
    {
        name: 'events',
        children: [
            { name: 'DataEvent', size: 7313 },
            { name: 'SelectionEvent', size: 6880 },
            { name: 'TooltipEvent', size: 3701 },
            { name: 'VisualizationEvent', size: 2117 },
        ],
    },
    {
        name: 'legend',
        children: [
            { name: 'Legend', size: 20859 },
            { name: 'LegendItem', size: 4614 },
            { name: 'LegendRange', size: 10530 },
        ],
    },
    {
        name: 'operator',
        children: [
            {
                name: 'distortion',
                children: [
                    { name: 'BifocalDistortion', size: 4461 },
                    { name: 'Distortion', size: 6314 },
                    { name: 'FisheyeDistortion', size: 3444 },
                ],
            },
            {
                name: 'encoder',
                children: [
                    { name: 'ColorEncoder', size: 3179 },
                    { name: 'Encoder', size: 4060 },
                    { name: 'PropertyEncoder', size: 4138 },
                    { name: 'ShapeEncoder', size: 1690 },
                    { name: 'SizeEncoder', size: 1830 },
                ],
            },
            {
                name: 'filter',
                children: [
                    { name: 'FisheyeTreeFilter', size: 5219 },
                    { name: 'GraphDistanceFilter', size: 3165 },
                    { name: 'VisibilityFilter', size: 3509 },
                ],
            },
            { name: 'IOperator', size: 1286 },
            {
                name: 'label',
                children: [
                    { name: 'Labeler', size: 9956 },
                    { name: 'RadialLabeler', size: 3899 },
                    { name: 'StackedAreaLabeler', size: 3202 },
                ],
            },
            {
                name: 'layout',
                children: [
                    { name: 'AxisLayout', size: 6725 },
                    { name: 'BundledEdgeRouter', size: 3727 },
                    { name: 'CircleLayout', size: 9317 },
                    { name: 'CirclePackingLayout', size: 12003 },
                    { name: 'DendrogramLayout', size: 4853 },
                    { name: 'ForceDirectedLayout', size: 8411 },
                    { name: 'IcicleTreeLayout', size: 4864 },
                    { name: 'IndentedTreeLayout', size: 3174 },
                    { name: 'Layout', size: 7881 },
                    { name: 'NodeLinkTreeLayout', size: 12870 },
                    { name: 'PieLayout', size: 2728 },
                    { name: 'RadialTreeLayout', size: 12348 },
                    { name: 'RandomLayout', size: 870 },
                    { name: 'StackedAreaLayout', size: 9121 },
                    { name: 'TreeMapLayout', size: 9191 },
                ],
            },
            { name: 'Operator', size: 2490 },
            { name: 'OperatorList', size: 5248 },
            { name: 'OperatorSequence', size: 4190 },
            { name: 'OperatorSwitch', size: 2581 },
            { name: 'SortOperator', size: 2023 },
        ],
    },
];

const generateBlock = (colors, block) => {
    switch (block.i) {
        case 'LineChart':
            return (
                <Sticker key={block.i}>
                    <LineChart
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        lineType={'linear'}
                        lineDataKey={'visitors'}
                        lineName={'Visitors'}
                        lineColor={colors[0]}
                    />
                </Sticker>
            );
        case 'MultiLineChart':
            return (
                <Sticker key={block.i}>
                    <MultiLineChart
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        lineType={'linear'}
                        lineDataArray={[
                            {
                                key: 'visitors',
                                name: 'Visitors',
                                color: colors[1],
                            },
                            {
                                key: 'staff',
                                name: 'Staff',
                                color: colors[2],
                            },
                        ]}
                    />
                </Sticker>
            );
        case 'BarChart':
            return (
                <Sticker key={block.i}>
                    <BarChart
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        barDataKey={'visitors'}
                        barName={'Visitors'}
                        barColor={colors[1]}
                    />
                </Sticker>
            );
        case 'StackedBarChart':
            return (
                <Sticker key={block.i}>
                    <StackedBarChart
                        data={lineChartData}
                        showBarLabel={false}
                        showTotalSumLabel={false}
                        xAxisDataKey={'time'}
                        barDataArray={[
                            {
                                key: 'visitors',
                                name: 'Visitors',
                                color: colors[0],
                            },
                            {
                                key: 'staff',
                                name: 'Staff',
                                color: colors[1],
                            },
                        ]}
                    />
                </Sticker>
            );
        case 'ComposedChart':
            return (
                <Sticker key={block.i}>
                    <ComposedChart
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        barDataKey={'visitors'}
                        barName={'Visitors'}
                        barColor={colors[2]}
                        lineType={'linear'}
                        lineDataKey={'visitors'}
                        lineName={'Visitors'}
                        lineColor={colors[3]}
                    />
                </Sticker>
            );
        case 'PieChart':
            return (
                <Sticker key={block.i}>
                    <PieChart data={pieChartData} colorArray={colors} />
                </Sticker>
            );
        case 'RadarChart':
            return (
                <Sticker key={block.i}>
                    <RadarChart
                        data={radarChartData}
                        polarAngleAxisKey={'subject'}
                        radarAttrArray={[
                            {
                                name: 'Mike',
                                dataKey: 'A',
                                stroke: '#ffed00',
                                fill: colors[4],
                            },
                            {
                                name: 'Lily',
                                dataKey: 'B',
                                stroke: '#66d522',
                                fill: colors[5],
                            },
                        ]}
                    />
                </Sticker>
            );
        case 'AreaChart':
            return (
                <Sticker key={block.i}>
                    <AreaChart
                        data={areaChartData}
                        xAxisDataKey={'month'}
                        areaAttrArray={[
                            {
                                type: 'monotone',
                                dataKey: 'a',
                                stackId: '1',
                                stroke: colors[7],
                                fill: colors[7],
                            },
                            {
                                type: 'monotone',
                                dataKey: 'b',
                                stackId: '1',
                                stroke: colors[9],
                                fill: colors[9],
                            },
                            {
                                type: 'monotone',
                                dataKey: 'c',
                                stackId: '1',
                                stroke: colors[3],
                                fill: colors[3],
                            },
                        ]}
                    />
                </Sticker>
            );
        case 'ScatterChart':
            return (
                <Sticker key={block.i}>
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
                </Sticker>
            );
        case 'TreeMap':
            return (
                <Sticker key={block.i}>
                    <Treemap
                        isAnimationActive={false}
                        data={treeMapData}
                        dataKey="size"
                        ratio={4 / 3}
                        stroke="#fff"
                        fill="#787878"
                        colorArray={colors}
                    />
                </Sticker>
            );
        case 'TinyChart':
            return (
                <Sticker key={block.i}>
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
};

export default generateBlock;
