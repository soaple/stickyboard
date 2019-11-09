// src/components/page/ComponentNumberPage.js

import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PersonIcon from '@material-ui/icons/Person';

import { Sticker } from '@stickyboard/core';
import { NumberWidget, NumberWithChartWidget } from '@stickyboard/number';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = theme => ({
    root: {
    },
});

const initialLayout = {
    lg: [{"i":"DAU","x":0,"y":8,"w":3,"h":2},{"i":"WAU","x":3,"y":8,"w":3,"h":2},{"i":"MAU","x":6,"y":0,"w":3,"h":2},{"i":"ARPU","x":9,"y":0,"w":3,"h":2},{"i":"DAU2","x":0,"y":0,"w":6,"h":8},{"i":"WAU2","x":3,"y":10,"w":3,"h":4},{"i":"MAU2","x":6,"y":2,"w":6,"h":8},{"i":"ARPU2","x":0,"y":10,"w":3,"h":4},{"i":"DAU3","x":6,"y":10,"w":3,"h":4},{"i":"WAU3","x":9,"y":10,"w":3,"h":4}],
    md: [{"i":"DAU","x":0,"y":8,"w":3,"h":2},{"i":"WAU","x":3,"y":8,"w":3,"h":2},{"i":"MAU","x":6,"y":0,"w":3,"h":2},{"i":"ARPU","x":9,"y":0,"w":3,"h":2},{"i":"DAU2","x":0,"y":0,"w":6,"h":8},{"i":"WAU2","x":3,"y":10,"w":3,"h":4},{"i":"MAU2","x":6,"y":2,"w":6,"h":8},{"i":"ARPU2","x":0,"y":10,"w":3,"h":4},{"i":"DAU3","x":6,"y":10,"w":3,"h":4},{"i":"WAU3","x":9,"y":10,"w":3,"h":4}],
    sm: [{"i":"DAU","x":0,"y":8,"w":2,"h":2},{"i":"WAU","x":2,"y":8,"w":2,"h":2},{"i":"MAU","x":4,"y":0,"w":2,"h":2},{"i":"ARPU","x":6,"y":0,"w":2,"h":2},{"i":"DAU2","x":0,"y":0,"w":4,"h":8},{"i":"WAU2","x":2,"y":10,"w":2,"h":4},{"i":"MAU2","x":4,"y":2,"w":4,"h":8},{"i":"ARPU2","x":0,"y":10,"w":2,"h":4},{"i":"DAU3","x":4,"y":10,"w":2,"h":4},{"i":"WAU3","x":6,"y":10,"w":2,"h":4}],
    xs: [{"i":"DAU","x":0,"y":8,"w":3,"h":2},{"i":"WAU","x":0,"y":10,"w":3,"h":2},{"i":"MAU","x":3,"y":0,"w":3,"h":2},{"i":"ARPU","x":3,"y":2,"w":3,"h":2},{"i":"DAU2","x":0,"y":0,"w":3,"h":8},{"i":"WAU2","x":3,"y":12,"w":3,"h":4},{"i":"MAU2","x":3,"y":4,"w":3,"h":8},{"i":"ARPU2","x":0,"y":12,"w":3,"h":4},{"i":"DAU3","x":0,"y":16,"w":3,"h":4},{"i":"WAU3","x":3,"y":16,"w":3,"h":4}],
    xxs: [{"i":"DAU","x":0,"y":12,"w":2,"h":2},{"i":"WAU","x":2,"y":12,"w":2,"h":2},{"i":"MAU","x":0,"y":5,"w":2,"h":2},{"i":"ARPU","x":2,"y":5,"w":2,"h":2},{"i":"DAU2","x":0,"y":0,"w":4,"h":5},{"i":"WAU2","x":2,"y":14,"w":2,"h":4},{"i":"MAU2","x":0,"y":7,"w":4,"h":5},{"i":"ARPU2","x":0,"y":14,"w":2,"h":4},{"i":"DAU3","x":0,"y":18,"w":2,"h":4},{"i":"WAU3","x":2,"y":18,"w":2,"h":4}],
};

const initialBlocks = [{"i":"DAU"},{"i":"WAU"},{"i":"MAU"},{"i":"ARPU"},{"i":"DAU2"},{"i":"WAU2"},{"i":"MAU2"},{"i":"ARPU2"},{"i":"DAU3"},{"i":"WAU3"}];

