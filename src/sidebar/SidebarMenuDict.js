// src/sidebar/SidebarMenuDict.js

import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

import AccountTree from '@mui/icons-material/AccountTree';
import WebAsset from '@mui/icons-material/WebAsset';
import Toys from '@mui/icons-material/Toys';
import Timeline from '@mui/icons-material/Timeline';
import ViewList from '@mui/icons-material/ViewList';
import TableChart from '@mui/icons-material/TableChart';
import AvTimer from '@mui/icons-material/AvTimer';
import WbSunny from '@mui/icons-material/WbSunny';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import Map from '@mui/icons-material/Map';
import Layers from '@mui/icons-material/Layers';
import Dashboard from '@mui/icons-material/Dashboard';
// import VideogameAsset from '@mui/icons-material/VideogameAsset';
// import Eco from '@mui/icons-material/Eco';
// import House from '@mui/icons-material/House';
// import LocalHospital from '@mui/icons-material/LocalHospital';
// import LocalMall from '@mui/icons-material/LocalMall';

// https://material-ui.com/components/icons/#svgicon
function StickyBoardIcon(props) {
    return (
        <SvgIcon {...props}>
            <path
                {...props}
                d="M23.6810476,14.7143458 C23.6921223,14.7143058 23.7032017,14.7142857 23.7142857,14.7142857 C14.7142857,23.7142857 23.7142857,14.7142857 14.7142857,23.7142857 C14.7142857,23.7016699 14.7143117,23.6890601 14.7143635,23.6764564 C14.7078556,23.6830427 14.7013475,23.6896293 14.6948393,23.6962161 C13.828588,23.8949879 12.9265574,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,12.9286376 23.8945159,13.8326381 23.694876,14.7006731 C23.6902654,14.7052317 23.6856559,14.7097893 23.6810476,14.7143458 Z M23.6810476,14.7143458 C18.7383774,14.7322156 14.7347005,18.734368 14.7143635,23.6764564 C17.5091359,20.8480529 20.286085,18.0711468 23.6810476,14.7143458 Z M3.42857143,11.1428571 C2.9551845,11.1428571 2.57142857,11.5266131 2.57142857,12 C2.57142857,12.4733869 2.9551845,12.8571429 3.42857143,12.8571429 L20.5714286,12.8571429 C21.0448155,12.8571429 21.4285714,12.4733869 21.4285714,12 C21.4285714,11.5266131 21.0448155,11.1428571 20.5714286,11.1428571 L3.42857143,11.1428571 Z M13.1428571,2.57142857 C12.6694702,2.57142857 12.2857143,2.9551845 12.2857143,3.42857143 L12.2857143,9.42857143 C12.2857143,9.90195836 12.6694702,10.2857143 13.1428571,10.2857143 C13.6162441,10.2857143 14,9.90195836 14,9.42857143 L14,3.42857143 C14,2.9551845 13.6162441,2.57142857 13.1428571,2.57142857 Z M16,4.28571429 C15.5266131,4.28571429 15.1428571,4.66947021 15.1428571,5.14285714 L15.1428571,9.42857143 C15.1428571,9.90195836 15.5266131,10.2857143 16,10.2857143 C16.4733869,10.2857143 16.8571429,9.90195836 16.8571429,9.42857143 L16.8571429,5.14285714 C16.8571429,4.66947021 16.4733869,4.28571429 16,4.28571429 Z M18.8571429,6 C18.3837559,6 18,6.38375593 18,6.85714286 L18,9.42857143 C18,9.90195836 18.3837559,10.2857143 18.8571429,10.2857143 C19.3305298,10.2857143 19.7142857,9.90195836 19.7142857,9.42857143 L19.7142857,6.85714286 C19.7142857,6.38375593 19.3305298,6 18.8571429,6 Z M10.8571429,13.7142857 C10.3837559,13.7142857 10,14.0980416 10,14.5714286 L10,20.5714286 C10,21.0448155 10.3837559,21.4285714 10.8571429,21.4285714 C11.3305298,21.4285714 11.7142857,21.0448155 11.7142857,20.5714286 L11.7142857,14.5714286 C11.7142857,14.0980416 11.3305298,13.7142857 10.8571429,13.7142857 Z M8,13.7142857 C7.52661307,13.7142857 7.14285714,14.0980416 7.14285714,14.5714286 L7.14285714,18.8571429 C7.14285714,19.3305298 7.52661307,19.7142857 8,19.7142857 C8.47338693,19.7142857 8.85714286,19.3305298 8.85714286,18.8571429 L8.85714286,14.5714286 C8.85714286,14.0980416 8.47338693,13.7142857 8,13.7142857 Z M5.14285714,13.7142857 C4.66947021,13.7142857 4.28571429,14.0980416 4.28571429,14.5714286 L4.28571429,17.1428571 C4.28571429,17.6162441 4.66947021,18 5.14285714,18 C5.61624407,18 6,17.6162441 6,17.1428571 L6,14.5714286 C6,14.0980416 5.61624407,13.7142857 5.14285714,13.7142857 Z"
            />
        </SvgIcon>
    );
}

