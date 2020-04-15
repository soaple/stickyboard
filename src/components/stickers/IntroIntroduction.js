import React from 'react';
import { Textfit } from 'react-textfit';

function IntroIntroduction(props) {
    const { colors } = props;

    return (
        <div style={{ width: '100%', height: '100%', padding: 8 }}>
            <img
                src="/static/image/StickyBoard_logo.png"
                style={{
                    display: 'block',
                    height: '50%',
                    margin: 'auto',
                    padding: 8,
                }}
            />
            <Textfit
                mode="multi"
                min={12}
                max={200}
                forceSingleModeWidth={false}
                style={{ height: '50%', padding: 8 }}>
                <p>
                    {
                        'StickyBoard is on-demand dashboard solution based on React. Users can make their own dashboard with locating component.'
                    }
                </p>
            </Textfit>
        </div>
    );
}

export default IntroIntroduction;
