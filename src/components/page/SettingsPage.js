// src/components/page/SettingsPage.js

import React from 'react'
import PropTypes from 'prop-types';

import _ from 'underscore'

import ApiManager from '../../network/ApiManager';
import StatusCode from '../../network/StatusCode';
import CookieManager from '../../network/CookieManager';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import AccountCircle from '@material-ui/icons/AccountCircle';

import sha256 from 'sha256'

const styles = theme => ({
    root: {
        padding: theme.spacing(2),
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
    },
    accountIconContainer: {
        marginTop: theme.spacing(2),
        textAlign: 'center',
        color: theme.colors.colorDark,
    },
    accountIcon: {
        fontSize: 112,
    },
    email: {
        textAlign: 'center',
    },
    textField: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(4),
        width: '100%',
        height: '48px',
    },
    chip: {
        backgroundColor: theme.colors.colorDark,
    },
});

function handleRequestDelete () {
    alert('You clicked the delete button.')
}

function onChipClicked () {
    alert('You clicked the Chip.')
}

class SettingsPage extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            email: '',
            name: '',
            password: '',
            passwordConfirm: '',
            group: undefined,
            groupPermissions: []
        }
    }

    componentDidMount () {
        ApiManager.StickyBoard.readUser(CookieManager.getCookie('userId'), this.readUserCallback)
        ApiManager.StickyBoard.readUserGroup(CookieManager.getCookie('userId'), this.readUserGroupCallback)
    }

    onChangeValue = (key, value) => {
        this.setState({ [key]: value });
    }

    onUpdateBtnClicked = () => {
        var admin = {
            id: CookieManager.getCookie('adminId'),
            email: this.state.email,
            name: this.state.name,
        }

        ApiManager.StickyBoard.updateUser(admin, this.updateUserCallback)
    }

    onChangePasswordBtnClicked = () => {
        if (this.state.password === '') {
            alert('Please enter password.')
            return
        }

        if (this.state.passwordConfirm === '') {
            alert('Please enter password confirm.')
            return
        }

        // Check if password is same as passwordConfirm
        if (this.state.password !== this.state.passwordConfirm) {
            alert('Password and password confirm is not same.')
            return
        }

        ApiManager.StickyBoard.updatePassword(
            CookieManager.getCookie('adminId'),
            sha256(this.state.password),
            this.updatePasswordCallback)
    }

    readUserCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            console.log(response)
            this.setState({
                email: response.email,
                name: response.name,
            })
            break
        default:
            alert(response.msg)
            break
        }
    }

    updateUserCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            alert('Profile is updated.')
            break
        default:
            alert(response.msg)
            break
        }
    }

    readUserGroupCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            console.log(response)
            if (response.group !== undefined) {
                this.setState({
                    group: response.group,
                    groupPermissions: response.permissions
                })
            }
            break
        default:
            alert(response.msg)
            break
        }
    }

    updatePasswordCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            alert('Password is updated.')
            this.setState({
                password: '',
                passwordConfirm: ''
            })
            break
        default:
            alert(response.msg)
            break
        }
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {/* Profile */}
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <h4>Profile</h4>
                            <div className={classes.accountIconContainer}>
                                <AccountCircle
                                    className={classes.accountIcon}
                                    color={'inherit'} />
                            </div>

                            <h5 className={classes.email}>
                                {this.state.email}
                            </h5>

                            <TextField
                                className={classes.textField}
                                label={'Name'}
                                type={'text'}
                                onChange={event => this.onChangeValue('name', event.target.value)}
                                value={this.state.name}
                                fullWidth={true}/>

                            <Button
                                className={classes.button}
                                variant='contained'
                                size='small'
                                color='primary'
                                onClick={this.onUpdateBtnClicked}>
                                {'Update Profile'}
                            </Button>
                        </Paper>
                    </Grid>

                    {/* Password */}
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <h4>Password</h4>
                            <TextField
                                className={classes.textField}
                                label={'Password'}
                                type={'password'}
                                onChange={event => this.onChangeValue('password', event.target.value)}
                                value={this.state.password}
                                fullWidth={true}/>
                            <br/>
                            <TextField
                                className={classes.textField}
                                label={'Password confirm'}
                                type={'password'}
                                onChange={event => this.onChangeValue('passwordConfirm', event.target.value)}
                                value={this.state.passwordConfirm}
                                fullWidth={true}/>
                            <Button
                                className={classes.button}
                                variant='contained'
                                size='small'
                                color='secondary'
                                onClick={this.onChangePasswordBtnClicked}>
                                {'Change Password'}
                            </Button>
                        </Paper>
                    </Grid>

                    {/* Permissions */}
                    <Grid item xs={12} md={6}>
                        <Paper className={classes.paper}>
                            <h4>Permissions</h4>
                            <div className='panel panel-default'>
                                <div className='panel-heading'>
                                    <h5 className='panel-title'>{
                                        this.state.group ? 'Group name: ' + this.state.group.name : 'No group'}
                                    </h5>
                                </div>
                                <div className='panel-body'>
                                    <div>
                                        {this.state.groupPermissions.map((permission, index) => (
                                             <Chip
                                                key={permission.id}
                                                label={permission.name}
                                                onClick={onChipClicked}
                                                className={classes.chip} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

SettingsPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SettingsPage);