const SidebarMenuDict = {
    /******************
     * Intro Menu
     ******************/
    INTRO: [
        {
            title: 'Intro',
            icon: <StickyBoardIcon style={{ padding: 2 }} />,
            url: '/intro',
            value: 101,
            need_permission: false,
        },
        {
            title: 'Database',
            icon: <AccountTree />,
            url: '/intro/database',
            value: 102,
            need_permission: false,
        },
        {
            title: 'Dialog',
            icon: <WebAsset />,
            url: '/intro/dialog',
            value: 103,
            need_permission: false,
        },
        {
            title: 'Playground',
            icon: <Toys />,
            url: '/intro/playground',
            value: 104,
            need_permission: false,
        },
    ],

    /******************
     * Component Menus
     ******************/
    COMPONENTS: [
        {
            title: 'Recharts',
            icon: <Timeline />,
            url: '/components/recharts',
            value: 201,
            need_permission: false,
        },
        {
            title: 'Highcharts',
            icon: <Timeline />,
            url: '/components/highcharts',
            value: 202,
            need_permission: false,
        },
        {
            title: 'Table',
            icon: <ViewList />,
            url: '/components/table',
            value: 203,
            need_permission: false,
        },
        {
            title: 'SmartTable',
            icon: <TableChart />,
            url: '/components/smart-table',
            value: 204,
            need_permission: false,
        },
        {
            title: 'Number',
            icon: <AvTimer />,
            url: '/components/number',
            value: 205,
            need_permission: false,
        },
        {
            title: 'Weather',
            icon: <WbSunny />,
            url: '/components/weather',
            value: 206,
            need_permission: false,
        },
        {
            title: 'Others',
            icon: <MoreHoriz />,
            url: '/components/others',
            value: 207,
            need_permission: false,
        },
    ],

    /******************
     * Layering Menus
     ******************/
    LAYERING: [
        {
            title: 'Map',
            icon: <Map />,
            url: '/layering/map',
            value: 301,
            need_permission: false,
        },
        {
            title: 'HeatMap',
            icon: <Layers />,
            url: '/layering/heatmap',
            value: 302,
            need_permission: false,
        },
    ],

    /******************
     * Example Menus
     ******************/
    EXAMPLE: [
        {
            title: 'Sample',
            icon: <Dashboard />,
            url: '/example/sample',
            value: 401,
            need_permission: false,
        },
        // {
        //     title: 'Game',
        //     icon: <VideogameAsset />,
        //     url: '/example/game',
        //     value: 401,
        //     need_permission: false,
        // },
        // {
        //     title: 'Farm',
        //     icon: <Eco />,
        //     url: '/example/farm',
        //     value: 402,
        //     need_permission: false,
        // },
        // {
        //     title: 'Factory',
        //     icon: <House />,
        //     url: '/example/factory',
        //     value: 403,
        //     need_permission: false,
        // },
        // {
        //     title: 'Hospital',
        //     icon: <LocalHospital />,
        //     url: '/example/hospital',
        //     value: 404,
        //     need_permission: false,
        // },
        // {
        //     title: 'Mall',
        //     icon: <LocalMall />,
        //     url: '/example/mall',
        //     value: 405,
        //     need_permission: false,
        // },
    ],
};

export default SidebarMenuDict;
