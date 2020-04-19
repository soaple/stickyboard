import React from 'react';
import { TableWithPagination } from '@stickyboard/table';

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

function TableUser(props) {
    const { colors } = props;

    return (
        <TableWithPagination title={'Users'} data={users} rowsPerPage={10} />
    );
}

export default TableUser;
