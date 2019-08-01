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
        overflow: 'auto',
        background: StickyBoardColors.contentBackground,
    },
});

class FullScreenLayout extends React.Component {
    render () {
        const { classes, theme } = this.props;

        return (
            <MuiThemeProvider theme={MuiTheme}>
                {/* Wrap the whole content by Material UI */}
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12}>
                        {/* Body */}
                        <div className={classes.root}>
                            {this.props.children}
                        </div>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        )
    }
}

FullScreenLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenLayout);
