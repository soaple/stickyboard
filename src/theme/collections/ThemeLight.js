// theme/collections/ThemeLight.js

import {
    red, green, blue, yellow,
    amber, orange, deepOrange, purple,
    indigo, blueGrey, grey, teal, cyan,
    lightBlue, deepPurple
} from '@material-ui/core/colors';

const ThemeLight = {
    palette: {
        type: 'light',
        // Essential
        primary: amber,
        secondary: orange,
        error: red,
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
        contentBackground: '#ffffff',
        // Drawer menu
        drawerMenuCategoryText: grey[500],
        drawerMenuSelectedBackground: grey[300],
        drawerMenuSelectedPin: amber[500],
        // Progress
        progress: amber[500],
        // Color set for StickyBoard components (e.g., charts, number...)
        colorArray: [
            red[500],
            cyan[500],
            amber[500],
            teal[500],
            yellow[500],
            green[500],
            blue[500],
            indigo[500],
            orange[500],
            deepPurple[500],
            lightBlue[500],
        ],
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: grey[50],      // AppBar background color
                color: grey[800],
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
                color: grey[800],
            }
        },
        MuiFab: {
            primary: {
                backgroundColor: amber[500],
                color: grey[800],
                '&:hover': {
                    backgroundColor: amber[700],
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

export default ThemeLight;
