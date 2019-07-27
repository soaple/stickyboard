// src/routes.js

import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Layout from './components/base/Layout';
import FullScreenLayout from './components/base/FullScreenLayout';

import IntroPage from './components/page/IntroPage';

// Component
import ComponentChartsPage from './components/page/ComponentChartsPage';
import ComponentHighchartsPage from './components/page/ComponentHighchartsPage';

import NotFoundPage from './components/page/NotFoundPage';

const routes = (
    <Route path="/">
        <Route component={Layout}>
            <IndexRedirect to="intro" />

            <Route path="intro" component={IntroPage}/>

            <Route path="components">
                <Route path="chart" component={ComponentChartsPage}/>
                <Route path="highcharts" component={ComponentHighchartsPage}/>
            </Route>
        </Route>
        <Route path="*" component={NotFoundPage}/>
    </Route>
)

export default routes;
