// theme/collections/ThemeOcean.js

import {
    red, green, blue, yellow,
    amber, orange, deepOrange, purple,
    indigo, blueGrey, grey, teal, cyan,
    lightBlue, deepPurple,
} from '@material-ui/core/colors';

const ThemeOcean = {
    palette: {
        type: 'light',
        // Essential
        primary: blue,
        secondary: teal,
        error: red,
        // Optional
        sample: {
            // light: will be calculated from palette.sample,
            main: blue[500],
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
        drawerMenuSelectedPin: blue[500],
        // Progress
        progress: blue[500],
        // Color set for StickyBoard components (e.g., charts, number...)
        colorArray: [
            blue[500],
            cyan[500],
            indigo[500],
            lightBlue[500],
            blue[600],
            cyan[600],
            indigo[600],
            lightBlue[600],
            blue[700],
            cyan[700],
            indigo[700],
        ],
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: blue[500],    // AppBar background color
                color: '#ffffff',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: grey[100],     // Drawer background color
            }
        },
        MuiIconButton: {
            root: {
                color: '#ffffff',
            }
        },
        MuiFab: {
            primary: {
                backgroundColor: blue[500],
                color: '#ffffff',
                '&:hover': {
                    backgroundColor: blue[700],
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

export default ThemeOcean;
