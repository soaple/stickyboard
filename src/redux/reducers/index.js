// src/redux/reducers/index.js

import { combineReducers } from 'redux';
// Reducers
import messageSnackbarReducer from './messageSnackbarReducer';
import dialogReducer from './dialogReducer';

export default combineReducers({
    messageSnackbarReducer,
    dialogReducer,
});
