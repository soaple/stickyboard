// src/components/containers/PageBaseContainer.js

import { connect } from 'react-redux'

import {
    showMessageSnackbar,
    hideMessageSnackbar,
} from '../actions';

import PageBase from 'components/base/PageBase';

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        messageSnackbar: {
            open: state.messageSnackbar.open,
            message: state.messageSnackbar.message,
        }
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

const PageBaseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageBase);

export default PageBaseContainer;
