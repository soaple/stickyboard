// src/components/page/intro/LayoutCustomization.js

import React, { useState } from 'react';
import styled from 'styled-components';

import PageBaseContainer from 'redux/containers/PageBaseContainer';
import IntroSection from './IntroSection';
import IntroTab from './IntroTab';

export const USER_A = 0;
export const USER_B = 1;

const initialLayoutA = {
    lg: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap3days', x: 4, y: 0, w: 8, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 5, w: 12, h: 6 },
        { i: 'YahooWeather', x: 8, y: 11, w: 4, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 11, w: 8, h: 5 },
    ],
    md: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap3days', x: 4, y: 0, w: 8, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 5, w: 12, h: 6 },
        { i: 'YahooWeather', x: 8, y: 11, w: 4, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 11, w: 8, h: 5 },
    ],
    sm: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap3days', x: 4, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 5, w: 8, h: 6 },
        { i: 'YahooWeather', x: 4, y: 11, w: 4, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 11, w: 4, h: 5 },
    ],
    xs: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 6, h: 5 },
        { i: 'OpenWeatherMap3days', x: 0, y: 5, w: 6, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 10, w: 6, h: 6 },
        { i: 'YahooWeather', x: 0, y: 21, w: 6, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 16, w: 6, h: 5 },
    ],
    xxs: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 4, h: 5 },
        { i: 'OpenWeatherMap3days', x: 0, y: 5, w: 4, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 10, w: 4, h: 6 },
        { i: 'YahooWeather', x: 0, y: 21, w: 4, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 16, w: 4, h: 5 },
    ],
};

const initialLayoutB = {
    lg: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 6, h: 5 },
        { i: 'YahooWeather', x: 6, y: 0, w: 6, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 5, w: 12, h: 6 },
        { i: 'OpenWeatherMap3days', x: 0, y: 11, w: 4, h: 5 },
        { i: 'OpenWeatherMap7days', x: 4, y: 11, w: 8, h: 5 },
    ],
    md: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 6, h: 5 },
        { i: 'YahooWeather', x: 6, y: 0, w: 6, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 5, w: 12, h: 6 },
        { i: 'OpenWeatherMap3days', x: 0, y: 11, w: 4, h: 5 },
        { i: 'OpenWeatherMap7days', x: 4, y: 11, w: 8, h: 5 },
    ],
    sm: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 4, h: 5 },
        { i: 'YahooWeather', x: 4, y: 0, w: 4, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 5, w: 12, h: 6 },
        { i: 'OpenWeatherMap3days', x: 0, y: 11, w: 3, h: 5 },
        { i: 'OpenWeatherMap7days', x: 3, y: 11, w: 5, h: 5 },
    ],
    xs: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 6, h: 5 },
        { i: 'YahooWeather', x: 0, y: 5, w: 6, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 10, w: 6, h: 6 },
        { i: 'OpenWeatherMap3days', x: 0, y: 16, w: 6, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 21, w: 6, h: 5 },
    ],
    xxs: [
        { i: 'OpenWeatherMap', x: 0, y: 0, w: 6, h: 5 },
        { i: 'YahooWeather', x: 0, y: 5, w: 6, h: 5 },
        { i: 'YahooWeatherForecast', x: 0, y: 10, w: 6, h: 6 },
        { i: 'OpenWeatherMap3days', x: 0, y: 16, w: 6, h: 5 },
        { i: 'OpenWeatherMap7days', x: 0, y: 21, w: 6, h: 5 },
    ],
};

const initialBlocks = [
    { i: 'OpenWeatherMap' },
    { i: 'OpenWeatherMap3days' },
    { i: 'OpenWeatherMap7days' },
    { i: 'YahooWeather' },
    { i: 'YahooWeatherForecast' },
];

export default function LayoutCustomization() {
    const [userMode, setUserMode] = useState(USER_A);

    const onChangeMode = (event, mode) => {
        setUserMode(mode);
    };

    return (
        <IntroSection title={'Layout customization'}>
            <small>
                Users can customize the layout of components to make their own
                dashboards.
            </small>
            <IntroTab
                mode={userMode}
                onChangeMode={onChangeMode}
                label={['USER A', 'USER B']}
                firstTab={
                    <WeatherDiv>
                        <PageBaseContainer
                            readonly
                            initialLayout={initialLayoutA}
                            initialBlocks={initialBlocks}
                        />
                    </WeatherDiv>
                }
                secondTab={
                    <WeatherDiv>
                        <PageBaseContainer
                            readonly
                            initialLayout={initialLayoutB}
                            initialBlocks={initialBlocks}
                        />
                    </WeatherDiv>
                }
            />
        </IntroSection>
    );
}

const WeatherDiv = styled.div`
    margin-top: 20px;
`;
