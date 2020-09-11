// src/components/base/PageBase.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';

import MenuIcon from '@material-ui/icons/Menu';
import EditIcon from '@material-ui/icons/Edit';
import TvIcon from '@material-ui/icons/Tv';
import AppsIcon from '@material-ui/icons/Apps';

import { Board, Sticker } from '@stickyboard/core';

import StickerListByCategory from 'components/sticker';

import ApiManager from 'network/ApiManager';
import StatusCode from 'network/StatusCode';
import CookieManager from 'network/CookieManager';

import MessageSnackbar from 'components/ui/MessageSnackbar';

import Const from 'constants/Const';

const styles = (theme) => ({
    root: {
        backgroundColor: theme.colors.contentBackground,
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'fixed',
        right: 16,
        bottom: 16,
    },
    speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(2),
            left: theme.spacing(2),
        },
    },
});

// Generate Sticker dictionary
let StickerDict = {};
Object.values(StickerListByCategory).forEach((stickerList) => {
    stickerList.forEach((StickerObject) => {
        StickerDict[StickerObject.Name] = StickerObject;
    });
});

class PageBase extends React.Component {
    constructor(props) {
        super(props);
        this.board = React.createRef();

        this.state = {
            // React Grid Layout
            currentBreakpoint: 'lg',
            layout: undefined,
            blocks: undefined,
            isEditingMode: true,
            // SpeedDial
            isMenuOpen: false,
        };
    }

    componentDidMount() {
        this.initializeLayout();
    }

    setInitialLayout = () => {
        this.setState({
            layout: this.props.initialLayout,
            blocks: this.props.initialBlocks,
        });
    };

    initializeLayout = () => {
        const userId = CookieManager.getCookie('userId');
        if (userId) {
            this.props.showMessageSnackbar('Loading...');
            ApiManager.StickyBoard.readUserLayout(
                userId,
                window.location.pathname,
                this.readUserLayoutCallback
            );
        } else {
            this.setInitialLayout();
        }
    };

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    };

    handleOpenMenu = () => {
        this.setState({ isMenuOpen: true });
    };

    onLayoutChange = (newLayouts) => {
        this.setState({ layout: newLayouts });
        console.log(JSON.stringify(newLayouts));
    };

    onSaveLayout = () => {
        const userId = CookieManager.getCookie('userId');
        if (userId) {
            ApiManager.StickyBoard.updateUserLayout(
                userId,
                window.location.pathname,
                JSON.stringify(this.state.layout),
                JSON.stringify(this.state.blocks),
                this.updateUserLayoutCallback
            );
        }
    };

    readUserLayoutCallback = (statusCode, response) => {
        this.props.hideMessageSnackbar();
        switch (statusCode) {
            case StatusCode.OK:
                this.setState({
                    layout: JSON.parse(response.layout),
                    blocks: JSON.parse(response.blocks),
                });
                break;
            case StatusCode.NOT_FOUND:
                this.setInitialLayout();
                break;
            default:
                alert(response.msg);
                break;
        }
    };

    updateUserLayoutCallback = (statusCode, response) => {
        switch (statusCode) {
            case StatusCode.OK:
                break;
            default:
                alert(response.msg);
                break;
        }
    };

    render() {
        const { layout, blocks, isEditingMode, isMenuOpen } = this.state;
        const {
            classes,
            theme,
            readonly,
            showDialog,
            messageSnackbar,
        } = this.props;

        if (!layout || !blocks) {
            return null;
        }

        return (
            <div className={classes.root}>
                <Board
                    ref={this.board}
                    layouts={layout}
                    onLayoutChange={this.onLayoutChange}
                    onSaveLayout={this.onSaveLayout}>
                    {blocks.map((block, index) => {
                        const StickerObject = StickerDict[block.i];

                        if (
                            StickerObject &&
                            typeof StickerObject.Component === 'object'
                        ) {
                            return (
                                <Sticker
                                    key={block.i}
                                    name={StickerObject.Name}
                                    description={StickerObject.Description}>
                                    <StickerObject.Component
                                        colors={theme.colors}
                                    />
                                </Sticker>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Board>

                {!readonly && (
                    <div className={classes.menuContainer}>
                        <SpeedDial
                            ariaLabel="SpeedDial"
                            className={classes.speedDial}
                            icon={<MenuIcon />}
                            onClose={this.handleCloseMenu}
                            onOpen={this.handleOpenMenu}
                            open={isMenuOpen}
                            direction={'up'}>
                            <SpeedDialAction
                                icon={<EditIcon />}
                                tooltipTitle={'Toggle Edit mode'}
                                onClick={() => {
                                    this.board.current.toggleEditingMode();
                                }}
                            />

                            <SpeedDialAction
                                icon={<TvIcon />}
                                tooltipTitle={'Toggle TV mode'}
                                onClick={() => {
                                    this.board.current.toggleTvMode();
                                }}
                            />

                            <SpeedDialAction
                                icon={<AppsIcon />}
                                tooltipTitle={'Sticker List'}
                                onClick={() => {
                                    showDialog('StickerListDialog');
                                }}
                            />
                        </SpeedDial>
                    </div>
                )}

                {/* Message Snackbar */}
                <MessageSnackbar
                    open={messageSnackbar.open}
                    message={messageSnackbar.message}
                />
            </div>
        );
    }
}

PageBase.propTypes = {
    // Style
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    // Layout
    // generateBlock: PropTypes.func.isRequired,
    initialLayout: PropTypes.object.isRequired,
    initialBlocks: PropTypes.array.isRequired,
};

export default withStyles(styles, { withTheme: true })(PageBase);
