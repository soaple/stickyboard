import React from 'react';
import styled from 'styled-components';
import { JsonViewer } from '@stickyboard/json-viewer';

import ApiManager from 'network/ApiManager';
import StatusCode from 'network/StatusCode';

class DatabaseMongoDB extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jsonObject: null,
        };
    }

    componentDidMount() {
        ApiManager.MongoDB.readUsers(0, 10, this.readUsersCallback);
    }

    readUsersCallback = (statusCode, response) => {
        switch (statusCode) {
            case StatusCode.OK:
                this.setState({
                    jsonObject: response,
                });
                break;
            default:
                alert(response.msg);
                break;
        }
    };

    render() {
        const { jsonObject } = this.state;

        return (
            <div
                style={{
                    height: '100%',
                    padding: 8,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <img
                    src="/static/image/database_mongodb_logo.png"
                    style={{ maxHeight: 56, objectFit: 'contain' }}
                />
                <JsonViewer jsonObject={jsonObject} />
            </div>
        );
    }
}

export default DatabaseMongoDB;
