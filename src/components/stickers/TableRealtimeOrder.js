import React, { useState, useEffect } from 'react';
import { RealtimeTable } from '@stickyboard/table';

const orders = [
    {
        id: 112304987,
        product: 'Milk',
        payment: '3.99$',
    },
    {
        id: 112304988,
        product: 'Cola',
        payment: '1.99$',
    },
    {
        id: 112304989,
        product: 'Wet Tissue',
        payment: '5.80$',
    },
    {
        id: 112304990,
        product: 'Popcorn',
        payment: '2.45$',
    },
    {
        id: 112304991,
        product: 'Dish',
        payment: '12.99$',
    },
    {
        id: 112304992,
        product: 'Trash bag',
        payment: '15.99$',
    },
    {
        id: 112304993,
        product: 'Bowl set',
        payment: '25.99$',
    },
    {
        id: 112304994,
        product: 'Cake',
        payment: '20.10$',
    },
    {
        id: 112304995,
        product: 'Eggs',
        payment: '7.89$',
    },
];

function TableRealtimeOrder(props) {
    const [recentOrders, setRecentOrders] = useState([]);
    const { colors } = props;

    startGeneratingRealtimeData = () => {
        // Orders
        setInterval(() => {
            let randomIndex = Math.floor(Math.random() * orders.length);

            recentOrders.unshift(orders[randomIndex]);
            if (recentOrders.length > 10) {
                recentOrders.pop();
            }

            setRecentOrders(recentOrders);
        }, 2000);
    };

    function onAnimationEnd(dataKey) {
        if (recentOrders.length > 100) {
            setRecentOrders(recentOrders.slice(1, 100));
        }
    }

    return (
        <RealtimeTable
            title={'Real-time Orders'}
            data={recentOrders}
            dataKey={'recentOrders'}
            onAnimationEnd={onAnimationEnd}
        />
    );
}

export default TableRealtimeOrder;
