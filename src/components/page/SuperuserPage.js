// src/components/page/SuperuserPage.js

import React from 'react';
import PropTypes from 'prop-types';

import ApiManager from 'network/ApiManager';
import StatusCode from 'network/StatusCode';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import RefreshIcon from '@material-ui/icons/Refresh';

import { TableWithPagination } from '@stickyboard/table';

import Const from 'constants/Const';

const styles = theme => ({
    root: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        overflow: 'auto',
    },
});

const itemsPerPage = 20;

class SuperuserPage extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            totalItemCount: 0,
            users: [],
        }
    }

    componentDidMount () {
        ApiManager.readUsers(
            0,
            itemsPerPage,
            this.readUsersCallback)
    }

    readUsersCallback = (statusCode, response) => {
        switch (statusCode) {
        case StatusCode.OK:
            this.setState({
                totalItemCount: response.count,
                users: response.rows
            })
            break
        default:
            alert(response.msg)
            break
        }
    }

    render() {
        const { users } = this.state;
        const { classes, theme } = this.props;

        return (
            <Paper className={classes.root}>
                <TableWithPagination
                    title={'User List'}
                    data={users}
                    rowsPerPage={10} />
            </Paper>
        )
    }
}

SuperuserPage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SuperuserPage);
