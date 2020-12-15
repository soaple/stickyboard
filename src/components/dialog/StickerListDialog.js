import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Board, Sticker } from '@stickyboard/core';
import StickerListByCategoryOriginal from 'components/sticker';

// Delete internal stickers
const StickerListByCategory = { ...StickerListByCategoryOriginal };
delete StickerListByCategory.Internal;

const StickerObjectContainer = styled.div`
    position: relative;
    height: 300px;
    padding: 16px;
    border: 1px solid #cccccc;
    border-radius: 16px;
    :hover {
        cursor: pointer;
    }
    ${(props) =>
        props.selected &&
        `
        border: 1px solid #000000;
        `}
`;

const StickerInfoContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 16px;
    border-radius: 16px;
    background-color: rgb(108, 108, 108);
    z-index: 1;
    text-align: center;
    transition: opacity 0.2s ease-in-out;
    -webkit-transition: -webkit-opacity 0.2s ease-in-out;
    opacity: 0;
    :hover {
        opacity: 0.95;
    }
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const Description = styled.div`
    font-size: 16px;
`;

const useStyles = makeStyles((theme) => ({
    dialogContentRoot: {
        padding: '0px 24px',
    },
    tabsRoot: {
        position: 'sticky',
        webkitPosition: '-webkit-sticky',
        top: 0,
        zIndex: 1600,
        backgroundColor: theme.palette.background.paper,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`sticker-tabpanel-${index}`}
            aria-labelledby={`sticker-tab-${index}`}
            {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `sticker-tab-${index}`,
        'aria-controls': `sticker-tabpanel-${index}`,
    };
}

function StickerListDialog(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { open, params, callback, onClose } = props;
    const {
        title,
        message,
        currentStickerName,
        cancelButtonText,
        confirmButtonText,
    } = params;
    const [tabValue, setTabValue] = useState(0);
    const [selectedStickerName, setSelectedStickerName] = useState(
        currentStickerName
    );
    console.log(params);

    useEffect(() => {
        if (currentStickerName) {
            setSelectedStickerName(currentStickerName);
        }
    }, [currentStickerName]);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Dialog
            fullWidth
            maxWidth="xl"
            scroll="paper"
            open={open}
            onClose={onClose}
            aria-labelledby="sticker-list-dialog-title"
            aria-describedby="sticker-list-dialog-description">
            <DialogTitle id="sticker-list-dialog-title">
                {`Sticker List${
                    selectedStickerName
                        ? ` - '${selectedStickerName}' selected`
                        : ''
                }`}
            </DialogTitle>

            <Divider />

            <DialogContent className={classes.dialogContentRoot}>
                {false && (
                    <DialogContentText id="sticker-list-dialog-description">
                        {'Select a sticker'}
                    </DialogContentText>
                )}

                <Tabs
                    className={classes.tabsRoot}
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Sticker tabs">
                    {Object.keys(StickerListByCategory).map(
                        (stickerCategoryKey, index) => {
                            return (
                                <Tab
                                    key={stickerCategoryKey}
                                    label={stickerCategoryKey}
                                    {...a11yProps(index)}
                                />
                            );
                        }
                    )}
                </Tabs>

                {Object.keys(StickerListByCategory).map(
                    (stickerCategoryKey, index) => {
                        const StickerList =
                            StickerListByCategory[stickerCategoryKey];

                        return (
                            <TabPanel
                                key={stickerCategoryKey}
                                value={tabValue}
                                index={index}>
                                <Grid container spacing={2}>
                                    {StickerList.map((StickerObject, index) => {                                        
                                        if (
                                            StickerObject &&
                                            typeof StickerObject.Component ===
                                                'object'
                                        ) {
                                            return (
                                                <Grid
                                                    item
                                                    xs={6}
                                                    sm={4}
                                                    md={3}
                                                    key={StickerObject.Name}>
                                                    <StickerObjectContainer
                                                        selected={
                                                            selectedStickerName ===
                                                            StickerObject.Name
                                                        }
                                                        onClick={() => {
                                                            setSelectedStickerName(
                                                                StickerObject.Name
                                                            );
                                                        }}>
                                                        <StickerInfoContainer>
                                                            <Title>
                                                                {
                                                                    StickerObject.Name
                                                                }
                                                            </Title>
                                                            <Description>
                                                                {
                                                                    StickerObject.Description
                                                                }
                                                            </Description>
                                                        </StickerInfoContainer>
                                                        <StickerObject.Component
                                                            staticMode={true}
                                                            colors={
                                                                theme.colors
                                                            }
                                                        />
                                                    </StickerObjectContainer>
                                                </Grid>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </Grid>
                            </TabPanel>
                        );
                    }
                )}
            </DialogContent>

            <Divider />

            <DialogActions>
                <Button onClick={onClose}>
                    {cancelButtonText || 'Cancel'}
                </Button>
                <Button
                    onClick={() => {
                        if (callback && typeof callback === 'function') {
                            callback(selectedStickerName);
                        }
                        onClose();
                    }}
                    color="primary"
                    autoFocus>
                    {confirmButtonText || 'OK'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default StickerListDialog;
