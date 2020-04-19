import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import { Board, Sticker } from '@stickyboard/core';
import StickerDict from 'components/sticker';

const StickerGridItem = styled(Grid)`
    position: relative;
    height: 300px;
`;

function StickerListDialog(props) {
    const theme = useTheme();
    const { open, params, callback, onClose } = props;
    const { title, message, cancelButtonText, confirmButtonText } = params;

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
                {'Sticker List'}
            </DialogTitle>

            <DialogContent>
                <DialogContentText id="sticker-list-dialog-description">
                    {'Select a sticker'}
                </DialogContentText>

                <Grid container spacing={2}>
                    {Object.keys(StickerDict).map((stickerKey, index) => {
                        const StickerObject = StickerDict[stickerKey];

                        if (
                            StickerObject &&
                            typeof StickerObject.Component === 'function'
                        ) {
                            return (
                                <StickerGridItem
                                    item
                                    xs={6}
                                    sm={4}
                                    md={3}
                                    key={stickerKey}>
                                    <StickerObject.Component
                                        staticMode={true}
                                        colors={theme.colors}
                                    />
                                </StickerGridItem>
                            );
                        } else {
                            return null;
                        }
                    })}
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>
                    {cancelButtonText || 'Cancel'}
                </Button>
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

export default StickerListDialog;
