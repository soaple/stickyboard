// src/redux/reducers/rootReducer.js

import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import _ from 'underscore';

import {
    SHOW_MESSAGE_SNACKBAR,
    HIDE_MESSAGE_SNACKBAR,
} from '../actions/actions';

const initialState = {
    // Message Snackbar
    open: false,
    shownTime: null,
    message: 'Loading...',
}

const SNACKBAR_MIN_SHOW_TIME = 2000;

function messageSnackbar(state = initialState, action) {
    switch (action.type) {
        case SHOW_MESSAGE_SNACKBAR:
            let message = state.message;
            if (typeof action.message !== undefined) {
                message = action.message;
            }

            return _.extendOwn({}, state, {
                open: action.open,
                shownTime: new Date().getTime(),
                message: message,
            });
            break;
        case HIDE_MESSAGE_SNACKBAR:
            const timeGap = new Date().getTime() - state.messageSnackbarShownTime;

            if (timeGap < SNACKBAR_MIN_SHOW_TIME) {
                setTimeout(
                    () => { messageSnackbar(state, action) },
                    SNACKBAR_MIN_SHOW_TIME - timeGap);
            } else {
                return _.extendOwn({}, state, {
                    open: action.open,
                });
            }
            break;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    messageSnackbar,
});

export default rootReducer;
