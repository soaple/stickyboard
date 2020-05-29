import React from 'react';
import { JsonViewer } from '@stickyboard/json-viewer';

function DatabaseMongoDB(props) {
    const jsonObject = {
        a: 1,
        b: 2,
        c: 3,
    };

    return <JsonViewer jsonObject={jsonObject} />;
}

export default DatabaseMongoDB;
