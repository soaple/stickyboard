// src/components/base/App.js

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// Layout
import Layout from './Layout';
import FullScreenLayout from './FullScreenLayout';
// Loading
import LoadingPage from 'components/page/LoadingPage';
// Signing
const SignInPage = Loadable({
    loader: () => import('components/page/SignInPage'),
    loading: LoadingPage,
});
const SignUpPage = Loadable({
    loader: () => import('components/page/SignUpPage'),
    loading: LoadingPage,
});
// Index
const IntroPage = Loadable({
    loader: () => import('components/page/IntroPage'),
    loading: LoadingPage,
});
// Component
const ComponentChartsPage= Loadable({
    loader: () => import('components/page/ComponentChartsPage'),
    loading: LoadingPage,
});
const ComponentHighchartsPage= Loadable({
    loader: () => import('components/page/ComponentHighchartsPage'),
    loading: LoadingPage,
});
const ComponentTablePage= Loadable({
    loader: () => import('components/page/ComponentTablePage'),
    loading: LoadingPage,
});
const ComponentNumberPage= Loadable({
    loader: () => import('components/page/ComponentNumberPage'),
    loading: LoadingPage,
});
const ComponentWeatherPage= Loadable({
    loader: () => import('components/page/ComponentWeatherPage'),
    loading: LoadingPage,
});
// Layering
const LayeringMapPage= Loadable({
    loader: () => import('components/page/LayeringMapPage'),
    loading: LoadingPage,
});
const LayeringHeatMapPage= Loadable({
    loader: () => import('components/page/LayeringHeatMapPage'),
    loading: LoadingPage,
});
// Setting
const SettingsPage= Loadable({
    loader: () => import('components/page/SettingsPage'),
    loading: LoadingPage,
});
// Superuser
const SuperuserPage= Loadable({
    loader: () => import('components/page/SuperuserPage'),
    loading: LoadingPage,
});
// Not found
const NotFoundPage= Loadable({
    loader: () => import('components/page/NotFoundPage'),
    loading: LoadingPage,
});

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
