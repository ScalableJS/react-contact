import React from 'react';
import {Card} from 'react-bootstrap';

export default function UserCard({contact, deleteContact}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <div name='user'/>
                    {contact.name.first} {contact.name.last}
                </Card.Title>
                <Card.Text>
                    <p>
                        <div name='phone'/>
                        {contact.phone}</p>
                    <p>
                        <div name='mail'/>
                        {contact.email}</p>
                </Card.Text>
            </Card.Body>

        </Card>
    )
}
