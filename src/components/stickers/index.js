// src/components/sticker/index.js

import LineChartSticker from './LineChartSticker';
import BarChartSticker from './BarChartSticker';
import ComposedChartSticker from './ComposedChartSticker';
import MultiLineChartSticker from './MultiLineChartSticker';
import PieChartSticker from './PieChartSticker';
import AreaChartSticker from './AreaChartSticker';
import RadarChartSticker from './RadarChartSticker';
import ScatterChartSticker from './ScatterChartSticker';
import TinyChartSticker from './TinyChartSticker';
import TreeMapSticker from './TreeMapSticker';
import StackedBarChartSticker from './StackedBarChartSticker';

export default {
    LineChart: {
        Name: 'LineChart',
        Description: 'LineChart sample',
        Component: LineChartSticker,
    },
    BarChart: {
        Name: 'BarChart',
        Description: 'BarChart sample',
        Component: BarChartSticker,
    },
    ComposedChart: {
        Name: 'ComposedChart',
        Description: 'ComposedChart sample',
        Component: ComposedChartSticker,
    },
    MultiLineChart: {
        Name: 'MultiLineChart',
        Description: 'MultiLineChart sample',
        Component: MultiLineChartSticker,
    },
    PieChart: {
        Name: 'PieChart',
        Description: 'PieChart sample',
        Component: PieChartSticker,
    },
    AreaChart: {
        Name: 'AreaChart',
        Description: 'AreaChart sample',
        Component: AreaChartSticker,
    },
    RadarChart: {
        Name: 'RadarChart',
        Description: 'RadarChart sample',
        Component: RadarChartSticker,
    },
    ScatterChart: {
        Name: 'ScatterChart',
        Description: 'ScatterChart sample',
        Component: ScatterChartSticker,
    },
    TinyChart: {
        Name: 'TinyChart',
        Description: 'TinyChart sample',
        Component: TinyChartSticker,
    },
    TreeMap: {
        Name: 'TreeMap',
        Description: 'TreeMap sample',
        Component: TreeMapSticker,
    },
    StackedBarChart: {
        Name: 'StackedBarChart',
        Description: 'StackedBarChart sample',
        Component: StackedBarChartSticker,
    },
};
