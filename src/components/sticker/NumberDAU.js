import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { NumberWidget } from '@stickyboard/number';

function NumberDAU(props) {
    const { colors } = props;

    return (
        <NumberWidget
            icon={<PersonIcon />}
            backgroundColor={colors.colorArray[0]}
            defaultColor={colors.colorLight}
            valueColor={colors.colorLight}
            title={'Daily Active User'}
            value={128}
            unit={''}
        />
    );
}

export default NumberDAU;
