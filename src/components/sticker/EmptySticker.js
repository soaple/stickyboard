import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const GuideText = styled.div`
    font-size: 16px;
    color: #9b9b9b;
    white-space: pre-wrap;
    text-align: center;
`;

function EmptySticker() {
    return (
        <Wrapper>
            <GuideText>
                {
                    "Select a sticker content\nby clicking 'Change' button on edit mode."
                }
            </GuideText>
        </Wrapper>
    );
}

export default EmptySticker;
