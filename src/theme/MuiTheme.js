// src/components/base/MuiTheme.js

import { createMuiTheme } from '@material-ui/core/styles';
import { red, green, blue, yellow, amber, orange, deepOrange, purple, indigo,
    blueGrey, grey, teal, cyan, lightBlue } from '@material-ui/core/colors';

const MuiTheme = createMuiTheme({
    palette: {
        primary: amber,
        secondary: orange,
        error: red,
    },
    overrides: {
        MuiButton: {
            // Name of the styleSheet
            // root: {
            //     // Name of the rule
            //     background: 'linear-gradient(45deg, #c4e014 30%, #acc800 90%)',
            //     borderRadius: 3,
            //     border: 0,
            //     color: 'white',
            //     height: 36,
            //     padding: '0 30px',
            //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
            // },
        },
        MuiAppBar: {
            // colorDefault: {
            //     backgroundColor: red[500],
            //     color: theme.palette.getContrastText(theme.palette.background.appBar)
            // },
            colorPrimary: {
                // backgroundColor: blueGrey[700],
                backgroundColor: grey[50],
                color: '#fff',
            },
            // colorAccent: {
            //     backgroundColor: purple[500],
            //     color: theme.palette.getContrastText(theme.palette.secondary.A200)
            // }
        },
        MuiInput: {
            // inkbar: {
            //     '&:after': {
            //         backgroundColor: 'rgb(14, 46, 125)',
            //     },
            // },
            // underline: {
            //     '&:before': {
            //       backgroundColor: blueGrey[500],
            //     },
            //     '&:hover:not($disabled):before': {
            //       backgroundColor: blueGrey[200],
            //       height: 2
            //     },
            // },
            // input: {
            //     // textAlign: 'center',
            // },
        },
        MuiSwitch: {
            '&$checked': {
                color: 'rgb(14, 46, 125)',
                '& + $bar': {
                    backgroundColor: 'rgb(14, 46, 125)',
                    opacity: 0.5
                }
            },
        },
        MuiCheckbox: {
            // default: {
            //   color: deepOrange[500],
            // },
            '&$checked': {
              color: blue[500],
            },
            // disabled: {
            //   color: theme.palette.action.disabled
            // }
        },
        MuiTabs: {

        },
        MuiTab: {
            // rootAccent: {
            //     color: green[500]
            // },
            // rootAccentSelected: {
            //     color: green[500]
            // },
            // rootAccentDisabled: {
            //     color: green[500]
            // },
            // rootPrimary: {
            //     color: green[500]
            // },
            // rootPrimarySelected: {
            //     color: green[500]
            // },
            // rootPrimaryDisabled: {
            //     color: green[500]
            // },
        },
        MuiTabIndicator: {
            root: {
                position: 'absolute',
                height: 4,
                bottom: 0,
                width: '100%',
                // transition: theme.transitions.create(),
                willChange: 'left, width'
            },
            colorSecondary: {
                backgroundColor: '#fff'
            },
            colorPrimary: {
                // backgroundColor: blueGrey[500]
            }
        },
        MuiTableCell: {
            root: {
              // border: '1px solid ' + grey[300],
              borderBottom: '1px solid ' + grey[300],
              textAlign: 'center',
              padding: 0,
            },
            head: {
                background: grey[200],
                fontSize: 14,
                color: grey[900],
            },
            // paddingNone: {
            //     padding: 8,
            //     '&:last-child': {
            //       paddingRight: 8
            //     }
            // },
        },
        MuiIconButton: {
            // root: {
            //   height: 36,
            // },
        },
    },
});

export default MuiTheme;
