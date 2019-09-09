// src/components/page/LayeringHeatMapPage.js

import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { OpenLayers } from '@stickyboard/openlayers';

const styles = theme => ({
    root: {
        height: '100%',
    }
})

class LayeringHeatMapPage extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
        }
    }

    render () {
        const { classes, theme } = this.props

        return (
            <div className={classes.root}>
                <OpenLayers
                    isHeatmapMode={true}
                    zoom={3}
                    minZoom={2}
                    maxZoom={17}
                    longitude={127.024792}
                    latitude={37.504296}/>
            </div>
        )
    }
}

LayeringHeatMapPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LayeringHeatMapPage);
