import React from 'react';
import { Weather3daysWidget } from '@stickyboard/openweathermap';

function OpenWeatherMap3days(props) {
    const { colors } = props;

    return <Weather3daysWidget latitude={37.504296} longitude={127.024792} />;
}

export default OpenWeatherMap3days;
