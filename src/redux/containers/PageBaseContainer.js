// src/components/containers/PageBaseContainer.js

import { connect } from 'react-redux'

import {
    showMessageSnackbar,
    hideMessageSnackbar,
} from '../actions';

import PageBase from 'components/base/PageBase';

const SNACKBAR_MIN_SHOW_TIME = 2000;
var snackBarShownTime = null;

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        messageSnackbar: {
            ...state.messageSnackbarReducer,
            open: state.messageSnackbarReducer.open,
            message: state.messageSnackbarReducer.message,
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showMessageSnackbar: (message) => {
            if (!snackBarShownTime) {
                snackBarShownTime = new Date().getTime();
                dispatch(showMessageSnackbar(message));    
            }
        },
        hideMessageSnackbar: () => {
            const timeGap = new Date().getTime() - snackBarShownTime;

            if (timeGap < SNACKBAR_MIN_SHOW_TIME) {
                setTimeout(() => {
                    dispatch(hideMessageSnackbar());
                }, SNACKBAR_MIN_SHOW_TIME - timeGap);
            } else {
                snackBarShownTime = null;
                dispatch(hideMessageSnackbar());
            }

        }
    }
}

const PageBaseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageBase);

export default PageBaseContainer;
