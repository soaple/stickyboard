// src/components/page/ComponentHighchartsPage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
};

const CustomizedTreeMapContent = (props) => {
    const {
        root,
        depth,
        x,
        y,
        width,
        height,
        index,
        payload,
        colors,
        rank,
        name,
    } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill:
                        depth < 2
                            ? colors[
                                  Math.floor((index / root.children.length) * 6)
                              ]
                            : 'none',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {depth === 1 ? (
                <text
                    x={x + width / 2}
                    y={y + height / 2 + 7}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={14}>
                    {name}
                </text>
            ) : null}
            {depth === 1 ? (
                <text
                    x={x + 4}
                    y={y + 18}
                    fill="#fff"
                    fontSize={16}
                    fillOpacity={0.9}>
                    {index + 1}
                </text>
            ) : null}
        </g>
    );
};

const RADIAN = Math.PI / 180;

const initialLayout = {
    lg: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsTreeMap', x: 4, y: 12, w: 4, h: 6 },
        { i: 'HighchartsStreamGraph', x: 8, y: 12, w: 4, h: 6 },
    ],
    md: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsTreeMap', x: 4, y: 12, w: 4, h: 6 },
        { i: 'HighchartsStreamGraph', x: 8, y: 12, w: 4, h: 6 },
    ],
    sm: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'HighchartsTreeMap', x: 4, y: 18, w: 4, h: 6 },
        { i: 'HighchartsStreamGraph', x: 0, y: 24, w: 8, h: 6 },
        { i: 'HighchartsBoxPlot', x: 4, y: 6, w: 4, h: 6 },
    ],
    xs: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 6, w: 6, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 12, w: 6, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 18, w: 6, h: 6 },
        { i: 'HighchartsAreaChart', x: 0, y: 30, w: 6, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 36, w: 6, h: 6 },
        { i: 'HighchartsTreeMap', x: 0, y: 42, w: 6, h: 6 },
        { i: 'HighchartsStreamGraph', x: 0, y: 48, w: 6, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 24, w: 6, h: 6 },
    ],
    xxs: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 0, y: 30, w: 4, h: 6 },
        { i: 'HighchartsScatterChart', x: 0, y: 36, w: 4, h: 6 },
        { i: 'HighchartsTreeMap', x: 0, y: 42, w: 4, h: 6 },
        { i: 'HighchartsStreamGraph', x: 0, y: 48, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 24, w: 4, h: 6 },
    ],
};

const initialBlocks = [
    { i: 'HighchartsLineChart' },
    { i: 'HighchartsBarChart' },
    { i: 'HighchartsPieChart' },
    { i: 'HighchartsPolarChart' },
    { i: 'HighchartsAreaChart' },
    { i: 'HighchartsScatterChart' },
    { i: 'HighchartsTreeMap' },
    { i: 'HighchartsStreamGraph' },
    { i: 'HighchartsBoxPlot' },
];

class ComponentHighchartsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <PageBaseContainer
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

ComponentHighchartsPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentHighchartsPage);
