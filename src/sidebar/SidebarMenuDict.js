// src/sidebar/SidebarMenuDict.js

import React from 'react';

import { amber } from '@material-ui/core/colors';

import Timeline from '@material-ui/icons/Timeline';
import ViewList from '@material-ui/icons/ViewList';
import AvTimer from '@material-ui/icons/AvTimer';
import WbSunny from '@material-ui/icons/WbSunny';
import Map from '@material-ui/icons/Map';
import Layers from '@material-ui/icons/Layers';

const SidebarMenuDict = {

    /******************
     * Intro Menu
     ******************/
     INTRO: [{
         title: 'Intro',
         icon: (<img src='../static/image/StickyBoard_icon.png' style={{'padding': '2px'}}/>),
         url: '/',
         value: 101,
         need_permission: false
     }],

     /******************
     * Component Menus
     ******************/
    COMPONENTS: [{
        title: 'Chart',
        icon: (<Timeline />),
        url: '/components/chart',
        value: 201,
        need_permission: false
    }, {
        title: 'Highcharts',
        icon: (<Timeline />),
        url: '/components/highcharts',
        value: 202,
        need_permission: false
    }, {
        title: 'Table',
        icon: (<ViewList />),
        url: '/components/table',
        value: 203,
        need_permission: false
    }, {
        title: 'Number',
        icon: (<AvTimer />),
        url: '/components/number',
        value: 204,
        need_permission: false
    }, {
        title: 'Weather',
        icon: (<WbSunny />),
        url: '/components/weather',
        value: 205,
        need_permission: false
    }],

    /******************
     * Layering Menus
     ******************/
    LAYERING: [{
        title: 'Map',
        icon: (<Map />),
        url: '/layering/map',
        value: 301,
        need_permission: false
    }, {
        title: 'HeatMap',
        icon: (<Layers />),
        url: '/layering/heatmap',
        value: 302,
        need_permission: false
    }],

}

export default SidebarMenuDict;
