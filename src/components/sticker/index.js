// src/components/sticker/index.js

import loadable from '@loadable/component';

// Intro
const IntroIntroduction = loadable(() => import('./IntroIntroduction'));
const IntroCustomLayout = loadable(() => import('./IntroCustomLayout'));
const IntroDatabaseSupport = loadable(() => import('./IntroDatabaseSupport'));
const IntroChartSupport = loadable(() => import('./IntroChartSupport'));
const IntroMapSupport = loadable(() => import('./IntroMapSupport'));
const IntroContact = loadable(() => import('./IntroContact'));
// Recharts
const RechartsLineChart = loadable(() => import('./RechartsLineChart'));
const RechartsBarChart = loadable(() => import('./RechartsBarChart'));
const RechartsComposedChart = loadable(() => import('./RechartsComposedChart'));
const RechartsMultiLineChart = loadable(() => import('./RechartsMultiLineChart'));
const RechartsPieChart = loadable(() => import('./RechartsPieChart'));
const RechartsAreaChart = loadable(() => import('./RechartsAreaChart'));
const RechartsRadarChart = loadable(() => import('./RechartsRadarChart'));
const RechartsScatterChart = loadable(() => import('./RechartsScatterChart'));
const RechartsTinyChart = loadable(() => import('./RechartsTinyChart'));
const RechartsTreeMap = loadable(() => import('./RechartsTreeMap'));
const RechartsStackedBarChart = loadable(() => import('./RechartsStackedBarChart'));
// Highcharts
const HighchartsLineChart = loadable(() => import('./HighchartsLineChart'));
const HighchartsBarChart = loadable(() => import('./HighchartsBarChart'));
const HighchartsPieChart = loadable(() => import('./HighchartsPieChart'));
const HighchartsPolarChart = loadable(() => import('./HighchartsPolarChart'));
const HighchartsAreaChart = loadable(() => import('./HighchartsAreaChart'));
const HighchartsScatterChart = loadable(() => import('./HighchartsScatterChart'));
const HighchartsTreeMap = loadable(() => import('./HighchartsTreeMap'));
const HighchartsStreamGraph = loadable(() => import('./HighchartsStreamGraph'));
const HighchartsBoxPlot = loadable(() => import('./HighchartsBoxPlot'));
// Table
const TableOrder = loadable(() => import('./TableOrder'));
const TableUser = loadable(() => import('./TableUser'));
const TableRealtimeOrder = loadable(() => import('./TableRealtimeOrder'));
const TableRealtimeUser = loadable(() => import('./TableRealtimeUser'));
const TableRealtimeMessage = loadable(() => import('./TableRealtimeMessage'));
// SmartTable
const SmartTableUser = loadable(() => import('./SmartTableUser'));
const SmartTableUserPost = loadable(() => import('./SmartTableUserPost'));
// Number
const NumberDAU = loadable(() => import('./NumberDAU'));
const NumberWAU = loadable(() => import('./NumberWAU'));
const NumberMAU = loadable(() => import('./NumberMAU'));
const NumberARPU = loadable(() => import('./NumberARPU'));
const NumberDAU2 = loadable(() => import('./NumberDAU2'));
const NumberWAU2 = loadable(() => import('./NumberWAU2'));
const NumberMAU2 = loadable(() => import('./NumberMAU2'));
const NumberARPU2 = loadable(() => import('./NumberARPU2'));
const NumberDAU3 = loadable(() => import('./NumberDAU3'));
const NumberWAU3 = loadable(() => import('./NumberWAU3'));
// Weather
const OpenWeatherMap = loadable(() => import('./OpenWeatherMap'));
const OpenWeatherMap3days = loadable(() => import('./OpenWeatherMap3days'));
const OpenWeatherMap7days = loadable(() => import('./OpenWeatherMap7days'));
const YahooWeather = loadable(() => import('./YahooWeather'));
const YahooWeatherForecast = loadable(() => import('./YahooWeatherForecast'));

