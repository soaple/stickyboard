import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { NumberWidget } from '@stickyboard/number';

function NumberMAU(props) {
    const { colors } = props;

    return (
        <NumberWidget
            icon={<PersonIcon />}
            backgroundColor={colors.colorArray[2]}
            defaultColor={colors.colorDark}
            valueColor={colors.colorDark}
            title={'Monthly Active User'}
            value={143120}
            unit={''}
        />
    );
}

export default NumberMAU;
