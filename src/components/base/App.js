// src/components/base/App.js

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Layout
import Layout from './Layout';
import FullScreenLayout from './FullScreenLayout';

import IntroPage from '../page/IntroPage';
// Component
import ComponentChartsPage from '../page/ComponentChartsPage';
import ComponentHighchartsPage from '../page/ComponentHighchartsPage';
import ComponentTablePage from '../page/ComponentTablePage';
import ComponentNumberPage from '../page/ComponentNumberPage';
// Layering
import LayeringMapPage from '../page/LayeringMapPage';
import LayeringHeatMapPage from '../page/LayeringHeatMapPage';

import NotFoundPage from '../page/NotFoundPage';

const App = ({ store }) => (
    <Provider store={store}>
        <Layout>
            <Router>
                <Switch>
                    <Route exact path='/' component={IntroPage}/>
                    {/* Components */}
                    <Route path='/components/chart' component={ComponentChartsPage}/>
                    <Route path='/components/highcharts' component={ComponentHighchartsPage}/>
                    <Route path='/components/table' component={ComponentTablePage}/>
                    <Route path='/components/number' component={ComponentNumberPage}/>
                    {/* Layering */}
                    <Route path="/layering/map" component={LayeringMapPage}/>
                    <Route path="/layering/heatmap" component={LayeringHeatMapPage}/>
                    <Route path='*' component={NotFoundPage}/>
                </Switch>
            </Router>
        </Layout>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object.isRequired
}

export default App;
