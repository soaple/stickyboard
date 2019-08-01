// src/components/page/ComponentHighchartsPage.js

import React from 'react'
import PropTypes from 'prop-types';

import _ from 'underscore'

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { teal, deepPurple, indigo, blue, blueGrey, green, lightGreen, red,
    pink, deepOrange, cyan } from '@material-ui/core/colors';

import {Responsive, WidthProvider} from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import { Highcharts, PolarChart, TreeMap, StreamGraph, BoxPlot
} from '@stickyboard/highcharts';

import StickyBoardColors from '../../theme/StickyBoardColors';
import Const from '../../constants/Const';

import DateUtil from '../../utils/DateUtil';

require('react-grid-layout/css/styles.css');
require('react-resizable/css/styles.css');
require('../../static/css/react-grid-layout.css');

const styles = theme => ({
    root: {
        padding: theme.spacing(2),
        overflow: 'auto',
    },
    chart: {
        height: 280,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: -theme.spacing(4),
    }
});

const lineChartData = [
    {
        index: 1,
        time: new Date('2018-03-01 00:00:00').getTime(),
        visitors: 121,
    }, {
        index: 2,
        time: new Date('2018-03-02 00:00:00').getTime(),
        visitors: 140,
    }, {
        index: 3,
        time: new Date('2018-03-03 00:00:00').getTime(),
        visitors: 150,
    }, {
        index: 4,
        time: new Date('2018-03-04 00:00:00').getTime(),
        visitors: 107,
    }, {
        index: 5,
        time: new Date('2018-03-05 00:00:00').getTime(),
        visitors: 98,
    }, {
        index: 6,
        time: new Date('2018-03-06 00:00:00').getTime(),
        visitors: 118,
    }, {
        index: 7,
        time: new Date('2018-03-07 00:00:00').getTime(),
        visitors: 130,
    }, {
        index: 8,
        time: new Date('2018-03-08 00:00:00').getTime(),
        visitors: 121,
    }, {
        index: 9,
        time: new Date('2018-03-09 00:00:00').getTime(),
        visitors: 89,
    }, {
        index: 10,
        time: new Date('2018-03-10 00:00:00').getTime(),
        visitors: 170,
    }, {
        index: 11,
        time: new Date('2018-03-11 00:00:00').getTime(),
        visitors: 190,
    }
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
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
];

const areaChartData = [
      {month: '2018.01', a: 250, b: 210, c: 180},
      {month: '2018.02', a: 300, b: 198, c: 160},
      {month: '2018.03', a: 150, b: 180, c: 250},
      {month: '2018.04', a: 170, b: 108, c: 90},
      {month: '2018.05', a: 180, b: 245, c: 111},
      {month: '2018.06', a: 360, b: 190, c: 560},
      {month: '2018.07', a: 315, b: 230, c: 140},
];

const scatterChartData = [
    {tall: 170, weight: 67},
    {tall: 178, weight: 80},
    {tall: 172, weight: 56},
    {tall: 167, weight: 64},
    {tall: 180, weight: 72},
    {tall: 176, weight: 75},
    {tall: 158, weight: 53},
    {tall: 159, weight: 48},
    {tall: 163, weight: 49},
    {tall: 167, weight: 60},
    {tall: 176, weight: 63},
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
    }
];

const getPercent = (value, total) => {
	const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
	return `${(decimal * 100).toFixed(fixed)}%`;
};

const CustomizedTreeMapContent = (props) => {
    const { root, depth, x, y, width, height, index, payload, colors, rank, name } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'none',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {
                depth === 1 ?
                <text
                x={x + width / 2}
                y={y + height / 2 + 7}
                textAnchor="middle"
                fill="#fff"
                fontSize={14}
                >
                {name}
                </text>
                : null
            }
            {
                depth === 1 ?
                <text
                x={x + 4}
                y={y + 18}
                fill="#fff"
                fontSize={16}
                fillOpacity={0.9}
                >
                {index + 1}
                </text>
                : null
            }
        </g>
    );
}

const RADIAN = Math.PI / 180;

class ComponentHighchartsPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            // React Grid Layout
            currentBreakpoint: 'lg',
            layouts: {
                lg: [{"i":"LineChart","x":0,"y":0,"w":4,"h":6},{"i":"BarChart","x":4,"y":0,"w":4,"h":6},{"i":"PieChart","x":8,"y":0,"w":4,"h":6},{"i":"PolarChart","x":4,"y":6,"w":4,"h":6},{"i":"BoxPlot","x":0,"y":6,"w":4,"h":6},{"i":"AreaChart","x":8,"y":6,"w":4,"h":6},{"i":"ScatterChart","x":0,"y":12,"w":4,"h":6},{"i":"TreeMap","x":4,"y":12,"w":4,"h":6},{"i":"StreamGraph","x":8,"y":12,"w":4,"h":6}],
                md: [{"i":"LineChart","x":0,"y":0,"w":4,"h":6},{"i":"BarChart","x":4,"y":0,"w":4,"h":6},{"i":"PieChart","x":8,"y":0,"w":4,"h":6},{"i":"PolarChart","x":4,"y":6,"w":4,"h":6},{"i":"BoxPlot","x":0,"y":6,"w":4,"h":6},{"i":"AreaChart","x":8,"y":6,"w":4,"h":6},{"i":"ScatterChart","x":0,"y":12,"w":4,"h":6},{"i":"TreeMap","x":4,"y":12,"w":4,"h":6},{"i":"StreamGraph","x":8,"y":12,"w":4,"h":6}],
                sm: [{"i":"LineChart","x":0,"y":0,"w":4,"h":6},{"i":"BarChart","x":4,"y":0,"w":4,"h":6},{"i":"PieChart","x":0,"y":6,"w":4,"h":6},{"i":"PolarChart","x":0,"y":12,"w":4,"h":6},{"i":"AreaChart","x":4,"y":12,"w":4,"h":6},{"i":"ScatterChart","x":0,"y":18,"w":4,"h":6},{"i":"TreeMap","x":4,"y":18,"w":4,"h":6},{"i":"StreamGraph","x":0,"y":24,"w":8,"h":6},{"i":"BoxPlot","x":4,"y":6,"w":4,"h":6}],
                xs: [{"i":"LineChart","x":0,"y":0,"w":6,"h":6},{"i":"BarChart","x":0,"y":6,"w":6,"h":6},{"i":"PieChart","x":0,"y":12,"w":6,"h":6},{"i":"PolarChart","x":0,"y":18,"w":6,"h":6},{"i":"AreaChart","x":0,"y":30,"w":6,"h":6},{"i":"ScatterChart","x":0,"y":36,"w":6,"h":6},{"i":"TreeMap","x":0,"y":42,"w":6,"h":6},{"i":"StreamGraph","x":0,"y":48,"w":6,"h":6},{"i":"BoxPlot","x":0,"y":24,"w":6,"h":6}],
                xxs: [{"i":"LineChart","x":0,"y":0,"w":4,"h":6},{"i":"BarChart","x":0,"y":6,"w":4,"h":6},{"i":"PieChart","x":0,"y":12,"w":4,"h":6},{"i":"PolarChart","x":0,"y":18,"w":4,"h":6},{"i":"AreaChart","x":0,"y":30,"w":4,"h":6},{"i":"ScatterChart","x":0,"y":36,"w":4,"h":6},{"i":"TreeMap","x":0,"y":42,"w":4,"h":6},{"i":"StreamGraph","x":0,"y":48,"w":4,"h":6},{"i":"BoxPlot","x":0,"y":24,"w":4,"h":6}],
            },
            blocks: [{"i":"LineChart"},{"i":"BarChart"},{"i":"PieChart"},{"i":"PolarChart"},{"i":"AreaChart"},{"i":"ScatterChart"},{"i":"TreeMap"},{"i":"StreamGraph"},{"i":"BoxPlot"}],
            layoutUpdateFlag: true,
            isEditingMode: true,
            // Data
            data: [],
            // Chart scaling
            left : 0,
            right : 0,
            animation: true,
        }
    }

    componentDidMount () {
    }

    toggleEditingMode = () => {
        let currentEditingMode = this.state.isEditingMode;

        let layouts = this.getLayouts(!currentEditingMode);
        this.setState({
            layouts: {},
            layoutUpdateFlag: false,
            isEditingMode: !currentEditingMode,
        }, () => {
            this.setState({
                layouts: layouts,
                layoutUpdateFlag: true,
            })
        });
    }

    getLayouts = (isEditingMode) => {
        let layouts = this.state.layouts;
        _.each(layouts, (layout) => {
            layout.forEach((block) => {
                block.static = !isEditingMode;
                block.isDraggable = isEditingMode;
                block.isResizable = isEditingMode;
                block.minW = 3;
                block.maxW = 12;
                block.minH = 4;
                block.maxH = 16;
            });
        });

        return layouts;
    }

    onBreakpointChange = (breakpoint) => {
        // console.log('onBreakpointChange', breakpoint);

        this.setState({
            currentBreakpoint: breakpoint,
            isEditingMode: breakpoint === 'lg' || breakpoint === 'md',
        });
    }

    onLayoutChange = (currentLayout, allLayouts) => {
        // console.log('onLayoutChange', currentLayout, allLayouts);

        if (this.state.layoutUpdateFlag) {
            this.setState({
                layouts: allLayouts,
            }, () => {
                // Generate tiny layout for saving to the server
                let newLayouts = {};

                let breakpoints = _.keys(allLayouts);
                _.each(breakpoints, (breakpoint) => {
                    let newLayout = [];
                    let layout = allLayouts[breakpoint];
                    _.each(layout, (block) => {
                        let newBlock = {};
                        newBlock.i = block.i;
                        newBlock.x = block.x;
                        newBlock.y = block.y;
                        newBlock.w = block.w;
                        newBlock.h = block.h;

                        newLayout.push(newBlock);
                    });

                    newLayouts[breakpoint] = newLayout;
                });

                // console.log(newLayouts);
                // console.log(JSON.stringify(newLayouts[this.state.currentBreakpoint]));

                // TODO: Save the user's personal layout
                // console.log(JSON.stringify(newLayouts));

                // Save the user's personal layout
                // ApiManager.updateAdminLayout(
                //     CookieManager.getCookie('adminId'),
                //     this.props.location.pathname,
                //     JSON.stringify(newLayouts),
                //     this.createAdminLayoutCallback);
            });
        }
    }

    generateBlock = (block) => {
        let COLORS = StickyBoardColors.colorArray;

        switch (block.i) {
        case 'LineChart':
            return (
                <Paper key={block.i}>
                    <Highcharts
                        chartType={'line'}
                        title={'Line Chart'}
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        yAxisDataKey={'visitors'} />
                </Paper>
            )
        case 'BarChart':
            return (
                <Paper key={block.i}>
                    <Highcharts
                        chartType={'bar'}
                        title={'Bar Chart'}
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        yAxisDataKey={'visitors'} />
                </Paper>
            )
        case 'PieChart':
            return (
                <Paper key={block.i}>
                    <Highcharts
                        chartType={'pie'}
                        title={'Pie Chart'}
                        data={pieChartData}
                        xAxisDataKey={'name'}
                        yAxisDataKey={'value'} />
                </Paper>
            )
        case 'PolarChart':
            return (
                <Paper key={block.i}>
                    <PolarChart
                        chartType={'polar'}
                        title={'Polar Chart'}
                        data={pieChartData}
                        xAxisDataKey={'name'}
                        yAxisDataKey={'value'}
                        seriesType={'area'} />
                </Paper>
            )
        case 'AreaChart':
            return (
                <Paper key={block.i}>
                    <Highcharts
                        chartType={'area'}
                        title={'Area Chart'}
                        data={pieChartData}
                        xAxisDataKey={'name'}
                        yAxisDataKey={'value'} />
                </Paper>
            )
        case 'ScatterChart':
            return (
                <Paper key={block.i}>
                    <Highcharts
                        chartType={'scatter'}
                        title={'Scatter Chart'}
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        yAxisDataKey={'visitors'} />
                </Paper>
            )
        case 'TreeMap':
            return (
                <Paper key={block.i}>
                    <TreeMap
                        title={'Tree Map'}
                        data={lineChartData} />
                </Paper>
            )
        case 'StreamGraph':
            return (
                <Paper key={block.i}>
                    <StreamGraph
                        title={'Stream Graph'}
                        data={lineChartData} />
                </Paper>
            )
        case 'BoxPlot':
            return (
                <Paper key={block.i}>
                    <BoxPlot
                        title={'Box Plot'}
                        data={lineChartData} />
                </Paper>
            )
        }
    }

    render () {
        const { classes, theme } = this.props

        return (
            <div className={classes.root}>
                {/* Components */}
                <ResponsiveReactGridLayout
                    {...Const.RGL_LAYOUT_PROPS}
                    layouts={this.getLayouts(this.state.isEditingMode)}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}>
                    {this.state.blocks.map((block, index) => {
                        return this.generateBlock(block, classes)
                    })}
                </ResponsiveReactGridLayout>
            </div>
        )
    }
}

ComponentHighchartsPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComponentHighchartsPage);
