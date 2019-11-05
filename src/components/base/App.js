// src/components/base/App.js

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Layout
import Layout from './Layout';
import FullScreenLayout from './FullScreenLayout';
// Signing
const SignInPage = loadable(() => import('components/page/SignInPage'));
const SignUpPage = loadable(() => import('components/page/SignUpPage'));
// Index
const IntroPage = loadable(() => import('components/page/IntroPage'));
// Component
const ComponentChartsPage= Loadable(() => import('components/page/ComponentChartsPage'));
const ComponentHighchartsPage= Loadable(() => import('components/page/ComponentHighchartsPage'));
const ComponentTablePage= Loadable(() => import('components/page/ComponentTablePage'));
const ComponentNumberPage= Loadable(() => import('components/page/ComponentNumberPage'));
const ComponentWeatherPage= Loadable(() => import('components/page/ComponentWeatherPage'));
// Layering
const LayeringMapPage= Loadable(() => import('components/page/LayeringMapPage'));
const LayeringHeatMapPage= Loadable(() => import('components/page/LayeringHeatMapPage'));
// Setting
const SettingsPage= Loadable(() => import('components/page/SettingsPage'));
// Superuser
const SuperuserPage= Loadable(() => import('components/page/SuperuserPage'));
// Not found
const NotFoundPage= Loadable(() => import('components/page/NotFoundPage'));

const App = () => (
    <Router>
        <Switch>
            {/* Signing pages (FullScreenLayout) */}
            <Route path={['/signin', '/signup']}>
                <FullScreenLayout>
                    <Switch>
                        <Route path='/signin' component={SignInPage} />
                        <Route path='/signup' component={SignUpPage} />
                    </Switch>
                </FullScreenLayout>
            </Route>

            {/* other pages (Layout) */}
            <Route path='/'>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={IntroPage} />
                        {/* Component */}
                        <Route path='/components/chart' component={ComponentChartsPage} />
                        <Route path='/components/highcharts' component={ComponentHighchartsPage} />
                        <Route path='/components/table' component={ComponentTablePage} />
                        <Route path='/components/number' component={ComponentNumberPage} />
                        <Route path='/components/weather' component={ComponentWeatherPage} />
                        {/* Layering */}
                        <Route path="/layering/map" component={LayeringMapPage} />
                        <Route path="/layering/heatmap" component={LayeringHeatMapPage} />
                        {/* Setting */}
                        <Route path="/settings" component={SettingsPage} />
                        {/* Superuser */}
                        <Route path="/superuser"component={SuperuserPage} />
                        {/* Not found */}
                        <Route path='*' component={NotFoundPage} />
                    </Switch>
                </Layout>
            </Route>
        </Switch>
    </Router>
)

App.propTypes = {
};

export default App;
