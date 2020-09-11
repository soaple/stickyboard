import React from 'react';
import { CardList } from '@stickyboard/card-list';

const cardListData = [
    {
        title: "Business meeting",
        description: 'Meeting with our partner.',
        author: 'taenykim',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'BUSINESS',
        badgeColor: '#4446fb',
    },
    {
        title: "OpenSource meetup",
        description: '7th opensource meetup in Seoul',
        author: 'soaple',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'MEETUP',
        badgeColor: '#fb4444',
    },
    {
        title: "Team lunch time",
        description: 'Developer team monthly lunch time.',
        author: 'jaemin',
        date: new Date().toISOString(),
        comment: 5,
        heart: 5,
        view: 27,
        share: 4,
        badgeText: 'LUNCH',
        badgeColor: '#ffed00',
    },
    {
        title: "Developer meeting",
        description: 'How to develop our map component?',
        author: 'seonghoon',
        date: new Date().toISOString(),
        comment: 3,
        heart: 2,
        view: 13,
        share: 2,
        badgeText: 'DEV',
        badgeColor: '#00c40e',
    },
];

function OthersCardList(props) {
    return (
        <CardList
            data={cardListData}
            title={'Today\'s Event'}
            default={16}
            offset={16}
        />
    );
}

export default OthersCardList;
