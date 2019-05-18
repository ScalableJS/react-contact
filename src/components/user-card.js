import React, {Component} from 'react';
import {Card, Button} from 'react-bootstrap';

class UserCard extends Component {
    deleteCard() {
        alert('removed')
    }
    callPhone() {
        alert('call')
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <div name='user'/>
                        {this.props.contact.name.first} {this.props.contact.name.last}
                    </Card.Title>
                    <Card.Text>
                        <p>
                            <div name='phone'/>
                            <a href={`tel:${this.props.contact.phone}`}
                               onClick={() => this.callPhone(this.props.contact._id)}
                            >{this.props.contact.phone}</a>
                        </p>
                        <p>
                            <div name='mail'/>
                            <a href={`mailto:${this.props.contact.email}`}>{this.props.contact.email}</a>

                        </p>

                    </Card.Text>
                    <hr/>
                    <Button variant="link" href={`/contacts/edit/${this.props.contact._id}`}> Edit</Button>
                    <Button variant="primary"
                            onClick={() => this.deleteCard(this.props.contact._id)}> Delete</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default UserCard;
