// src/components/ui/MessageSnackbar.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    progress: {
        color: theme.colors.progress,
    },
    snackBarMessage: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
})

class MessageSnackbar extends React.Component {
    render () {
        const { classes, theme, open, message } = this.props;

        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={
                    <div>
                        <CircularProgress
                            className={classes.progress}
                            thickness={4} />
                        <span
                            className={classes.snackBarMessage}
                            id="message-id">
                            {message}
                        </span>
                    </div>}
                />
        )
    }
}

MessageSnackbar.propTypes = {
    // Style props
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    // Custom props
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(MessageSnackbar);
