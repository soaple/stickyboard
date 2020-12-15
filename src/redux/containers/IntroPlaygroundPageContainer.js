// src/components/containers/IntroPlaygroundPageContainer.js

import { connect } from 'react-redux';

import { showDialog, hideDialog } from '../actions';

import IntroPlaygroundPage from 'components/page/IntroPlaygroundPage';

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

const IntroPlaygroundPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IntroPlaygroundPage);

export default IntroPlaygroundPageContainer;
