import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { NumberWidget } from '@stickyboard/number';

function NumberARPU(props) {
    const { colors } = props;

    return (
        <NumberWidget
            icon={<PersonIcon />}
            backgroundColor={colors.colorArray[3]}
            defaultColor={colors.colorLight}
            valueColor={colors.colorLight}
            title={'ARPU'}
            value={258}
            unit={'$'}
        />
    );
}

export default NumberARPU;
