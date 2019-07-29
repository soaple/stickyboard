// src/constants/Const.js

var Const = {

    DRAWER_WIDTH: 240,

    /**
     * Sort order
     */
    ORDER_ASC: 'ASC',
    ORDER_DESC: 'DESC',

    /**
     * Notifications
     */
     NOTI_TYPE_NOTICE: 100,
     NOTI_TYPE_WARNING: 200,
     NOTI_TYPE_EMERGENCY: 300,

    /**
     * Time Milliseconds
     */
    TIME_MILLIS_MINUTE: 60000,          // 60 * 1000
    TIME_MILLIS_HOUR: 3600000,          // 60 * 60 * 1000
    TIME_MILLIS_DAY: 86400000,          // 24 * 60 * 60 * 1000
    TIME_MILLIS_3_DAYS: 259200000,      // 3 * 24 * 60 * 60 * 1000
    TIME_MILLIS_7_DAYS: 604800000,      // 7 * 24 * 60 * 60 * 1000

    /**
     * React-Grid-Layout layout props
     */
    RGL_LAYOUT_PROPS: {
        className: 'layout',
        rowHeight: 40,
        cols: {lg: 12, md: 12, sm: 8, xs: 6, xxs: 4},
        breakpoints: {lg: 1280, md: 996, sm: 768, xs: 480, xxs: 0},
        margin: [15, 20],
        measureBeforeMount: false,
        useCSSTransforms: true,
    },

}

export default Const
