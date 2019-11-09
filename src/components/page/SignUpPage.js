// src/components/page/SignUpPage.js

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
    signUpButton: {
        marginTop: theme.spacing(4),
        width: '100%',
        height: '48px',
    },
});

class SignUpPage extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            // Sign up information
            email: '',
            password: '',
            passwordConfirm: '',
            name: '',
            // Alert dialog
            isAlertOpened: false,
            alertMessage: ''
        }
    }

    componentDidMount () {
        // Check user signed in
        // if (window.sessionStorage.accessToken !== undefined) {
        //     window.location = '/'
        // }
    }

    onChangeValue = (key, value) => {
        this.setState({ [key]: value });
    }

    onSignUpBtnClicked = () => {
        if (this.state.email === '') {
            this.openAlertDialog('Please enter email address.')
            return
        }

        if (this.state.password === '') {
            this.openAlertDialog('Please enter password.')
            return
        }

        if (this.state.passwordConfirm === '') {
            this.openAlertDialog('Please enter password confirm.')
            return
        }

        if (this.state.name === '') {
            this.openAlertDialog('Please enter name.')
            return
        }

        // Check if password is same as passwordConfirm
        if (this.state.password !== this.state.passwordConfirm) {
            this.openAlertDialog('Password and password confirm is not same.')
            return
        }

        var newUser = {
            email: this.state.email,
            password: sha256(this.state.password),
            name: this.state.name,
        }

        ApiManager.signUp(newUser, this.signUpCallback)
    }

    openAlertDialog = (alertMessage) => {
        this.setState({alertMessage: alertMessage})
        this.setState({isAlertOpened: true})
    }

    closeAlertDialog = () => {
        this.setState({isAlertOpened: false})
    }

    signUpCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            console.log(response)
            window.location = '/signin'
            break
        case StatusCode.EMAIL_ALREADY_TAKEN:
        case StatusCode.INVALID_EMAIL_FORMAT:
        default:
            this.openAlertDialog(response.msg)
            break
        }
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
                        type={'email'}
                        onChange={event => this.onChangeValue('email', event.target.value)}
                        value={this.state.email}
                        fullWidth={true}/>
                    <br />
                    <br />
                    <TextField
                        label={'Password'}
                        inputProps={{className: classes.textField}}
                        className={classes.textField}
                        type={'password'}
                        onChange={event => this.onChangeValue('password', event.target.value)}
                        value={this.state.password}
                        fullWidth={true}/>
                    <br />
                    <br />
                    <TextField
                        label={'Password Confirm'}
                        inputProps={{className: classes.textField}}
                        className={classes.textField}
                        type={'password'}
                        onChange={event => this.onChangeValue('passwordConfirm', event.target.value)}
                        value={this.state.passwordConfirm}
                        fullWidth={true}/>
                    <br />
                    <br />
                    <TextField
                        label={'Name'}
                        inputProps={{className: classes.textField}}
                        className={classes.textField}
                        type={'text'}
                        onChange={event => this.onChangeValue('name', event.target.value)}
                        value={this.state.name}
                        fullWidth={true}/>
                    <Button
                        className={classes.signUpButton}
                        variant='contained'
                        size='small'
                        color='primary'
                        onClick={this.onSignUpBtnClicked}>
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
                    <br />
                    <Typography type='caption' gutterBottom align='center'
                        color={'inherit'}>
                        {'Copyright ⓒ 2018 Soaple'}
                    </Typography>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

SignUpPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SignUpPage);
