// src/sidebar/SidebarMenuDict.js

import React from 'react';

var SidebarMenuDict = {

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

}

module.exports = SidebarMenuDict;
