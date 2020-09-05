// src/components/page/intro/GetStarted.js

import React from 'react';
import styled from 'styled-components';

const StartSection = styled.section`
    margin: auto;
    max-width: 1250px;
    width: 100%;
    text-align: center;
`;

const StartTitle = styled.p`
    font-size: 30px;
    text-align: center;
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 25px;
    }
`;

const StartLogo = styled.img`
    position: relative;
    top: 12px;
    width: 50px;
`;

const Hello = styled.span`
    position: relative;
    right: 10px;
`;

const StickyBoard = styled.span`
    position: relative;
    left: 10px;
`;

export const Circle = styled.span`
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        width: 20px;
        height: 20px;

        position: absolute;
        left: -7px;
        top: -5px;
        z-index: -1;

        background-color: rgb(255, 193, 7);
        border-radius: 50%;
    }
`;

const StartDesc = styled.p`
    font-size: 18px;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 16px;
        padding: 0 20px;
    }
`;

const BtnDiv = styled.div`
    margin: auto;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

function GetStarted(props) {
    return (
        <StartSection>
            <StartTitle>
                <Hello>Hello,</Hello>
                <StartLogo
                    src="../../static/image/StickyBoard_logo_only.png"
                    alt="stickyboard logo"
                />
                <StickyBoard>StickyBoard!</StickyBoard>
            </StartTitle>
            <StartDesc>
                <Circle>Fully customizable </Circle>Web Admin/Dashboard starter
                kit based on React.
            </StartDesc>

            <BtnDiv>
                <iframe
                    src="https://ghbtns.com/github-btn.html?user=soaple&repo=stickyboard&type=star&count=true&size=large"
                    frameBorder="0"
                    scrolling="0"
                    width="140"
                    height="30"
                />
                <iframe
                    src="https://ghbtns.com/github-btn.html?user=soaple&type=follow&count=true&size=large"
                    frameBorder="0"
                    scrolling="0"
                    width="160px"
                    height="30px"
                />
            </BtnDiv>
        </StartSection>
    );
}

export default GetStarted;
