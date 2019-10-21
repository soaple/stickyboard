// src/redux/reducers/index.js

import { combineReducers } from 'redux';
// Reducers
import messageSnackbarReducer from './messageSnackbarReducer';

export default combineReducers({
    messageSnackbarReducer,
});
