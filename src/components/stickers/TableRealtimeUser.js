import React, { useState, useEffect } from 'react';
import { RealtimeTable } from '@stickyboard/table';

const users = [
    {
        id: 1,
        email: 'inje@soaple.io',
        name: 'Inje Lee',
    },
    {
        id: 2,
        email: 'jessica@gmail.com',
        name: 'Jessica',
    },
    {
        id: 3,
        email: 'michael@hotmail.com',
        name: 'Michael',
    },
    {
        id: 4,
        email: 'robert@yahoo.com',
        name: 'Robert',
    },
    {
        id: 5,
        email: 'jane@gmail.com',
        name: 'Jane',
    },
    {
        id: 6,
        email: 'tracer@gmail.com',
        name: 'Tracer',
    },
    {
        id: 7,
        email: 'brad@gmail.com',
        name: 'Brad',
    },
    {
        id: 8,
        email: 'tony@gmail.com',
        name: 'Tony',
    },
    {
        id: 9,
        email: 'donald@yahoo.com',
        name: 'Donald',
    },
    {
        id: 10,
        email: 'arnold@gmail.com',
        name: 'Arnold',
    },
    {
        id: 11,
        email: 'tom@hotmail.com',
        name: 'Tom',
    },
    {
        id: 12,
        email: 'leo@gmail.com',
        name: 'Leo',
    },
    {
        id: 13,
        email: 'vivienne@gmail.com',
        name: 'Vivienne',
    },
    {
        id: 14,
        email: 'bob@gmail.com',
        name: 'Bob',
    },
];

function TableRealtimeUser(props) {
    const [recentUsers, setRecentUsers] = useState([]);
    const { colors } = props;

    startGeneratingRealtimeData = () => {
        // Users
        setInterval(() => {
            let randomIndex = Math.floor(Math.random() * users.length);

            recentUsers.unshift(users[randomIndex]);
            if (recentUsers.length > 10) {
                recentUsers.pop();
            }

            setRecentUsers(recentUsers);
        }, 1500);
    };

    function onAnimationEnd(dataKey) {
        if (recentUsers.length > 100) {
            setRecentUsers(recentUsers.slice(1, 100));
        }
    }

    return (
        <RealtimeTable
            title={'Real-time Users'}
            data={recentUsers}
            dataKey={'recentUsers'}
            onAnimationEnd={onAnimationEnd}
        />
    );
}

export default TableRealtimeUser;
