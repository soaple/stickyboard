import React, { useState, useEffect } from 'react';
import { RealtimeMessageTable } from '@stickyboard/table';

const messages = [
    {
        id: 1120391,
        sender: {
            id: 1,
            email: 'inje@soaple.io',
            name: 'Inje Lee',
            imgUrl: '/static/image/man.jpg',
        },
        message: 'Hello, Jane! Long time no see.',
    },
    {
        id: 1120398,
        sender: {
            id: 8,
            email: 'jane@gmail.com',
            name: 'Jane',
            imgUrl: '/static/image/woman.jpg',
        },
        message: 'Hello, I am Jane.',
    },
    {
        id: 1121233,
        sender: {
            id: 1,
            email: 'inje@soaple.io',
            name: 'Inje Lee',
            imgUrl: '/static/image/man.jpg',
        },
        message: "Why don't you taking a break with a cup of tea?",
    },
    {
        id: 1120397,
        sender: {
            id: 8,
            email: 'jane@gmail.com',
            name: 'Jane',
            imgUrl: '/static/image/woman.jpg',
        },
        message: 'Do you have a time to have a conference now?',
    },
];

function TableRealtimeMessage(props) {
    const [recentMessages, setRecentMessages] = useState([]);
    const { colors } = props;

    startGeneratingRealtimeData = () => {
        // Messages
        setInterval(() => {
            let randomIndex = Math.floor(Math.random() * messages.length);

            recentMessages.push(messages[randomIndex]);
            if (recentMessages.length > 10) {
                recentMessages.splice(9, 1);
            }

            setRecentMessages(recentMessages);
        }, 3000);
    };

    function onAnimationEnd(dataKey) {
        if (recentMessages.length > 100) {
            setRecentMessages(recentMessages.slice(1, 100));
        }
    }

    return (
        <RealtimeMessageTable
            title={'Real-time Messages'}
            data={recentMessages}
            dataKey={'recentMessages'}
            onAnimationEnd={onAnimationEnd}
        />
    );
}

export default TableRealtimeMessage;
