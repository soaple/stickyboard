// src/components/page/intro/IntroTab.js

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const tabStyles = makeStyles({
    appBar: {
        background: 'none',
        '@media (max-width: 828px)': {
            marginBottom: '10px',
        },
    },
    firstLabel: {
        margin: '0 0 0 auto',
    },
    secondLabel: {
        float: 'right',
        '@media (max-width: 828px)': {
            margin: '0 auto 0 0',
        },
    },
});

function TabPanel({ children, value, index }) {
    if (value !== index) {
        return null;
    }
    return (
        <Typography component="div" style={{ minHeight: 652 }}>
            <Box>{children}</Box>
        </Typography>
    );
}

function IntroTab({ firstTab, secondTab, mode, onChangeMode, label }) {
    const classes = tabStyles();

    return (
        <div>
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <Tabs
                    value={mode}
                    onChange={onChangeMode}
                    aria-label="section-tabs">
                    <Tab className={classes.firstLabel} label={label[0]} />
                    <Tab className={classes.secondLabel} label={label[1]} />
                </Tabs>
            </AppBar>
            <TabPanel value={mode} index={0}>
                {firstTab}
            </TabPanel>
            <TabPanel value={mode} index={1}>
                {secondTab}
            </TabPanel>
        </div>
    );
}

export default IntroTab;
