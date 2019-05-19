import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';

export default function UserCard({contact, deleteContact, callPhone}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <span name='user'/>
                    {contact.name.first} {contact.name.last}
                </Card.Title>
                <Card.Text>
                    <span name='phone'/>
                    <a href={`tel:${contact.phone}`}
                       onClick={() => callPhone(contact._id)}
                    >{contact.phone}</a>
                </Card.Text>
                <span name='mail'/>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <Card.Text>
                </Card.Text>
                <hr/>
                <Button variant="link" href={`/contacts/edit/${contact._id}`}> Edit</Button>
                <Button variant="primary"
                        onClick={() => deleteContact(contact._id)}> Delete</Button>
            </Card.Body>
        </Card>
    )
}


