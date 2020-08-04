// redux/containers/AppContainer.js

import { connect } from 'react-redux';

import { showDialog, hideDialog } from '../actions';

import App from 'components/base/App';

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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
