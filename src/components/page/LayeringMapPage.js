// src/components/page/LayeringMapPage.js

import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { OpenLayers } from '@stickyboard/openlayers';

const styles = theme => ({
    root: {
        height: '100%',
    }
})

class LayeringMapPage extends React.Component {
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
                    isHeatmapMode={false}
                    zoom={13}
                    minZoom={2}
                    maxZoom={19}
                    longitude={127.024792}
                    latitude={37.504296}/>
            </div>
        )
    }
}

LayeringMapPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LayeringMapPage);
