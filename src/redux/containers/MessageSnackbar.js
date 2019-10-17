// src/components/containers/MessageSnackbar.js

import { connect } from 'react-redux'

import {
    showMessageSnackbar,
    hideMessageSnackbar,
} from '../actions';

import MySnackbar from 'components/ui/MySnackbar';

const mapStateToProps = (state, ownProps) => {
    return {
        open: state.messageSnackbar.open,
        message: state.messageSnackbar.message,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showMessageSnackbar: (message) => {
            dispatch(showMessageSnackbar(message));
        },
        hideMessageSnackbar: () => {
            dispatch(hideMessageSnackbar());
        }
    }
}

const MessageSnackbar = connect(
    mapStateToProps,
    mapDispatchToProps
)(MySnackbar);

export default MessageSnackbar;
