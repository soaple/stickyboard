// src/components/page/ComponentDialogPage.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import DialogDict from 'components/dialog';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    margin: 16px;
`;

class ComponentDialogPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { showDialog } = this.props;

        return (
            <Wrapper>
                {Object.keys(DialogDict).map((dialogKey, index) => {
                    const DialogObject = DialogDict[dialogKey];
                    if (
                        DialogObject &&
                        typeof DialogObject.Component === 'function'
                    ) {
                        return (
                            <ButtonContainer>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        showDialog(dialogKey);
                                    }}>
                                    {DialogObject.Name}
                                </Button>
                            </ButtonContainer>
                        );
                    } else {
                        return null;
                    }
                })}
            </Wrapper>
        );
    }
}

ComponentDialogPage.propTypes = {};

export default ComponentDialogPage;
