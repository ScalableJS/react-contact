import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';

export default function UserCall({contact}) {
    const callTypes = ['Outgoing', 'Incoming', 'Didn\'t connect'];
    // "timestamp": 1556176577183,
    //     "duration": 1075937
    // Load Contact Asynchronously
    // <span>Duration {new Date(item.timestamp)}</span>
    return (
        contact.callHistory.map((item) => {
            const formatCallDate = new Intl.DateTimeFormat('en-GB', {
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            }).format(item.timestamp);

            const formatCallDuration = new Intl.DateTimeFormat('en-GB', {
                minute: 'numeric',
                second: 'numeric'
            }).format(item.duration);

            return <ListGroup.Item key={item._id}>
                <span>{formatCallDate}</span>

                <span>{callTypes[item.type - 1]}</span>
                <span>Duration: {formatCallDuration}</span>
            </ListGroup.Item>
        })
    )
}