class ComponentNumberPage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            // Data
            data: [
                {
                    index: 1,
                    time: new Date('2018-03-01 00:00:00').getTime(),
                    value: 121,
                }, {
                    index: 2,
                    time: new Date('2018-03-02 00:00:00').getTime(),
                    value: 140,
                }, {
                    index: 3,
                    time: new Date('2018-03-03 00:00:00').getTime(),
                    value: 250,
                }, {
                    index: 4,
                    time: new Date('2018-03-04 00:00:00').getTime(),
                    value: 207,
                }, {
                    index: 5,
                    time: new Date('2018-03-05 00:00:00').getTime(),
                    value: 198,
                }, {
                    index: 6,
                    time: new Date('2018-03-06 00:00:00').getTime(),
                    value: 218,
                }, {
                    index: 7,
                    time: new Date('2018-03-07 00:00:00').getTime(),
                    value: 230,
                }, {
                    index: 8,
                    time: new Date('2018-03-08 00:00:00').getTime(),
                    value: 221,
                }, {
                    index: 9,
                    time: new Date('2018-03-09 00:00:00').getTime(),
                    value: 189,
                }, {
                    index: 10,
                    time: new Date('2018-03-10 00:00:00').getTime(),
                    value: 270,
                }, {
                    index: 11,
                    time: new Date('2018-03-11 00:00:00').getTime(),
                    value: 290,
                }
            ],
        }
    }

    componentDidMount () {
        this.startGeneratingRandomData();
    }

    startGeneratingRandomData = () => {
        setInterval(() => {
            let { data } = this.state;
            data.push({
                index: data.length + 2,
                time: new Date().getTime(),
                value: Math.random() * 1000,
            });

            if (data.length > 7) {
                data.splice(0, 1);
            }

            this.setState({
                data: data.slice(),
            });
        }, 1100);
    }

    render() {
        const { data } = this.state;
        const { classes, theme } = this.props;

        const generateBlock = (block) => {
            switch (block.i) {
            case 'DAU':
                return (
                    <Sticker key={block.i}>
                        <NumberWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[0]}
                            defaultColor={theme.colors.colorLight}
                            valueColor={theme.colors.colorLight}
                            title={'Daily Active User'}
                            value={128}
                            unit={''} />
                    </Sticker>
                )
            case 'WAU':
                return (
                    <Sticker key={block.i}>
                        <NumberWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[1]}
                            defaultColor={theme.colors.colorLight}
                            valueColor={theme.colors.colorLight}
                            title={'Weekly Active User'}
                            value={7089}
                            unit={''} />
                    </Sticker>
                )
            case 'MAU':
                return (
                    <Sticker key={block.i}>
                        <NumberWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[2]}
                            defaultColor={theme.colors.colorDark}
                            valueColor={theme.colors.colorDark}
                            title={'Monthly Active User'}
                            value={143120}
                            unit={''} />
                    </Sticker>
                )
            case 'ARPU':
                return (
                    <Sticker key={block.i}>
                        <NumberWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[3]}
                            defaultColor={theme.colors.colorLight}
                            valueColor={theme.colors.colorLight}
                            title={'ARPU'}
                            value={258}
                            unit={'$'} />
                    </Sticker>
                )
            case 'DAU2':
                return (
                    <Sticker key={block.i}>
                        <NumberWithChartWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[4]}
                            defaultColor={theme.colors.colorDark}
                            valueColor={theme.colors.colorDark}
                            title={'Daily Active User'}
                            unit={''}
                            data={data} />
                    </Sticker>
                )
            case 'WAU2':
                return (
                    <Sticker key={block.i}>
                        <NumberWithChartWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[5]}
                            defaultColor={theme.colors.colorLight}
                            valueColor={theme.colors.colorLight}
                            title={'Weekly Active User'}
                            unit={''}
                            data={data} />
                    </Sticker>
                )
            case 'MAU2':
                return (
                    <Sticker key={block.i}>
                        <NumberWithChartWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[6]}
                            defaultColor={theme.colors.colorLight}
                            valueColor={theme.colors.colorLight}
                            title={'Monthly Active User'}
                            unit={''}
                            data={data} />
                    </Sticker>
                )
            case 'ARPU2':
                return (
                    <Sticker key={block.i}>
                        <NumberWithChartWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[7]}
                            defaultColor={theme.colors.colorLight}
                            valueColor={theme.colors.colorLight}
                            title={'ARPU'}
                            unit={'$'}
                            data={data} />
                    </Sticker>
                )
            case 'DAU3':
                return (
                    <Sticker key={block.i}>
                        <NumberWithChartWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[8]}
                            defaultColor={theme.colors.colorLight}
                            valueColor={theme.colors.colorLight}
                            title={'Daily Active User'}
                            unit={''}
                            data={data} />
                    </Sticker>
                )
            case 'WAU3':
                return (
                    <Sticker key={block.i}>
                        <NumberWithChartWidget
                            icon={<PersonIcon />}
                            backgroundColor={theme.colors.colorArray[9]}
                            defaultColor={theme.colors.colorLight}
                            valueColor={theme.colors.colorLight}
                            title={'Weekly Active User'}
                            unit={''}
                            data={data} />
                    </Sticker>
                )
            }
        }

        return (
            <PageBaseContainer
                generateBlock={generateBlock}
                initialLayout={initialLayout}
                initialBlocks={initialBlocks} />
        )
    }
}

ComponentNumberPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentNumberPage);
