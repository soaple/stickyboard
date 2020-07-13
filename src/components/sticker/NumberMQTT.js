import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { MqttComponent } from '@stickyboard/mqtt';

function NumberMQTT(props) {
    const { colors } = props;

    return (
        <MqttComponent
            serverUrl={'wss://test.mosquitto.org:8081'}
            subscribeTopic={'revspace/sensors/temperature'}
        />
    );
}

export default NumberMQTT;
