// src/components/page/ComponentTablePage.js

import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Sticker } from '@stickyboard/core';
import { TableWithPagination, RealtimeTable, RealtimeMessageTable
} from '@stickyboard/table';

import PageBase from 'components/base/PageBase';

const styles = theme => ({
    root: {
    },
});

const initialLayout = {
    lg: [{"i":"Table1","x":0,"y":0,"w":6,"h":7},{"i":"Table2","x":6,"y":0,"w":6,"h":7},{"i":"RealtimeTable1","x":0,"y":7,"w":4,"h":7},{"i":"RealtimeTable2","x":4,"y":7,"w":4,"h":7},{"i":"RealtimeMessageTable","x":8,"y":7,"w":4,"h":7}],
    md: [{"i":"Table1","x":0,"y":0,"w":6,"h":7},{"i":"Table2","x":6,"y":0,"w":6,"h":7},{"i":"RealtimeTable1","x":0,"y":7,"w":4,"h":7},{"i":"RealtimeTable2","x":4,"y":7,"w":4,"h":7},{"i":"RealtimeMessageTable","x":8,"y":7,"w":4,"h":7}],
    sm: [{"i":"Table1","x":0,"y":0,"w":8,"h":7},{"i":"Table2","x":0,"y":7,"w":8,"h":7},{"i":"RealtimeTable1","x":0,"y":14,"w":8,"h":6},{"i":"RealtimeTable2","x":0,"y":20,"w":4,"h":6},{"i":"RealtimeMessageTable","x":4,"y":20,"w":4,"h":6}],
    xs: [{"i":"Table1","x":0,"y":0,"w":6,"h":7},{"i":"Table2","x":0,"y":7,"w":6,"h":7},{"i":"RealtimeTable1","x":0,"y":14,"w":6,"h":6},{"i":"RealtimeTable2","x":0,"y":20,"w":6,"h":6},{"i":"RealtimeMessageTable","x":0,"y":26,"w":6,"h":6}],
    xxs: [{"i":"Table1","x":0,"y":0,"w":4,"h":7},{"i":"Table2","x":0,"y":7,"w":4,"h":7},{"i":"RealtimeTable1","x":0,"y":14,"w":4,"h":6},{"i":"RealtimeTable2","x":0,"y":20,"w":4,"h":6},{"i":"RealtimeMessageTable","x":0,"y":26,"w":4,"h":6}],
};

const initialBlocks = [{"i":"Table1"},{"i":"Table2"},{"i":"RealtimeTable1"},{"i":"RealtimeTable2"},{"i":"RealtimeMessageTable"}];

class ComponentTablePage extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            // Data
            orders: [
                {
                    id: 112304987,
                    product: 'Milk',
                    payment: '3.99$',
                }, {
                    id: 112304988,
                    product: 'Cola',
                    payment: '1.99$',
                }, {
                    id: 112304989,
                    product: 'Wet Tissue',
                    payment: '5.80$',
                }, {
                    id: 112304990,
                    product: 'Popcorn',
                    payment: '2.45$',
                }, {
                    id: 112304991,
                    product: 'Dish',
                    payment: '12.99$',
                }, {
                    id: 112304992,
                    product: 'Trash bag',
                    payment: '15.99$',
                }, {
                    id: 112304993,
                    product: 'Bowl set',
                    payment: '25.99$',
                }, {
                    id: 112304994,
                    product: 'Cake',
                    payment: '20.10$',
                }, {
                    id: 112304995,
                    product: 'Eggs',
                    payment: '7.89$',
                }
            ],
            users: [
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
            ],
            messages: [
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
                    message: 'Why don\'t you taking a break with a cup of tea?',
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
            ],
            recentOrders: [],
            recentUsers: [],
            recentMessages: [],
        }
    }

    componentDidMount () {
        this.startGeneratingRealtimeData();
    }

    startGeneratingRealtimeData = () => {
        // Orders
        setInterval(() => {
            let orders = this.state.orders;
            let recentOrders = this.state.recentOrders;
            let randomIndex = Math.floor(Math.random() * orders.length);

            // recentOrders.unshift(orders[randomIndex]);
            recentOrders.push(orders[randomIndex]);
            // if (recentOrders.length > 10) {
            //     recentOrders = recentOrders.slice(1, 10);
            // }

            this.setState({
                recentOrders: recentOrders
            })
        }, 2000);

        // Users
        setInterval(() => {
            let users = this.state.users;
            let recentUsers = this.state.recentUsers;
            let randomIndex = Math.floor(Math.random() * users.length);

            // recentOrders.unshift(orders[randomIndex]);
            recentUsers.push(users[randomIndex]);
            // if (recentUsers.length > 10) {
            //     recentUsers = recentUsers.slice(1, 10);
            // }

            this.setState({
                recentUsers: recentUsers
            })
        }, 1500);

        // Messages
        setInterval(() => {
            let messages = this.state.messages;
            let recentMessages = this.state.recentMessages;
            let randomIndex = Math.floor(Math.random() * messages.length);

            // recentOrders.unshift(orders[randomIndex]);
            recentMessages.push(messages[randomIndex]);
            // if (recentMessages.length > 10) {
            //     recentMessages = recentMessages.slice(1, 10);
            // }

            this.setState({
                recentMessages: recentMessages
            })
        }, 3000);
    }

    onAnimationEnd = (dataKey) => {
        let data = this.state[dataKey];
        if (data.length > 100) {
            data = data.slice(1, 100);

            this.setState({
                [dataKey]: data,
            });
        }
    }

    generateBlock = (block) => {
        switch (block.i) {
        case 'Table1':
            return (
                <Sticker
                    key={block.i}>
                    <TableWithPagination
                        title={'Orders'}
                        data={this.state.orders}
                        rowsPerPage={10} />
                </Sticker>
            )
        case 'Table2':
            return (
                <Sticker
                    key={block.i}>
                    <TableWithPagination
                        title={'Users'}
                        data={this.state.users}
                        rowsPerPage={10} />
                </Sticker>
            )
        case 'RealtimeTable1':
            return (
                <Sticker
                    key={block.i}>
                    <RealtimeTable
                        title={'Real-time Orders'}
                        data={this.state.recentOrders}
                        dataKey={'recentOrders'}
                        onAnimationEnd={this.onAnimationEnd} />
                </Sticker>
            )
        case 'RealtimeTable2':
            return (
                <Sticker
                    key={block.i}>
                    <RealtimeTable
                        title={'Real-time Users'}
                        data={this.state.recentUsers}
                        dataKey={'recentUsers'}
                        onAnimationEnd={this.onAnimationEnd} />
                </Sticker>
            )
        case 'RealtimeMessageTable':
            return (
                <Sticker
                    key={block.i}>
                    <RealtimeMessageTable
                        title={'Real-time Messages'}
                        data={this.state.recentMessages}
                        dataKey={'recentMessages'}
                        onAnimationEnd={this.onAnimationEnd} />
                </Sticker>
            )
        }
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <PageBase
                generateBlock={this.generateBlock}
                initialLayout={initialLayout}
                initialBlocks={initialBlocks} />
        )
    }
}

ComponentTablePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ComponentTablePage);
