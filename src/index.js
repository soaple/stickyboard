// src/index.js

// For IE 11 support
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11';
// Google Analytics
import ReactGA from 'react-ga';
const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;
if (GA_TRACKING_ID) {
    const gaTrackingIdRegExp = new RegExp(/(UA-[0-9]*-[0-9])/i);
    if (gaTrackingIdRegExp.test(GA_TRACKING_ID)) {
        ReactGA.initialize(GA_TRACKING_ID);
    }
}
// React
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
