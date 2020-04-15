import React from 'react';
import { Weather7daysWidget } from '@stickyboard/openweathermap';

function OpenWeatherMap7days(props) {
    const { colors } = props;

    return <Weather7daysWidget latitude={37.504296} longitude={127.024792} />;
}

export default OpenWeatherMap7days;
