// src/redux/reducers/dialogReducer.js

import { SHOW_DIALOG, HIDE_DIALOG } from 'redux/actions';
import DialogDict from 'components/dialog';

let dialogState = {};
Object.keys(DialogDict).forEach((dialogKey) => {
    dialogState[dialogKey] = {
        isOpen: false,
        params: {},
        callback: null,
    };
});

const initialState = dialogState;

function dialogReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_DIALOG:
            return {
                ...state,
                [action.dialogKey]: {
                    isOpen: true,
                    params: action.params,
                    callback: action.callback,
                },
            };
        case HIDE_DIALOG:
            return {
                ...state,
                [action.dialogKey]: {
                    isOpen: false,
                    params: state[action.dialogKey].params,
                    callback: null,
                },
            };
        default:
            return state;
    }
}

export default dialogReducer;
