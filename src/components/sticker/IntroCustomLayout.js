import React from 'react';
import { Textfit } from 'react-textfit';

function IntroCustomLayout(props) {
    const { colors } = props;

    return (
        <div style={{ width: '100%', height: '100%', padding: 8 }}>
            <Textfit
                mode="single"
                min={16}
                max={200}
                forceSingleModeWidth={false}
                style={{ height: '15%' }}>
                Layout customization
            </Textfit>
            <div style={{ height: '85%', textAlign: 'center' }}>
                <img
                    src="/static/image/intro_custom_layout.png"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
}

export default IntroCustomLayout;
