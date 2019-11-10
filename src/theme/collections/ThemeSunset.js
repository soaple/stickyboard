// theme/collections/ThemeSunset.js

import {
    red, green, blue, yellow,
    amber, orange, deepOrange, purple,
    indigo, blueGrey, grey, teal, cyan,
    lightBlue, deepPurple, pink,
} from '@material-ui/core/colors';

const ThemeSunset = {
    palette: {
        type: 'light',
        // Essential
        primary: red,
        secondary: pink,
        error: purple,
        // Optional
        sample: {
            // light: will be calculated from palette.sample,
            main: amber[500],
            // dark: will be calculated from palette.sample,
            // contrastText: will be calculated to contrast with palette.sample
        },
    },
    colors: {
        // Base colors
        colorLight: '#ffffff',
        colorDark: grey[800],
        // Content
        contentBackground: grey[800],
        // Drawer menu
        drawerMenuCategoryText: grey[600],
        drawerMenuSelectedBackground: red[200],
        drawerMenuSelectedPin: red[500],
        // Progress
        progress: red[500],
        // Color set for StickyBoard components (e.g., charts, number...)
        colorArray: [
            red[500],
            purple[500],
            amber[500],
            red[600],
            yellow[500],
            red[700],
            purple[600],
            red[800],
            orange[500],
            purple[700],
            deepOrange[600],
        ],
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: red[500],      // AppBar background color
                color: '#ffffff',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: red[100],     // Drawer background color
            }
        },
        MuiIconButton: {
            root: {
                color: '#ffffff',
            }
        },
        MuiFab: {
            primary: {
                backgroundColor: red[500],
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: red[700],
                }
            }
        },
        MuiSpeedDialAction:{
            fab: {
                backgroundColor: grey[50],
                color: grey[800],
            }
        },
    },
};

export default ThemeSunset;
