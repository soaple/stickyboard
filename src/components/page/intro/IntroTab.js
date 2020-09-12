// src/components/page/intro/IntroTab.js

import React, { useState } from 'react';
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
        <Typography component="div">
            <Box>{children}</Box>
        </Typography>
    );
}

function IntroTab({ labels, children }) {
    const classes = tabStyles();

    const [tabValue, setTabValue] = useState(0);

    const onChangeTab = (event, newTabValue) => {
        setTabValue(newTabValue);
    };

    return (
        <>
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <Tabs
                    value={tabValue}
                    onChange={onChangeTab}
                    aria-label="section-tabs">
                    <Tab className={classes.firstLabel} label={labels[0]} />
                    <Tab className={classes.secondLabel} label={labels[1]} />
                </Tabs>
            </AppBar>
            {children.map((childElem, index) => {
                return (
                    <TabPanel value={tabValue} index={index}>
                        {childElem}
                    </TabPanel>
                );
            })}
        </>
    );
}

export default IntroTab;
