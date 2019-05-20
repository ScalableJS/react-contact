import React, {Component} from 'react';
import {IconUser, IconMail, IconPhone} from './Icons'
import {Card, Button} from 'react-bootstrap';

export default function UserCard({contact, deleteContact, callPhone}) {
    return (
        <Card className={"m-2"}>
            <Card.Body>
                <Card.Title className={'text-nowrap'}>
                    <IconUser/>
                    <span className="align-middle">{contact.name.first} {contact.name.last}</span>
                </Card.Title>
                <Card.Text className={'text-nowrap'}>
                    <IconPhone/>
                    <a href={`tel:${contact.phone}`}
                       onClick={() => callPhone(contact._id)}
                    >{contact.phone}</a>
                </Card.Text>
                <Card.Text className={'text-nowrap'}>
                    <IconMail/>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </Card.Text>
                <hr/>
                <Button variant="link" href={`/contacts/calls/${contact._id}`}> Call history</Button>
                <Button variant="link" href={`/contacts/edit/${contact._id}`}> Edit</Button>
                <Button variant="primary"
                        onClick={() => deleteContact(contact._id)}> Delete</Button>
            </Card.Body>
        </Card>
    )
}