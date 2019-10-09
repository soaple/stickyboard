// src/components/page/ComponentChartsPage.js

import React from 'react'
import PropTypes from 'prop-types';

import _ from 'underscore'

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

import EditIcon from '@material-ui/icons/Edit';
import TvIcon from '@material-ui/icons/Tv';

import { Sticker, Board } from '@stickyboard/core';
import { LineChart, BarChart, ComposedChart,
    PieChart, RadarChart, AreaChart,
    ScatterChart, Treemap
} from '@stickyboard/recharts';

import ApiManager from 'network/ApiManager';
import StatusCode from 'network/StatusCode';
import CookieManager from 'network/CookieManager';

import {
    showMessageSnackbar,
    hideMessageSnackbar,
} from '../../redux/actions/actions'

import StickyBoardColors from '../../theme/StickyBoardColors';
import Const from '../../constants/Const';

import DateUtil from '../../utils/DateUtil';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        height: 120,
        right: 16,
        bottom: 16,
        zIndex: 2000,
    },
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

const initialLayout = [
    {
        checked: true,
        blockId: 'LineChart',
        x: 0,
        y: 0,
        w: 4,
        h: 6,
    },
    {
        checked: true,
        blockId: 'BarChart',
        x: 4,
        y: 0,
        w: 4,
        h: 6,
    },
    {
        checked: true,
        blockId: 'ComposedChart',
        x: 8,
        y: 0,
        w: 4,
        h: 6,
    },
    {
        checked: true,
        blockId: 'PieChart',
        x: 0,
        y: 6,
        w: 4,
        h: 6,
    },
    {
        checked: true,
        blockId: 'RadarChart',
        x: 4,
        y: 6,
        w: 4,
        h: 6,
    },
    {
        checked: true,
        blockId: 'AreaChart',
        x: 8,
        y: 6,
        w: 4,
        h: 6,
    },
    {
        checked: true,
        blockId: 'ScatterChart',
        x: 0,
        y: 12,
        w: 4,
        h: 6,
    },
    {
        checked: true,
        blockId: 'TreeMap',
        x: 4,
        y: 12,
        w: 4,
        h: 6,
    },
    {
        checked: true,
        blockId: 'TinyChart',
        x: 8,
        y: 12,
        w: 4,
        h: 6,
    },
];

class ComponentChartsPage extends React.Component {
    constructor (props) {
        super(props);
        this.board = React.createRef();

        var endDate = new Date()
        var startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000)

