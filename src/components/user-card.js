import React, {Component} from 'react';
import {Icon} from 'react-icons-kit'
import {user} from 'react-icons-kit/icomoon/user'
import {phone} from 'react-icons-kit/icomoon/phone'
import {mail2 as mail} from 'react-icons-kit/icomoon/mail2'


import {Card, Button} from 'react-bootstrap';

export default function UserCard({contact, deleteContact, callPhone}) {
    return (
        <Card className={"m-2"}>
            <Card.Body>
                <Card.Title>
                    <span className={'mr-1'} style={{width: 24, height: 24, display: 'inline-block', color: '#2A9D8F'}}>
                        <Icon size={'100%'} icon={user}/>
                    </span>

                    <span className="align-middle">{contact.name.first} {contact.name.last}</span>
                </Card.Title>
                <Card.Text>
                    <span className={'mr-1'} style={{width: 24, height: 24, display: 'inline-block', color: '#2A9D8F'}}>
                        <Icon size={'100%'} icon={phone}/>
                    </span>
                    <a href={`tel:${contact.phone}`}
                       onClick={() => callPhone(contact._id)}
                    >{contact.phone}</a>
                </Card.Text>
                <span className={'mr-1'} style={{width: 24, height: 24, display: 'inline-block', color: '#2A9D8F'}}>
                    <Icon size={'100%'} icon={mail}/>
                </span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <Card.Text>
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


