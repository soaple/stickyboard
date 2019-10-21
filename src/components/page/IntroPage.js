// src/components/IntroPage.js

import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Mail from '@material-ui/icons/Mail';
import { Textfit } from 'react-textfit';

import { Sticker } from '@stickyboard/core';
import { OpenLayers } from '@stickyboard/openlayers';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = theme => ({
    logoImage: {
        display: 'block',
        // width: '100%',
        height: '50%',
        margin: 'auto',
        padding: theme.spacing(2),
    },
    introduction: {
        // width: '100%',
        height: '50%',
        padding: theme.spacing(2),
    },
    title: {
        height: '15%',
    },
    component: {
        height: '85%',
        textAlign: 'center',
    },
    alignHelper: {
        display: 'inline-block',
        height: '100%',
        verticalAlign: 'middle',
        textAlign: 'center',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    contact: {
        height: '40%',
        padding: theme.spacing(2),
    },
    contactButtonIcon: {
        marginLeft: theme.spacing(1),
    },
});

const initialLayout = {
    lg: [{'i':'CustomLayout','x':0,'y':6,'w':4,'h':6},{'i':'Introduction','x':0,'y':0,'w':4,'h':6},{'i':'DatabaseSupport','x':4,'y':6,'w':4,'h':6},{'i':'ChartSupport','x':4,'y':0,'w':4,'h':6},{'i':'MapSupport','x':8,'y':0,'w':4,'h':6},{'i':'Contact','x':8,'y':6,'w':4,'h':6}],
    md: [{'i':'CustomLayout','x':0,'y':6,'w':4,'h':6},{'i':'Introduction','x':0,'y':0,'w':4,'h':6},{'i':'DatabaseSupport','x':4,'y':6,'w':4,'h':6},{'i':'ChartSupport','x':4,'y':0,'w':4,'h':6},{'i':'MapSupport','x':8,'y':0,'w':4,'h':6},{'i':'Contact','x':8,'y':6,'w':4,'h':6}],
    sm: [{'i':'CustomLayout','x':4,'y':6,'w':4,'h':6},{'i':'Introduction','x':0,'y':0,'w':4,'h':6},{'i':'DatabaseSupport','x':0,'y':12,'w':4,'h':6},{'i':'ChartSupport','x':4,'y':0,'w':4,'h':6},{'i':'MapSupport','x':0,'y':6,'w':4,'h':6},{'i':'Contact','x':4,'y':12,'w':4,'h':6}],
    xs: [{'i':'CustomLayout','x':3,'y':6,'w':3,'h':6},{'i':'Introduction','x':0,'y':0,'w':3,'h':6},{'i':'DatabaseSupport','x':0,'y':12,'w':3,'h':6},{'i':'ChartSupport','x':3,'y':0,'w':3,'h':6},{'i':'MapSupport','x':0,'y':6,'w':3,'h':6},{'i':'Contact','x':3,'y':12,'w':3,'h':6}],
    xxs: [{'i':'CustomLayout','x':0,'y':21,'w':4,'h':7},{'i':'Introduction','x':0,'y':0,'w':4,'h':7},{'i':'DatabaseSupport','x':0,'y':28,'w':4,'h':7},{'i':'ChartSupport','x':0,'y':7,'w':4,'h':7},{'i':'MapSupport','x':0,'y':14,'w':4,'h':7},{'i':'Contact','x':0,'y':35,'w':4,'h':7}],
};

const initialBlocks = [{'i':'CustomLayout'},{'i':'Introduction'},{'i':'DatabaseSupport'},{'i':'ChartSupport'},{'i':'MapSupport'},{'i':'Contact'}];

class IntroPage extends React.Component {
    constructor (props) {
        super(props);
        console.log(props);

        this.state = {
        }
    }

    generateBlock = (block) => {
        const { classes } = this.props;

        switch (block.i) {
        case 'Introduction':
            return (
                <Sticker
                    key={block.i}>
                    <img
                        src='../static/image/StickyBoard_logo.png'
                        className={classes.logoImage}/>
                    <Textfit
                        mode='multi'
                        min={12}
                        max={200}
                        forceSingleModeWidth={false}
                        className={classes.introduction}
                        style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                        <p>
                            {'StickyBoard is on-demand dashboard solution based on React. Users can make their own dashboard with locating component.'}
                        </p>
                    </Textfit>
                </Sticker>
            )
        case 'DatabaseSupport':
            return (
                <Sticker
                    key={block.i}>
                    <Textfit
                        mode='single'
                        min={12}
                        max={200}
                        forceSingleModeWidth={false}
                        className={classes.title}
                        style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                        <p>{'Supports various type of DB connecting'}</p>
                    </Textfit>
                    <div className={classes.component}>
                        <span className={classes.alignHelper} />
                        <img
                            className={classes.image}
                            src='/static/image/intro_database.png'/>
                    </div>
                </Sticker>
            )
        case 'CustomLayout':
            return (
                <Sticker
                    key={block.i}>
                    <Textfit
                        mode='single'
                        min={12}
                        max={200}
                        forceSingleModeWidth={false}
                        className={classes.title}
                        style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                        <p>{'Layout customization'}</p>
                    </Textfit>
                    <div className={classes.component}>
                        <span className={classes.alignHelper} />
                        <img
                            className={classes.image}
                            src='/static/image/intro_custom_layout.png'/>
                    </div>
                </Sticker>
            )
        case 'ChartSupport':
            return (
                <Sticker
                    key={block.i}>
                    <Textfit
                        mode='single'
                        min={12}
                        max={200}
                        forceSingleModeWidth={false}
                        className={classes.title}
                        style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                        <p>{'Supports various chart components'}</p>
                    </Textfit>
                    <div className={classes.component}>
                        <span className={classes.alignHelper} />
                        <img
                            className={classes.image}
                            src='/static/image/intro_components.png'/>
                    </div>
                </Sticker>
            )
        case 'MapSupport':
            return (
                <Sticker
                    key={block.i}>
                    <Textfit
                        mode='single'
                        min={12}
                        max={200}
                        forceSingleModeWidth={false}
                        className={classes.title}
                        style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                        <p>{'Supports map and layer components'}</p>
                    </Textfit>
                    <div className={classes.component}>
                        <OpenLayers
                            isHeatmapMode={false}
                            zoom={12}
                            minZoom={2}
                            maxZoom={19}
                            longitude={127.024792}
                            latitude={37.504296}/>
                    </div>
                </Sticker>
            )
        case 'Contact':
            return (
                <Sticker
                    key={block.i}>
                    <Textfit
                        mode='multi'
                        min={12}
                        max={200}
                        forceSingleModeWidth={false}
                        className={classes.contact}
                        style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                        <p>{'Visit our Github page!'}</p>
                    </Textfit>
                    <div className={classes.component}>
                        <div>
                            <iframe
                                src='https://ghbtns.com/github-btn.html?user=soaple&repo=stickyboard&type=star&count=true&size=large'
                                frameBorder='0'
                                scrolling='0'
                                width='160px'
                                height='30px' />
                        </div>
                        <br />
                        <div>
                            <iframe
                                src='https://ghbtns.com/github-btn.html?user=soaple&type=follow&count=true&size=large'
                                frameBorder='0'
                                scrolling='0'
                                width='160px'
                                height='30px' />
                        </div>
                    </div>
                </Sticker>
            )
        }
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <PageBaseContainer
                generateBlock={this.generateBlock}
                initialLayout={initialLayout}
                initialBlocks={initialBlocks} />
        )
    }
}

IntroPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntroPage);
