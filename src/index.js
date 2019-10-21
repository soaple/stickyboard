// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'redux/reducers';
import App from 'components/base/App';

// React-Redux store
const store = createStore(reducers);
const unsubscribe = store.subscribe(() => {
    // console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
