import React from 'react';
import { MqttComponent } from '@stickyboard/mqtt';

function NumberMQTT(props) {
    const { colors } = props;

    return (
        <MqttComponent
            serverUrl={'wss://test.mosquitto.org:8081'}
            subscribeTopic={'revspace/sensors/temperature'}
            maxValue={'30.0 °C'}
            minValue={'18.0 °C'}
        />
    );
}

export default NumberMQTT;