export default {
    Indroduction: [
        {
            Name: 'IntroIntroduction',
            Description: 'IntroIntroduction sample',
            Component: IntroIntroduction,
        },
        {
            Name: 'IntroCustomLayout',
            Description: 'IntroCustomLayout sample',
            Component: IntroCustomLayout,
        },
        {
            Name: 'IntroDatabaseSupport',
            Description: 'IntroDatabaseSupport sample',
            Component: IntroDatabaseSupport,
        },
        {
            Name: 'IntroChartSupport',
            Description: 'IntroChartSupport sample',
            Component: IntroChartSupport,
        },
        {
            Name: 'IntroMapSupport',
            Description: 'IntroMapSupport sample',
            Component: IntroMapSupport,
        },
        {
            Name: 'IntroContact',
            Description: 'IntroContact sample',
            Component: IntroContact,
        },
    ],
    Recharts: [
        {
            Name: 'RechartsLineChart',
            Description: 'RechartsLineChart sample',
            Component: RechartsLineChart,
        },
        {
            Name: 'RechartsBarChart',
            Description: 'RechartsBarChart sample',
            Component: RechartsBarChart,
        },
        {
            Name: 'RechartsComposedChart',
            Description: 'RechartsComposedChart sample',
            Component: RechartsComposedChart,
        },
        {
            Name: 'RechartsMultiLineChart',
            Description: 'RechartsMultiLineChart sample',
            Component: RechartsMultiLineChart,
        },
        {
            Name: 'RechartsPieChart',
            Description: 'RechartsPieChart sample',
            Component: RechartsPieChart,
        },
        {
            Name: 'RechartsAreaChart',
            Description: 'RechartsAreaChart sample',
            Component: RechartsAreaChart,
        },
        {
            Name: 'RechartsRadarChart',
            Description: 'RechartsRadarChart sample',
            Component: RechartsRadarChart,
        },
        {
            Name: 'RechartsScatterChart',
            Description: 'RechartsScatterChart sample',
            Component: RechartsScatterChart,
        },
        {
            Name: 'RechartsTinyChart',
            Description: 'RechartsTinyChart sample',
            Component: RechartsTinyChart,
        },
        {
            Name: 'RechartsTreeMap',
            Description: 'RechartsTreeMap sample',
            Component: RechartsTreeMap,
        },
        {
            Name: 'RechartsStackedBarChart',
            Description: 'RechartsStackedBarChart sample',
            Component: RechartsStackedBarChart,
        },
    ],
    Highcharts: [
        {
            Name: 'HighchartsLineChart',
            Description: 'HighchartsLineChart sample',
            Component: HighchartsLineChart,
        },
        {
            Name: 'HighchartsBarChart',
            Description: 'HighchartsBarChart sample',
            Component: HighchartsBarChart,
        },
        {
            Name: 'HighchartsPieChart',
            Description: 'HighchartsPieChart sample',
            Component: HighchartsPieChart,
        },
        {
            Name: 'HighchartsPolarChart',
            Description: 'HighchartsPolarChart sample',
            Component: HighchartsPolarChart,
        },
        {
            Name: 'HighchartsAreaChart',
            Description: 'HighchartsAreaChart sample',
            Component: HighchartsAreaChart,
        },
        {
            Name: 'HighchartsScatterChart',
            Description: 'HighchartsScatterChart sample',
            Component: HighchartsScatterChart,
        },
        {
            Name: 'HighchartsTreeMap',
            Description: 'HighchartsTreeMap sample',
            Component: HighchartsTreeMap,
        },
        {
            Name: 'HighchartsStreamGraph',
            Description: 'HighchartsStreamGraph sample',
            Component: HighchartsStreamGraph,
        },
        {
            Name: 'HighchartsBoxPlot',
            Description: 'HighchartsBoxPlot sample',
            Component: HighchartsBoxPlot,
        },
    ],
    Table: [
        {
            Name: 'TableOrder',
            Description: 'TableOrder sample',
            Component: TableOrder,
        },
        {
            Name: 'TableUser',
            Description: 'TableUser sample',
            Component: TableUser,
        },
        {
            Name: 'TableRealtimeOrder',
            Description: 'TableRealtimeOrder sample',
            Component: TableRealtimeOrder,
        },
        {
            Name: 'TableRealtimeUser',
            Description: 'TableRealtimeUser sample',
            Component: TableRealtimeUser,
        },
        {
            Name: 'TableRealtimeMessage',
            Description: 'TableRealtimeMessage sample',
            Component: TableRealtimeMessage,
        },
    ],
    SmartTable: [
        {
            Name: 'SmartTableUser',
            Description: 'SmartTableUser sample',
            Component: SmartTableUser,
        },
        {
            Name: 'SmartTableUserPost',
            Description: 'SmartTableUserPost sample',
            Component: SmartTableUserPost,
        },
    ],
    Number: [
        {
            Name: 'NumberDAU',
            Description: 'NumberDAU sample',
            Component: NumberDAU,
        },
        {
            Name: 'NumberWAU',
            Description: 'NumberWAU sample',
            Component: NumberWAU,
        },
        {
            Name: 'NumberMAU',
            Description: 'NumberMAU sample',
            Component: NumberMAU,
        },
        {
            Name: 'NumberARPU',
            Description: 'NumberARPU sample',
            Component: NumberARPU,
        },
        {
            Name: 'NumberDAU2',
            Description: 'NumberDAU2 sample',
            Component: NumberDAU2,
        },
        {
            Name: 'NumberWAU2',
            Description: 'NumberWAU2 sample',
            Component: NumberWAU2,
        },
        {
            Name: 'NumberMAU2',
            Description: 'NumberMAU2 sample',
            Component: NumberMAU2,
        },
        {
            Name: 'NumberARPU2',
            Description: 'NumberARPU2 sample',
            Component: NumberARPU2,
        },
        {
            Name: 'NumberDAU3',
            Description: 'NumberDAU3 sample',
            Component: NumberDAU3,
        },
        {
            Name: 'NumberWAU3',
            Description: 'NumberWAU3 sample',
            Component: NumberWAU3,
        },
    ],
    Weather: [
        {
            Name: 'OpenWeatherMap',
            Description: 'OpenWeatherMap sample',
            Component: OpenWeatherMap,
        },
        {
            Name: 'OpenWeatherMap3days',
            Description: 'OpenWeatherMap3days sample',
            Component: OpenWeatherMap3days,
        },
        {
            Name: 'OpenWeatherMap7days',
            Description: 'OpenWeatherMap7days sample',
            Component: OpenWeatherMap7days,
        },
        {
            Name: 'YahooWeather',
            Description: 'YahooWeather sample',
            Component: YahooWeather,
        },
        {
            Name: 'YahooWeatherForecast',
            Description: 'YahooWeatherForecast sample',
            Component: YahooWeatherForecast,
        },
    ],
};
