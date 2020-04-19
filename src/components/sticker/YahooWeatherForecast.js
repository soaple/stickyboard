import React from 'react';
import { YahooWeatherForecastWidget } from '@stickyboard/yahoo-weather';

function YahooWeatherForecast(props) {
    const { colors } = props;

    return (
        <YahooWeatherForecastWidget
            latitude={37.504296}
            longitude={127.024792}
        />
    );
}

export default YahooWeatherForecast;
