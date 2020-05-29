// src/components/base/App.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Layout
import Layout from './Layout';
import FullScreenLayout from './FullScreenLayout';
// Signing
const SignInPage = loadable(() => import('components/page/SignInPage'));
const SignUpPage = loadable(() => import('components/page/SignUpPage'));
// Introduction
const IntroPage = loadable(() => import('components/page/IntroPage'));
const IntroDatabasePage = loadable(() => import('components/page/IntroDatabasePage'));
// Component
const ComponentChartsPage= loadable(() => import('components/page/ComponentChartsPage'));
const ComponentHighchartsPage= loadable(() => import('components/page/ComponentHighchartsPage'));
const ComponentTablePage= loadable(() => import('components/page/ComponentTablePage'));
const ComponentSmartTablePage= loadable(() => import('components/page/ComponentSmartTablePage'));
const ComponentNumberPage= loadable(() => import('components/page/ComponentNumberPage'));
const ComponentWeatherPage= loadable(() => import('components/page/ComponentWeatherPage'));
const ComponentDialogPageContainer= loadable(() => import('redux/containers/ComponentDialogPageContainer'));
// Layering
const LayeringMapPage= loadable(() => import('components/page/LayeringMapPage'));
const LayeringHeatMapPage= loadable(() => import('components/page/LayeringHeatMapPage'));
// Setting
const SettingsPage= loadable(() => import('components/page/SettingsPage'));
// Superuser
const SuperuserPage= loadable(() => import('components/page/SuperuserPage'));
// Not found
const NotFoundPage= loadable(() => import('components/page/NotFoundPage'));

// Dialog
import DialogDict from 'components/dialog';
// Manager
import LocalStorageManager from 'manager/LocalStorageManager';
// Theme
import StickyBoardThemes from 'theme/StickyBoardThemes';
// Constants
import LocalStorageConst from 'constants/LocalStorageConst';

const themeKeys = Object.keys(StickyBoardThemes);

class App extends React.Component {
    constructor(props) {
        super(props);

        const initialThemeKey = LocalStorageManager.getItem(
            LocalStorageConst.KEY.THEME_KEY,
            themeKeys[0]);
        const initialTheme = StickyBoardThemes[initialThemeKey] || StickyBoardThemes[themeKeys[0]];

        this.state = {
            selectedThemeKey: initialThemeKey,
            muiTheme: createMuiTheme(initialTheme),
        }
    }

    onThemeChange = (themeKey) => {
        const selectedTheme = StickyBoardThemes[themeKey];

        this.setState({
            selectedThemeKey: themeKey,
            muiTheme: createMuiTheme(selectedTheme)
        }, () => {
            LocalStorageManager.setItem(
                LocalStorageConst.KEY.THEME_KEY,
                themeKey);
        });
    }

    render() {
        const {
            selectedThemeKey,
            muiTheme,
        } = this.state;
        const { dialog, hideDialog } = this.props;

        return (
            <MuiThemeProvider theme={muiTheme}>
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
                            <Layout
                                themeKeys={themeKeys}
                                selectedThemeKey={selectedThemeKey}
                                onThemeChange={this.onThemeChange}>
                                <Switch>
                                    <Redirect exact from='/' to='/intro' />

                                    {/* Intro */}
                                    <Route exact path='/intro' component={IntroPage} />
                                    <Route exact path='/intro/database' component={IntroDatabasePage} />
                                    {/* Component */}
                                    <Route path='/components/chart' component={ComponentChartsPage} />
                                    <Route path='/components/highcharts' component={ComponentHighchartsPage} />
                                    <Route path='/components/table' component={ComponentTablePage} />
                                    <Route path='/components/smart-table' component={ComponentSmartTablePage} />
                                    <Route path='/components/number' component={ComponentNumberPage} />
                                    <Route path='/components/weather' component={ComponentWeatherPage} />
                                    <Route path='/components/dialog' component={ComponentDialogPageContainer} />
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

                {/* Centralized Dialogs */}
                {Object.keys(DialogDict).map((dialogKey, index) => {
                    const DialogObject = DialogDict[dialogKey];
                    if (
                        DialogObject &&
                        typeof DialogObject.Component === 'object'
                    ) {
                        const dialogState = dialog[dialogKey];
                        return (
                            <DialogObject.Component
                                key={dialogKey}
                                open={dialogState.isOpen}
                                params={dialogState.params}
                                callback={dialogState.callback}
                                onClose={() => {
                                    hideDialog(dialogKey);
                                }} />
                        );
                    } else {
                        return null;
                    }
                })}
            </MuiThemeProvider>
        )
    }
}

export default App;
