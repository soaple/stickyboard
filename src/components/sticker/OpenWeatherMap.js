import React from 'react';
import { WeatherWidget } from '@stickyboard/openweathermap';

function OpenWeatherMap(props) {
    const { colors } = props;

    return <WeatherWidget latitude={37.504296} longitude={127.024792} />;
}

export default OpenWeatherMap;
