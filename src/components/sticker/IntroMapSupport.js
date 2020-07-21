import React from 'react';
import { Textfit } from 'react-textfit';
import { OpenLayers } from '@stickyboard/openlayers';

function IntroMapSupport(props) {
    const { colors } = props;

    return (
        <div style={{ width: '100%', height: '100%', padding: 8 }}>
            <Textfit
                mode="single"
                min={16}
                max={200}
                forceSingleModeWidth={false}
                style={{ height: '15%' }}>
                Supports map and layer components
            </Textfit>
            <div style={{ height: '85%', textAlign: 'center' }}>
                <OpenLayers
                    isHeatmapMode={false}
                    zoom={12}
                    minZoom={2}
                    maxZoom={19}
                    longitude={127.024792}
                    latitude={37.504296}
                />
            </div>
        </div>
    );
}

export default IntroMapSupport;
