import React from 'react';
import { GitHubCalendar } from '@stickyboard/github-calendar';

function generateSampleData() {
    let data = [];
    let date = new Date('2020-01-01T00:00:00.000Z');
    for (var i = 0; i < 365; i++) {
        data.push({
            date: date.toISOString(),
            count: Math.floor(Math.random() * 30),
        });
        date = new Date(date.getTime() + 24 * 3600 * 1000);
    }
    return data;
}

function OthersGitHubCalendar(props) {
    const { colors } = props;

    return (
        <GitHubCalendar
            startDate={'2020-01-01'}
            endDate={'2020-12-31'}
            data={generateSampleData()}
        />
    );
}

export default OthersGitHubCalendar;
