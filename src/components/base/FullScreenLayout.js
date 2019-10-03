// src/components/base/FullScreenLayout.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { blueGrey } from '@material-ui/core/colors';

import MuiTheme from '../../theme/MuiTheme';
import StickyBoardColors from '../../theme/StickyBoardColors';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'auto',
        background: StickyBoardColors.contentBackground,
    },
});

class FullScreenLayout extends React.Component {
    render() {
        const { classes, theme } = this.props;

        return (
            <MuiThemeProvider theme={MuiTheme}>
                {/* Root */}
                <div className={classes.root}>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

FullScreenLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullScreenLayout);
