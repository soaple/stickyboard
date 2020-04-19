import React, { useState, useEffect } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { NumberWithChartWidget } from '@stickyboard/number';

const initialData = [
    {
        index: 1,
        time: new Date('2018-03-01 00:00:00').getTime(),
        value: 121,
    },
    {
        index: 2,
        time: new Date('2018-03-02 00:00:00').getTime(),
        value: 140,
    },
    {
        index: 3,
        time: new Date('2018-03-03 00:00:00').getTime(),
        value: 250,
    },
    {
        index: 4,
        time: new Date('2018-03-04 00:00:00').getTime(),
        value: 207,
    },
    {
        index: 5,
        time: new Date('2018-03-05 00:00:00').getTime(),
        value: 198,
    },
    {
        index: 6,
        time: new Date('2018-03-06 00:00:00').getTime(),
        value: 218,
    },
    {
        index: 7,
        time: new Date('2018-03-07 00:00:00').getTime(),
        value: 230,
    },
    {
        index: 8,
        time: new Date('2018-03-08 00:00:00').getTime(),
        value: 221,
    },
    {
        index: 9,
        time: new Date('2018-03-09 00:00:00').getTime(),
        value: 189,
    },
    {
        index: 10,
        time: new Date('2018-03-10 00:00:00').getTime(),
        value: 270,
    },
    {
        index: 11,
        time: new Date('2018-03-11 00:00:00').getTime(),
        value: 290,
    },
];

function NumberMAU2(props) {
    const [data, setData] = useState(initialData);
    const { colors } = props;

    function startGeneratingRandomData() {
        setInterval(() => {
            data.push({
                index: data.length + 2,
                time: new Date().getTime(),
                value: Math.random() * 1000,
            });

            if (data.length > 7) {
                data.splice(0, 1);
            }

            setData(data.slice());
        }, 1100);
    };

    useEffect(() => {
        startGeneratingRandomData();
    }, []);

    return (
        <NumberWithChartWidget
            icon={<PersonIcon />}
            backgroundColor={colors.colorArray[6]}
            defaultColor={colors.colorLight}
            valueColor={colors.colorLight}
            title={'Monthly Active User'}
            unit={''}
            data={data}
        />
    );
}

export default NumberMAU2;
