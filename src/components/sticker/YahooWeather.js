import React from 'react';
import { YahooWeatherWidget } from '@stickyboard/yahoo-weather';

function YahooWeather(props) {
    const { colors } = props;

    return <YahooWeatherWidget latitude={37.504296} longitude={127.024792} />;
}

export default YahooWeather;
