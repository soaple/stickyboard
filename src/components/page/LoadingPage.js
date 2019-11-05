// src/components/LoadingPage.js

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// Unused
class LoadingPage extends React.Component {
    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <CircularProgress
                    color='primary'
                    size={50} />
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(LoadingPage);
