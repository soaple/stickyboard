import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { NumberWidget } from '@stickyboard/number';

function NumberWAU(props) {
    const { colors } = props;

    return (
        <NumberWidget
            icon={<PersonIcon />}
            backgroundColor={colors.colorArray[1]}
            defaultColor={colors.colorLight}
            valueColor={colors.colorLight}
            title={'Weekly Active User'}
            value={7089}
            unit={''}
        />
    );
}

export default NumberWAU;
