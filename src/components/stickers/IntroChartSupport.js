import React from 'react';
import { Textfit } from 'react-textfit';

function IntroChartSupport(props) {
    const { colors } = props;

    return (
        <div style={{ width: '100%', height: '100%', padding: 8 }}>
            <Textfit
                mode="single"
                min={12}
                max={200}
                forceSingleModeWidth={false}
                style={{ height: '15%' }}>
                <p>{'Supports various chart components'}</p>
            </Textfit>
            <div style={{ height: '85%', textAlign: 'center' }}>
                <img
                    src="/static/image/intro_components.png"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            </div>
        </div>
    );
}

export default IntroChartSupport;
