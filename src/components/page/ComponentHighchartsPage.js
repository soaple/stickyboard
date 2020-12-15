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

const initialLayouts = {
    lg: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 8, y: 0, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 8, y: 6, w: 4, h: 6 },
        { i: 6, x: 0, y: 12, w: 4, h: 6 },
        { i: 7, x: 4, y: 12, w: 4, h: 6 },
        { i: 8, x: 8, y: 12, w: 4, h: 6 },
        { i: 9, x: 0, y: 6, w: 4, h: 6 },
    ],
    md: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 8, y: 0, w: 4, h: 6 },
        { i: 4, x: 4, y: 6, w: 4, h: 6 },
        { i: 5, x: 8, y: 6, w: 4, h: 6 },
        { i: 6, x: 0, y: 12, w: 4, h: 6 },
        { i: 7, x: 4, y: 12, w: 4, h: 6 },
        { i: 8, x: 8, y: 12, w: 4, h: 6 },
        { i: 9, x: 0, y: 6, w: 4, h: 6 },
    ],
    sm: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 4, y: 0, w: 4, h: 6 },
        { i: 3, x: 0, y: 6, w: 4, h: 6 },
        { i: 4, x: 0, y: 12, w: 4, h: 6 },
        { i: 5, x: 4, y: 12, w: 4, h: 6 },
        { i: 6, x: 0, y: 18, w: 4, h: 6 },
        { i: 7, x: 4, y: 18, w: 4, h: 6 },
        { i: 8, x: 0, y: 24, w: 8, h: 6 },
        { i: 9, x: 4, y: 6, w: 4, h: 6 },
    ],
    xs: [
        { i: 1, x: 0, y: 0, w: 6, h: 6 },
        { i: 2, x: 0, y: 6, w: 6, h: 6 },
        { i: 3, x: 0, y: 12, w: 6, h: 6 },
        { i: 4, x: 0, y: 18, w: 6, h: 6 },
        { i: 5, x: 0, y: 30, w: 6, h: 6 },
        { i: 6, x: 0, y: 36, w: 6, h: 6 },
        { i: 7, x: 0, y: 42, w: 6, h: 6 },
        { i: 8, x: 0, y: 48, w: 6, h: 6 },
        { i: 9, x: 0, y: 24, w: 6, h: 6 },
    ],
    xxs: [
        { i: 1, x: 0, y: 0, w: 4, h: 6 },
        { i: 2, x: 0, y: 6, w: 4, h: 6 },
        { i: 3, x: 0, y: 12, w: 4, h: 6 },
        { i: 4, x: 0, y: 18, w: 4, h: 6 },
        { i: 5, x: 0, y: 30, w: 4, h: 6 },
        { i: 6, x: 0, y: 36, w: 4, h: 6 },
        { i: 7, x: 0, y: 42, w: 4, h: 6 },
        { i: 8, x: 0, y: 48, w: 4, h: 6 },
        { i: 9, x: 0, y: 24, w: 4, h: 6 },
    ],
};

const initialStickers = [
    { i: 1, name: 'HighchartsLineChart' },
    { i: 2, name: 'HighchartsBarChart' },
    { i: 3, name: 'HighchartsPieChart' },
    { i: 4, name: 'HighchartsPolarChart' },
    { i: 5, name: 'HighchartsAreaChart' },
    { i: 6, name: 'HighchartsScatterChart' },
    { i: 7, name: 'HighchartsTreeMap' },
    { i: 8, name: 'HighchartsStreamGraph' },
    { i: 9, name: 'HighchartsBoxPlot' },
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
                initialLayouts={initialLayouts}
                initialStickers={initialStickers}
            />
        );
    }
}

ComponentHighchartsPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentHighchartsPage);
