// src/components/containers/ComponentDialogPageContainer.js

import { connect } from 'react-redux';

import { showDialog, hideDialog } from '../actions';

import ComponentDialogPage from 'components/page/ComponentDialogPage';

const mapStateToProps = (state, ownProps) => {
    return {
        dialog: state.dialogReducer,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showDialog: (dialogKey, params, callback) => {
            dispatch(showDialog(dialogKey, params, callback));
        },
        hideDialog: (dialogKey) => {
            dispatch(hideDialog(dialogKey));
        },
    };
};

const ComponentDialogPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentDialogPage);

export default ComponentDialogPageContainer;
