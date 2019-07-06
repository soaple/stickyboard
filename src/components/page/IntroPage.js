// src/components/IntroPage.js

import React from 'react'
import PropTypes from 'prop-types';

import _ from 'underscore'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Mail from '@material-ui/icons/Mail';

import { Responsive, WidthProvider } from 'react-grid-layout'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

// import OpenLayers from '../openlayers/OpenLayers';

import { Textfit } from 'react-textfit';

import StickyBoardColors from '../../theme/StickyBoardColors';
import Const from '../../constants/Const';

const styles = theme => ({
    root: {
        height: '100%',
        padding: theme.spacing.unit * 2,
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
    logoImage: {
        display: 'block',
        // width: '100%',
        height: '50%',
        margin: 'auto',
        padding: theme.spacing.unit * 2,
    },
    introduction: {
        // width: '100%',
        height: '50%',
        padding: theme.spacing.unit * 2,
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
        padding: theme.spacing.unit * 2,
    },
    contactButtonIcon: {
        marginLeft: theme.spacing.unit,
    },
});

class IntroPage extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            // React Grid Layout
            currentBreakpoint: 'lg',
            layouts: {
                lg: [{"i":"CustomLayout","x":0,"y":6,"w":4,"h":6},{"i":"Introduction","x":0,"y":0,"w":4,"h":6},{"i":"DatabaseSupport","x":4,"y":6,"w":4,"h":6},{"i":"ChartSupport","x":4,"y":0,"w":4,"h":6},{"i":"MapSupport","x":8,"y":0,"w":4,"h":6},{"i":"Contact","x":8,"y":6,"w":4,"h":6}],
                md: [{"i":"CustomLayout","x":0,"y":6,"w":4,"h":6},{"i":"Introduction","x":0,"y":0,"w":4,"h":6},{"i":"DatabaseSupport","x":4,"y":6,"w":4,"h":6},{"i":"ChartSupport","x":4,"y":0,"w":4,"h":6},{"i":"MapSupport","x":8,"y":0,"w":4,"h":6},{"i":"Contact","x":8,"y":6,"w":4,"h":6}],
                sm: [{"i":"CustomLayout","x":4,"y":6,"w":4,"h":6},{"i":"Introduction","x":0,"y":0,"w":4,"h":6},{"i":"DatabaseSupport","x":0,"y":12,"w":4,"h":6},{"i":"ChartSupport","x":4,"y":0,"w":4,"h":6},{"i":"MapSupport","x":0,"y":6,"w":4,"h":6},{"i":"Contact","x":4,"y":12,"w":4,"h":6}],
                xs: [{"i":"CustomLayout","x":3,"y":6,"w":3,"h":6},{"i":"Introduction","x":0,"y":0,"w":3,"h":6},{"i":"DatabaseSupport","x":0,"y":12,"w":3,"h":6},{"i":"ChartSupport","x":3,"y":0,"w":3,"h":6},{"i":"MapSupport","x":0,"y":6,"w":3,"h":6},{"i":"Contact","x":3,"y":12,"w":3,"h":6}],
                xxs: [{"i":"CustomLayout","x":0,"y":21,"w":4,"h":7},{"i":"Introduction","x":0,"y":0,"w":4,"h":7},{"i":"DatabaseSupport","x":0,"y":28,"w":4,"h":7},{"i":"ChartSupport","x":0,"y":7,"w":4,"h":7},{"i":"MapSupport","x":0,"y":14,"w":4,"h":7},{"i":"Contact","x":0,"y":35,"w":4,"h":7}],
            },
            blocks: [{"i":"CustomLayout"},{"i":"Introduction"},{"i":"DatabaseSupport"},{"i":"ChartSupport"},{"i":"MapSupport"},{"i":"Contact"}],
            layoutUpdateFlag: true,
            isEditingMode: true,
        }
    }

    componentDidMount () {
    }

    toggleEditingMode = () => {
        let currentEditingMode = this.state.isEditingMode;

        let layouts = this.getLayouts(!currentEditingMode);
        this.setState({
            layouts: {},
            layoutUpdateFlag: false,
            isEditingMode: !currentEditingMode,
        }, () => {
            this.setState({
                layouts: layouts,
                layoutUpdateFlag: true,
            })
        });
    }

    getLayouts = (isEditingMode) => {
        let layouts = this.state.layouts;
        _.each(layouts, (layout) => {
            layout.forEach((block) => {
                block.static = !isEditingMode;
                block.isDraggable = isEditingMode;
                block.isResizable = isEditingMode;
                block.minW = 2;
                block.maxW = 12;
                block.minH = 2;
                block.maxH = 16;
            });
        });

        return layouts;
    }

    onBreakpointChange = (breakpoint) => {
        this.setState({
            currentBreakpoint: breakpoint,
            isEditingMode: breakpoint === 'lg' || breakpoint === 'md',
        });
    }

    onLayoutChange = (currentLayout, allLayouts) => {
        // console.log('onLayoutChange', currentLayout, allLayouts);

        if (this.state.layoutUpdateFlag) {
            this.setState({
                layouts: allLayouts,
            }, () => {
                // Generate tiny layout for saving to the server
                let newLayouts = {};

                let breakpoints = _.keys(allLayouts);
                _.each(breakpoints, (breakpoint) => {
                    let newLayout = [];
                    let layout = allLayouts[breakpoint];
                    _.each(layout, (block) => {
                        let newBlock = {};
                        newBlock.i = block.i;
                        newBlock.x = block.x;
                        newBlock.y = block.y;
                        newBlock.w = block.w;
                        newBlock.h = block.h;

                        newLayout.push(newBlock);
                    });

                    newLayouts[breakpoint] = newLayout;
                });

                // console.log(newLayouts);
                // console.log(JSON.stringify(newLayouts[this.state.currentBreakpoint]));

                // TODO: Save the user's personal layout
                // console.log(JSON.stringify(newLayouts));
            });
        }
    }

    generateBlock = (block, classes) => {
        switch (block.i) {
        case 'Introduction':
            return (
                <Paper
                    key={block.i}
                    className={classes.paper}>
                    <img
                        src='../static/image/StickyBoard_logo.png'
                        className={classes.logoImage}/>
                    <Textfit
                        mode="multi"
                        min={12}
                        max={200}
                        forceSingleModeWidth={false}
                        className={classes.introduction}
                        style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                        <p>
                            {'StickyBoard is on-demand dashboard solution based on React. Users can make their own dashboard with locating component.'}
                        </p>
                    </Textfit>
                </Paper>
            )
        case 'DatabaseSupport':
            return (
                <Paper
                    key={block.i}
                    className={classes.paper}>
                    <Textfit
                        mode="single"
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
                            src="/static/image/intro_database.png"/>
                    </div>
                </Paper>
            )
        case 'CustomLayout':
            return (
                <Paper
                    key={block.i}
                    className={classes.paper}>
                    <Textfit
                        mode="single"
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
                            src="/static/image/intro_custom_layout.png"/>
                    </div>
                </Paper>
            )
        case 'ChartSupport':
            return (
                <Paper
                    key={block.i}
                    className={classes.paper}>
                    <Textfit
                        mode="single"
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
                            src="/static/image/intro_components.png"/>
                    </div>
                </Paper>
            )
        case 'MapSupport':
            return (
                <Paper
                    key={block.i}
                    className={classes.paper}>
                    <Textfit
                        mode="single"
                        min={12}
                        max={200}
                        forceSingleModeWidth={false}
                        className={classes.title}
                        style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                        <p>{'Supports map and layer components'}</p>
                    </Textfit>
                    {/*
                    <div className={classes.component}>
                        <OpenLayers
                            isHeatmapMode={false}
                            zoom={12}
                            minZoom={2}
                            maxZoom={19}
                            longitude={127.024792}
                            latitude={37.504296}/>
                    </div>
                    */}
                </Paper>
            )
        case 'Contact':
            return (
                <Paper
                    key={block.i}
                    className={classes.paper}>
                    <Textfit
                       mode="single"
                       min={12}
                       max={200}
                       forceSingleModeWidth={false}
                       className={classes.title}
                       style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                       <p>{'Github'}</p>
                   </Textfit>
                   <Textfit
                      mode="multi"
                      min={12}
                      max={200}
                      forceSingleModeWidth={false}
                      className={classes.contact}
                      style={{color: this.props.valueColor ? this.props.valueColor : this.props.defaultColor}}>
                      <p>{'Visit our Github page!'}</p>
                  </Textfit>
                   <div className={classes.component}>
                       <Button
                           variant="raised"
                           size="large"
                           color="primary"
                           onClick={() => { window.open('https://github.com/soaple/stickyboard', '_blank') }}>
                           Github
                           <Mail className={classes.contactButtonIcon} />
                       </Button>
                   </div>
                </Paper>
            )
        }
    }

    render () {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                {/* Components */}
                <ResponsiveReactGridLayout
                    {...Const.RGL_LAYOUT_PROPS}
                    layouts={this.getLayouts(this.state.isEditingMode)}
                    onBreakpointChange={this.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}>
                    {this.state.blocks.map((block, index) => {
                        return this.generateBlock(block, classes)
                    })}
                </ResponsiveReactGridLayout>
            </div>
        )
    }
}

IntroPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntroPage);
