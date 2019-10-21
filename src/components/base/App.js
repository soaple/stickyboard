// src/components/base/App.js

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Layout
import Layout from './Layout';
import FullScreenLayout from './FullScreenLayout';
// Signing
import SignInPage from 'components/page/SignInPage';
import SignUpPage from 'components/page/SignUpPage';
// Index
import IntroPage from 'components/page/IntroPage';
// Component
import ComponentChartsPage from 'components/page/ComponentChartsPage';
import ComponentHighchartsPage from 'components/page/ComponentHighchartsPage';
import ComponentTablePage from 'components/page/ComponentTablePage';
import ComponentNumberPage from 'components/page/ComponentNumberPage';
import ComponentWeatherPage from 'components/page/ComponentWeatherPage';
// Layering
import LayeringMapPage from 'components/page/LayeringMapPage';
import LayeringHeatMapPage from 'components/page/LayeringHeatMapPage';
// Setting
import SettingsPage from 'components/page/SettingsPage';
// Superuser
import SuperuserPage from 'components/page/SuperuserPage';
// Not found
import NotFoundPage from 'components/page/NotFoundPage';

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
