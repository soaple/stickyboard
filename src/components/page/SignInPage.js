// src/components/page/SignInPage.js

import React from 'react';
import PropTypes from 'prop-types';

import ApiManager from '../../network/ApiManager';
import StatusCode from '../../network/StatusCode';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';

import sha256 from 'sha256'

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        color: theme.colors.colorDark,
    },
    container: {
        width: '100%',
        maxWidth: 300,
        margin: 'auto',
    },
    logoImage: {
        display: 'block',
        // width: '100%',
        margin: 'auto',
        paddingTop: '24px',
        marginTop: '16px',
        [theme.breakpoints.up('md')]: {
            marginTop: '16px',
        },
        [theme.breakpoints.up('lg')]: {
            marginTop: '24px',
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '32px',
        },
    },
    textField: {
        color: theme.colors.colorDark,
    },
    signInButton: {
        marginTop: theme.spacing(4),
        width: '100%',
        height: '48px',
    },
    signUpButton: {
        marginTop: theme.spacing(2),
        width: '100%',
        height: '48px',
    },
})

class SignInPage extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            isAlertOpened: false,
            alertMessage: ''
        }
    }

    componentDidMount () {
    }

    onChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    onSignInBtnClicked = () => {
        if (this.state.email === '') {
            this.openAlertDialog('Please enter e-mail address.')
            return
        }

        if (this.state.password === '') {
            this.openAlertDialog('Pleas enter password.')
            return
        }

        ApiManager.signIn(
            this.state.email,
            sha256(this.state.password),
            this.signInCallback)
    }

    signInCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            const location = this.props.location
            if (location.state && location.state.nextPathname) {
                window.location = location.state.nextPathname
            } else {
                window.location = '/'
            }
            break
        case StatusCode.ACCOUNT_DOES_NOT_EXIST:
        case StatusCode.WRONG_PASSWORD:
        default:
            this.openAlertDialog(response.msg)
            break
        }
    }

    openAlertDialog = (alertMessage) => {
        this.setState({
            alertMessage: alertMessage,
            isAlertOpened: true
        })
    }

    closeAlertDialog = () => {
        this.setState({isAlertOpened: false})
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <a href='/'>
                    <img
                        src='/static/image/StickyBoard_logo.png'
                        className={classes.logoImage}/>
                </a>
                <br />
                <br />
                <div className={classes.container}>
                    <TextField
                        label={'E-mail'}
                        inputProps={{className: classes.textField}}
                        className={classes.textField}
                        type={'text'}
                        onChange={this.onChangeEmail}
                        value={this.state.email}
                        fullWidth={true} />
                    <br />
                    <br />
                    <TextField
                        label={'Password'}
                        inputProps={{className: classes.textField}}
                        className={classes.textField}
                        type={'password'}
                        onChange={this.onChangePassword}
                        value={this.state.password}
                        fullWidth={true} />
                    <Button
                        className={classes.signInButton}
                        variant='contained'
                        color='primary'
                        onClick={this.onSignInBtnClicked}>
                        {'Sign In'}
                    </Button>
                    <Button
                        className={classes.signUpButton}
                        variant='contained'
                        color='secondary'
                        onClick={() => {
                            window.location = '/signup'
                        }}>
                        {'Sign Up'}
                    </Button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Dialog
                        fullWidth
                        open={this.state.isAlertOpened}
                        onClose={this.closeAlertDialog}
                        aria-labelledby='alert-dialog-title'
                        aria-describedby='alert-dialog-description'>
                        <DialogTitle
                            id='alert-dialog-title'>
                            {'Alert'}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id='alert-dialog-description'>
                                {this.state.alertMessage}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                onClick={this.closeAlertDialog}
                                color='primary'
                                autoFocus>
                                {'OKAY'}
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <br />
                    <br />
                    <Typography type='caption' gutterBottom align='center'
                        color={'inherit'}>
                        {'Copyright ⓒ 2018-2019 Soaple'}
                    </Typography>
                </div>
            </div>
        )
    }
}

SignInPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SignInPage);
