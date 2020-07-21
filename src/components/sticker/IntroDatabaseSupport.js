import React from 'react';
import { Textfit } from 'react-textfit';

function IntroDatabaseSupport(props) {
    const { colors } = props;

    return (
        <div style={{ width: '100%', height: '100%', padding: 8 }}>
            <Textfit
                mode="single"
                min={16}
                max={200}
                forceSingleModeWidth={false}
                style={{ height: '15%' }}>
                Supports various type of DB connecting
            </Textfit>
            <div style={{ height: '85%', textAlign: 'center' }}>
                <img
                    src="/static/image/intro_database.png"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
}

export default IntroDatabaseSupport;
