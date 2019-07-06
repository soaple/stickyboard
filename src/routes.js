// src/routes.js

import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Layout from './components/base/Layout';
import FullScreenLayout from './components/base/FullScreenLayout';

import IntroPage from './components/page/IntroPage';

import NotFoundPage from './components/page/NotFoundPage';

const routes = (
    <Route path="/">
        <Route component={Layout}>
            <IndexRedirect to="intro" />

            <Route path="intro" component={IntroPage}/>
        </Route>
        <Route path="*" component={NotFoundPage}/>
    </Route>
)

export default routes;
