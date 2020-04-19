// src/redux/actions.js

/*
 * action types
 */
 // Message Snackbar
export const SHOW_MESSAGE_SNACKBAR = 'SHOW_MESSAGE_SNACKBAR';
export const HIDE_MESSAGE_SNACKBAR = 'HIDE_MESSAGE_SNACKBAR';
// Dialog
export const SHOW_DIALOG = 'SHOW_DIALOG';
export const HIDE_DIALOG = 'HIDE_DIALOG';
 
/*
 * action creators
 */
 // Message Snackbar
export function showMessageSnackbar(message) {
    return { type: SHOW_MESSAGE_SNACKBAR, open: true, message: message }
}

export function hideMessageSnackbar() {
    return { type: HIDE_MESSAGE_SNACKBAR, open: false }
}
// Dialog
export function showDialog(dialogKey, params, callback) {
    return { type: SHOW_DIALOG, dialogKey: dialogKey, params: params, callback: callback }
}

export function hideDialog(dialogKey) {
    return { type: HIDE_DIALOG, dialogKey: dialogKey }
}
