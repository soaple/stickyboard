// theme/collections/ThemeGrass.js

import {
    red, green, blue, yellow,
    amber, orange, deepOrange, purple,
    indigo, blueGrey, grey, teal, cyan,
    lightBlue, deepPurple, lightGreen, lime
} from '@material-ui/core/colors';

const ThemeGrass = {
    palette: {
        type: 'light',
        // Essential
        primary: green,
        secondary: teal,
        error: red,
        // Optional
        sample: {
            // light: will be calculated from palette.sample,
            main: green[500],
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
        drawerMenuCategoryText: grey[500],
        drawerMenuSelectedBackground: grey[300],
        drawerMenuSelectedPin: green[500],
        // Progress
        progress: green[500],
        // Color set for StickyBoard components (e.g., charts, number...)
        colorArray: [
            green[500],
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
                backgroundColor: green[500],    // AppBar background color
                color: '#ffffff',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: grey[100],     // Drawer background color
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
                backgroundColor: green[500],
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

export default ThemeGrass;
