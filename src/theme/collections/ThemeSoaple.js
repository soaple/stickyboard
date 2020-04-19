// theme/collections/ThemeSoaple.js

import {
    red, green, blue, yellow,
    amber, orange, deepOrange, purple,
    indigo, blueGrey, grey, teal, cyan,
    lightBlue, deepPurple, lightGreen, lime
} from '@material-ui/core/colors';

const ThemeSoaple = {
    palette: {
        type: 'dark',
        // Essential
        primary: lightGreen,
        secondary: teal,
        error: red,
        // Optional
        sample: {
            // light: will be calculated from palette.sample,
            main: '#7fc734',
            // dark: will be calculated from palette.sample,
            // contrastText: will be calculated to contrast with palette.sample
        },
    },
    colors: {
        // Base colors
        colorLight: '#ffffff',
        colorDark: grey[800],
        // Content
        contentBackground: '#ffffff',
        // Drawer menu
        drawerMenuCategoryText: grey[200],
        drawerMenuSelectedBackground: grey[500],
        drawerMenuSelectedPin: '#7fc734',
        // Progress
        progress: '#7fc734',
        // Color set for StickyBoard components (e.g., charts, number...)
        colorArray: [
            '#7fc734',
            cyan[500],
            teal[500],
            lightGreen[500],
            lime[500],
            green[600],
            cyan[600],
            teal[600],
            lightGreen[600],
            lime[600],
            green[700],
        ],
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#7fc734',    // AppBar background color
                color: '#ffffff',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#7b7b7e',     // Drawer background color
            }
        },
        MuiButton: {
            root: {
                textTransform: 'none',
            }
        },
        MuiIconButton: {
            root: {
                color: '#ffffff',
            }
        },
        MuiFab: {
            primary: {
                backgroundColor: '#7fc734',
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: green[700],
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

export default ThemeSoaple;
