// theme/collections/ThemeMoonlight.js

import {
    red, green, blue, yellow,
    amber, orange, deepOrange, purple,
    indigo, blueGrey, grey, teal, cyan,
    lightBlue, deepPurple
} from '@material-ui/core/colors';

const ThemeMoonlight = {
    palette: {
        type: 'dark',
        // Essential
        primary: indigo,
        secondary: blueGrey,
        error: red,
        // Optional
        sample: {
            // light: will be calculated from palette.sample,
            main: indigo[900],
            // dark: will be calculated from palette.sample,
            // contrastText: will be calculated to contrast with palette.sample
        },
    },
    colors: {
        // Base colors
        colorLight: '#ffffff',
        colorDark: grey[800],
        // Content
        contentBackground: blueGrey[900],
        // Drawer menu
        drawerMenuCategoryText: grey[400],
        drawerMenuSelectedBackground: blueGrey[600],
        drawerMenuSelectedPin: yellow[600],
        // Speed dial
        speedDialColor: indigo[900],
        // Progress
        progress: indigo[900],
        // Color set for StickyBoard components (e.g., charts, number...)
        colorArray: [
            yellow[500],
            indigo[500],
            amber[500],
            orange[500],
            yellow[600],
            indigo[600],
            amber[600],
            orange[600],
            yellow[700],
            indigo[700],
            amber[700],
        ],
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: blueGrey[700],      // AppBar background color
                color: '#ffffff',
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: blueGrey[800],     // Drawer background color
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
                backgroundColor: yellow[600],
                color: grey[800],
                '&:hover': {
                    backgroundColor: yellow[700],
                }
            }
        },
        MuiSpeedDialAction:{
            fab: {
                backgroundColor: grey[800],
                color: '#ffffff',
            }
        }
    },
};

export default ThemeMoonlight;
