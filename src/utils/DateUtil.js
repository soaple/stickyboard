// src/utils/DateUtil.js

import Const from '../constants/Const';

import Moment from 'moment-timezone';

var DateUtil = {

    format: (label) => {
        return Moment(new Date(label)).format('YYYY-MM-DD HH:mm:ss');
    },

    formatDateOnly: (label) => {
        return Moment(new Date(label)).format('YYYY-MM-DD');
    },

    formatTimeOnly: (label) => {
        return Moment(new Date(label)).format('HH:mm:ss');
    },

    formatCustom: (label, formatString) => {
        return Moment(new Date(label)).format(formatString);
    },

    getElapsedDay: (date) => {
        var today = new Date();
        var elapsedTime = new Date(today.getTime() - date.getTime());
        return Math.floor(elapsedTime / Const.TIME_MILLIS_DAY);
    },

    convertDayToString: (day) => {
        switch (day) {
            case 0: return 'Sun'
            case 1: return 'Mon'
            case 2: return 'Tue'
            case 3: return 'Wed'
            case 4: return 'Thu'
            case 5: return 'Fri'
            case 6: return 'Sat'
        }
    },

}

export default DateUtil;
