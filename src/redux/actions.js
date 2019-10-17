// src/redux/actions.js

/*
 * action types
 */
export const SHOW_MESSAGE_SNACKBAR = 'SHOW_MESSAGE_SNACKBAR';
export const HIDE_MESSAGE_SNACKBAR = 'HIDE_MESSAGE_SNACKBAR';
 
/*
 * action creators
 */
export function showMessageSnackbar(message) {
    return { type: SHOW_MESSAGE_SNACKBAR, open: true, message: message }
}

export function hideMessageSnackbar() {
    return { type: HIDE_MESSAGE_SNACKBAR, open: false }
}
