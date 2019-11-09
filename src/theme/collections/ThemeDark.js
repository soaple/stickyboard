// theme/collections/ThemeDark.js

import {
    red, green, blue, yellow,
    amber, orange, deepOrange, purple,
    indigo, blueGrey, grey, teal, cyan,
    lightBlue, deepPurple
} from '@material-ui/core/colors';

const ThemeDark = {
    palette: {
        type: 'dark',
        // Essential
        primary: grey,
        secondary: blueGrey,
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
        contentBackground: grey[800],
        // Drawer menu
        drawerMenuCategoryText: grey[400],
        drawerMenuSelectedBackground: grey[600],
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
                backgroundColor: grey[800],      // AppBar background color
                color: '#ffffff',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: grey[700],     // Drawer background color
            }
        },
    },
};

export default ThemeDark;
