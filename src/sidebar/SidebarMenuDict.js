// src/sidebar/SidebarMenuDict.js

import React from 'react';

import { amber } from '@material-ui/core/colors';

import Timeline from '@material-ui/icons/Timeline';

const SidebarMenuDict = {

    /******************
     * Intro Menu
     ******************/
     INTRO: [{
         title: 'Intro',
         icon: (<img src='../static/image/StickyBoard_icon.png' style={{'padding': '2px'}}/>),
         url: '/intro',
         value: 101,
         need_permission: false
     }],

     /******************
     * Component Menus
     ******************/
    COMPONENTS: [{
        title: 'Chart',
        icon: (<Timeline color={'#FFFFFF'} hovercolor={amber[500]} />),
        url: '/components/chart',
        value: 201,
        need_permission: false
    }],

}

module.exports = SidebarMenuDict;
