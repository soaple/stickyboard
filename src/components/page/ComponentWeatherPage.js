// src/components/page/ComponentWeatherPage.js

import React from 'react'
import PropTypes from 'prop-types';

import _ from 'underscore'

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import TvIcon from '@material-ui/icons/Tv';

import { Sticker, Board } from '@stickyboard/core';
import {
    WeatherWidget,
    Weather3daysWidget,
    Weather7daysWidget
} from '@stickyboard/openweathermap';
import {
    YahooWeatherWidget,
    YahooWeatherForecastWidget
} from '@stickyboard/yahoo-weather';

import StickyBoardColors from '../../theme/StickyBoardColors';
import Const from '../../constants/Const';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
    },
    menuContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        height: 120,
        right: 16,
        bottom: 16,
        zIndex: 2000,
    },
})

class ComponentWeatherPage extends React.Component {
    constructor (props) {
        super(props);
        this.board = React.createRef();

        this.state = {
            // React Grid Layout
            currentBreakpoint: 'lg',
            layouts: {
                lg: [{"i":"OpenWeatherMap","x":0,"y":0,"w":4,"h":5},{"i":"OpenWeatherMap3days","x":4,"y":0,"w":8,"h":5},{"i":"OpenWeatherMap7days","x":0,"y":5,"w":12,"h":6},{"i":"YahooWeather","x":8,"y":11,"w":4,"h":5},{"i":"YahooWeatherForecast","x":0,"y":11,"w":8,"h":5}],
                md: [{"i":"OpenWeatherMap","x":0,"y":0,"w":4,"h":5},{"i":"OpenWeatherMap3days","x":4,"y":0,"w":8,"h":5},{"i":"OpenWeatherMap7days","x":0,"y":5,"w":12,"h":6},{"i":"YahooWeather","x":8,"y":11,"w":4,"h":5},{"i":"YahooWeatherForecast","x":0,"y":11,"w":8,"h":5}],
                sm: [{"i":"OpenWeatherMap","x":0,"y":0,"w":4,"h":5},{"i":"OpenWeatherMap3days","x":4,"y":0,"w":4,"h":5},{"i":"OpenWeatherMap7days","x":0,"y":5,"w":8,"h":6},{"i":"YahooWeather","x":4,"y":11,"w":4,"h":5},{"i":"YahooWeatherForecast","x":0,"y":11,"w":4,"h":5}],
                xs: [{"i":"OpenWeatherMap","x":0,"y":0,"w":6,"h":5},{"i":"OpenWeatherMap3days","x":0,"y":5,"w":6,"h":5},{"i":"OpenWeatherMap7days","x":0,"y":10,"w":6,"h":6},{"i":"YahooWeather","x":0,"y":21,"w":6,"h":5},{"i":"YahooWeatherForecast","x":0,"y":16,"w":6,"h":5}],
                xxs: [{"i":"OpenWeatherMap","x":0,"y":0,"w":4,"h":5},{"i":"OpenWeatherMap3days","x":0,"y":5,"w":4,"h":5},{"i":"OpenWeatherMap7days","x":0,"y":10,"w":4,"h":6},{"i":"YahooWeather","x":0,"y":21,"w":4,"h":5},{"i":"YahooWeatherForecast","x":0,"y":16,"w":4,"h":5}],
            },
            blocks: [{"i":"OpenWeatherMap"},{"i":"OpenWeatherMap3days"},{"i":"OpenWeatherMap7days"},{"i":"YahooWeather"},{"i":"YahooWeatherForecast"}],
            isEditingMode: true,
        }
    }

    generateBlock = (block, classes) => {
        switch (block.i) {
            case 'OpenWeatherMap':
                return (
                    <Sticker key={block.i}>
                        <WeatherWidget
                            latitude={37.504296}
                            longitude={127.024792} />
                    </Sticker>
                )
            case 'OpenWeatherMap3days':
                return (
                    <Sticker key={block.i}>
                        <Weather3daysWidget
                            latitude={37.504296}
                            longitude={127.024792} />
                    </Sticker>
                )
            case 'OpenWeatherMap7days':
                return (
                    <Sticker key={block.i}>
                        <Weather7daysWidget
                            latitude={37.504296}
                            longitude={127.024792} />
                    </Sticker>
                )
            case 'YahooWeather':
                return (
                    <Sticker key={block.i}>
                        <YahooWeatherWidget
                            latitude={37.504296}
                            longitude={127.024792} />
                    </Sticker>
                )
            case 'YahooWeatherForecast':
                return (
                    <Sticker key={block.i}>
                        <YahooWeatherForecastWidget
                            latitude={37.504296}
                            longitude={127.024792} />
                    </Sticker>
                )
        }
    }

    render() {
        const { layouts, isEditingMode } = this.state;
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <Board
                    ref={this.board}
                    layouts={layouts}
                    onLayoutChange={(newLayouts) => { this.setState({ layouts: newLayouts }); }}>
                    {this.state.blocks.map((block, index) => {
                        return this.generateBlock(block, classes)
                    })}
                </Board>

                <div className={classes.menuContainer}>
                    <Fab
                        color="secondary"
                        aria-label="edit"
                        onClick={() => { this.board.current.toggleEditingMode(); }}>
                        <EditIcon />
                    </Fab>

                    <Fab
                        color="primary"
                        aria-label="tv"
                        onClick={() => { this.board.current.toggleTvMode(); }}>
                        <TvIcon />
                    </Fab>
                </div>
            </div>
        )
    }
}

ComponentWeatherPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentWeatherPage);