        this.state = {
            // React Grid Layout
            currentBreakpoint: 'lg',
            layouts: {
                lg: [{"i":"LineChart","x":0,"y":0,"w":4,"h":6},{"i":"BarChart","x":4,"y":0,"w":4,"h":6},{"i":"ComposedChart","x":8,"y":0,"w":4,"h":6},{"i":"RadarChart","x":4,"y":6,"w":4,"h":6},{"i":"PieChart","x":0,"y":6,"w":4,"h":6},{"i":"AreaChart","x":8,"y":6,"w":4,"h":6},{"i":"ScatterChart","x":0,"y":12,"w":4,"h":6},{"i":"TreeMap","x":4,"y":12,"w":4,"h":6},{"i":"TinyChart","x":8,"y":12,"w":4,"h":6}],
                md: [{"i":"LineChart","x":0,"y":0,"w":4,"h":6},{"i":"BarChart","x":4,"y":0,"w":4,"h":6},{"i":"ComposedChart","x":8,"y":0,"w":4,"h":6},{"i":"RadarChart","x":4,"y":6,"w":4,"h":6},{"i":"PieChart","x":0,"y":6,"w":4,"h":6},{"i":"AreaChart","x":8,"y":6,"w":4,"h":6},{"i":"ScatterChart","x":0,"y":12,"w":4,"h":6},{"i":"TreeMap","x":4,"y":12,"w":4,"h":6},{"i":"TinyChart","x":8,"y":12,"w":4,"h":6}],
                sm: [{"i":"LineChart","x":0,"y":0,"w":4,"h":6},{"i":"BarChart","x":4,"y":0,"w":4,"h":6},{"i":"ComposedChart","x":0,"y":6,"w":4,"h":6},{"i":"RadarChart","x":0,"y":12,"w":4,"h":6},{"i":"PieChart","x":4,"y":6,"w":4,"h":6},{"i":"AreaChart","x":4,"y":12,"w":4,"h":6},{"i":"ScatterChart","x":0,"y":18,"w":4,"h":6},{"i":"TreeMap","x":4,"y":18,"w":4,"h":6},{"i":"TinyChart","x":0,"y":24,"w":8,"h":9}],
                xs: [{"i":"LineChart","x":0,"y":0,"w":6,"h":6},{"i":"BarChart","x":0,"y":6,"w":6,"h":6},{"i":"ComposedChart","x":0,"y":12,"w":6,"h":6},{"i":"RadarChart","x":0,"y":24,"w":6,"h":6},{"i":"PieChart","x":0,"y":18,"w":6,"h":6},{"i":"AreaChart","x":0,"y":30,"w":6,"h":6},{"i":"ScatterChart","x":0,"y":36,"w":6,"h":6},{"i":"TreeMap","x":0,"y":42,"w":6,"h":6},{"i":"TinyChart","x":0,"y":48,"w":6,"h":6}],
                xxs: [{"i":"LineChart","x":0,"y":0,"w":4,"h":6},{"i":"BarChart","x":0,"y":6,"w":4,"h":6},{"i":"ComposedChart","x":0,"y":12,"w":4,"h":6},{"i":"RadarChart","x":0,"y":24,"w":4,"h":6},{"i":"PieChart","x":0,"y":18,"w":4,"h":6},{"i":"AreaChart","x":0,"y":30,"w":4,"h":6},{"i":"ScatterChart","x":0,"y":36,"w":4,"h":6},{"i":"TreeMap","x":0,"y":42,"w":4,"h":6},{"i":"TinyChart","x":0,"y":48,"w":4,"h":6}],
            },
            blocks: [{"i":"LineChart"},{"i":"BarChart"},{"i":"ComposedChart"},{"i":"RadarChart"},{"i":"PieChart"},{"i":"AreaChart"},{"i":"ScatterChart"},{"i":"TreeMap"},{"i":"TinyChart"}],
            isEditingMode: true,
            // Data
            data: [],
            // Chart scaling
            left : 0,
            right : 0,
            animation: true,
        }
    }

    onSaveLayout = () => {
        console.log('onSaveLayout', this.state.layouts);
        ApiManager.updateUserLayout(
            CookieManager.getCookie('userId'),
            window.location.pathname,
            JSON.stringify(this.state.layouts));
    }

    generateBlock = (block) => {
        let COLORS = StickyBoardColors.colorArray;

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
                        lineColor={COLORS[0]} />
                </Sticker>
            )
        case 'BarChart':
            return (
                <Sticker key={block.i}>
                    <BarChart
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        barDataKey={'visitors'}
                        barName={'Visitors'}
                        barColor={COLORS[1]} />
                </Sticker>
            )
        case 'ComposedChart':
            return (
                <Sticker key={block.i}>
                    <ComposedChart
                        data={lineChartData}
                        xAxisDataKey={'time'}
                        barDataKey={'visitors'}
                        barName={'Visitors'}
                        barColor={COLORS[2]}
                        lineType={'linear'}
                        lineDataKey={'visitors'}
                        lineName={'Visitors'}
                        lineColor={COLORS[3]} />
                </Sticker>
            )
        case 'PieChart':
            return (
                <Sticker key={block.i}>
                    <PieChart
                        data={pieChartData}
                        colorArray={COLORS} />
                </Sticker>
            )
        case 'RadarChart':
            return (
                <Sticker key={block.i}>
                    <RadarChart
                        data={radarChartData}
                        polarAngleAxisKey={'subject'}
                        radarAttrArray={[
                            { name: 'Mike', dataKey: 'A', stroke: '#ffed00', fill: COLORS[4] },
                            { name: 'Lily', dataKey: 'B', stroke: '#66d522', fill: COLORS[5] },
                        ]} />
                </Sticker>
            )
        case 'AreaChart':
            return (
                <Sticker key={block.i}>
                    <AreaChart
                        data={areaChartData}
                        xAxisDataKey={'month'}
                        areaAttrArray={[
                            { type: 'monotone', dataKey: 'a', stackId: '1', stroke: COLORS[7], fill: COLORS[7] },
                            { type: 'monotone', dataKey: 'b', stackId: '1', stroke: COLORS[9], fill: COLORS[9] },
                            { type: 'monotone', dataKey: 'c', stackId: '1', stroke: COLORS[3], fill: COLORS[3] },
                        ]} />
                </Sticker>
            )
        case 'ScatterChart':
            return (
                <Sticker key={block.i}>
                    <ScatterChart
                        data={scatterChartData}
                        xAxisAttr={{ dataKey: 'tall', type: 'number', name: 'tall', unit: 'cm', domain: ['auto', 'auto'] }}
                        yAxisAttr={{ dataKey: 'weight', type: 'number', name: 'weight', unit: 'kg', domain: ['auto', 'auto'] }}
                        scatterName={'tall and weight'}
                        scatterColor={COLORS[1]} />
                </Sticker>
            )
        case 'TreeMap':
            return (
                <Sticker key={block.i}>
                    <Treemap
                        isAnimationActive={false}
                        data={treeMapData}
                        dataKey="size"
                        ratio={4/3}
                        stroke="#fff"
                        fill="#787878"
                        colorArray={COLORS} />
                </Sticker>
            )
        case 'TinyChart':
            return (
                <Sticker key={block.i}>
                    <Grid container spacing={8}
                        style={{height: '100%', padding: 20}}>
                        <Grid item xs={6} style={{height: '50%'}}>
                            <LineChart
                                data={lineChartData}
                                lineType={'monotone'}
                                lineDataKey={'visitors'}
                                lineName={'Visitors'}
                                lineColor={COLORS[3]} />
                        </Grid>
                        <Grid item xs={6} style={{height: '50%'}}>
                            <BarChart
                                data={lineChartData}
                                barDataKey={'visitors'}
                                barName={'Visitors'}
                                barColor={COLORS[2]} />
                        </Grid>
                        <Grid item xs={6} style={{height: '50%'}}>
                            <AreaChart
                                data={areaChartData}
                                xAxisDataKey={'month'}
                                areaAttrArray={[
                                    { type: 'monotone', dataKey: 'b', stroke: COLORS[0], fill: COLORS[0] },
                                ]} />
                        </Grid>
                        <Grid item xs={6} style={{height: '50%'}}>
                            <AreaChart
                                data={areaChartData}
                                xAxisDataKey={'month'}
                                areaAttrArray={[
                                    { type: 'monotone', dataKey: 'c', stroke: COLORS[6], fill: COLORS[6] },
                                ]} />
                        </Grid>
                    </Grid>
                </Sticker>
            )
        }
    }

    render () {
        const { layouts, isEditingMode } = this.state;
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <Board
                    ref={this.board}
                    layouts={layouts}
                    onLayoutChange={(newLayouts) => { this.setState({ layouts: newLayouts }); }}
                    onSaveLayout={this.onSaveLayout}>
                    {this.state.blocks.map((block, index) => {
                        return this.generateBlock(block, classes)
                    })}
                </Board>

                <div className={classes.menuContainer}>
                    <Fab
                        color="secondary"
                        aria-label="edit"
                        onClick={() => { this.board.current.toggleEditingMode(); }}>
                        <EditIcon />
                    </Fab>

                    <Fab
                        color="primary"
                        aria-label="tv"
                        onClick={() => { this.board.current.toggleTvMode(); }}>
                        <TvIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}

ComponentChartsPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentChartsPage);
