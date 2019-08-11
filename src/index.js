// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import App from './components/base/App';

// React-Redux store
const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => {
    // console.log(store.getState())
});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
