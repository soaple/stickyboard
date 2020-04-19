import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AlertDialog(props) {
    const { open, params, callback, onClose } = props;
    const { title, message, confirmButtonText } = params;

    return (
        <Dialog
            fullWidth
            maxWidth={'sm'}
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {title || 'Please enter title'}
            </DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message || 'Please enter message'}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={() => {
                        if (callback && typeof callback === 'function') {
                            callback();
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

export default AlertDialog;
