// src/components/base/PageBase.js

import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';

import EditIcon from '@material-ui/icons/Edit';
import TvIcon from '@material-ui/icons/Tv';

import { Sticker, Board } from '@stickyboard/core';

import ApiManager from 'network/ApiManager';
import StatusCode from 'network/StatusCode';
import CookieManager from 'network/CookieManager';

import {
    showMessageSnackbar,
    hideMessageSnackbar,
} from 'redux/actions/actions'

import StickyBoardColors from 'theme/StickyBoardColors';
import Const from 'constants/Const';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        height: 120,
        right: 16,
        bottom: 16,
        zIndex: 2000,
    },
});

class PageBase extends React.Component {
    constructor (props) {
        super(props);
        this.board = React.createRef();

        this.state = {
            // React Grid Layout
            currentBreakpoint: 'lg',
            layouts: undefined,
            blocks: undefined,
            isEditingMode: true,
            // Data
            data: [],
            // Chart scaling
            left : 0,
            right : 0,
            animation: true,
        }
    }

    componentDidMount() {
        this.initializeLayout();
    }

    setInitialLayout = () => {
        this.setState({
            layouts: this.props.initialLayout,
            blocks: this.props.initialBlocks,
        });
    }

    initializeLayout = () => {
        const userId = CookieManager.getCookie('userId');
        if (userId) {
            ApiManager.readUserLayout(
                userId,
                window.location.pathname,
                this.readUserLayoutCallback);
        } else {
            this.setInitialLayout();
        }
    }

    onSaveLayout = () => {
        const userId = CookieManager.getCookie('userId');
        if (userId) {
            ApiManager.updateUserLayout(
                userId,
                window.location.pathname,
                JSON.stringify(this.state.layouts),
                JSON.stringify(this.state.blocks),
                this.updateUserLayoutCallback);
        }
    }

    readUserLayoutCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            console.log(response)
            this.setState({
                layouts: JSON.parse(response.layout),
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
    }

    updateUserLayoutCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            break;
        default:
            alert(response.msg);
            break;
        }
    }

    render() {
        const { layouts, blocks, isEditingMode } = this.state;
        const { classes, theme, generateBlock } = this.props;

        if (!layouts || !blocks) {
            return null;
        }

        return (
            <div className={classes.root}>
                <Board
                    ref={this.board}
                    layouts={layouts}
                    onLayoutChange={(newLayouts) => { this.setState({ layouts: newLayouts }); }}
                    onSaveLayout={this.onSaveLayout}>
                    {blocks.map((block, index) => {
                        return generateBlock(block, classes);
                    })}
                </Board>

                <div className={classes.menuContainer}>
                    <Fab
                        color="secondary"
                        aria-label="edit"
                        onClick={() => { this.board.current.toggleEditingMode(); }}>
                        <EditIcon />
                    </Fab>

                    <Fab
                        color="primary"
                        aria-label="tv"
                        onClick={() => { this.board.current.toggleTvMode(); }}>
                        <TvIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}

PageBase.propTypes = {
    // Style
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    // Layout
    generateBlock: PropTypes.func.isRequired,
    initialLayout: PropTypes.object.isRequired,
    initialBlocks: PropTypes.array.isRequired,
};

export default withStyles(styles, { withTheme: true })(PageBase);
