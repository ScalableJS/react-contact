import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import UserCard from '../components/user-card';
import contacts from '../DummyData/dummy-users';

class ContactsListPage extends Component {
    createUserCards(contacts) {


        return contacts.map((contact, idx) => (
                <Col className="align-self-start">
                    <UserCard key={contact._id} contact={contact} deleteContact={null}/>
                </Col>
            )
        );
    }

    render() {
        const createChunks = (array, size) => {
            const copy = array.concat();
            const chunks = [];

            while (copy.length) {
                chunks.push(copy.splice(0, size));
            }

            return chunks;
        };

        return createChunks(contacts, 2).map((chunk, idx) => {
            return (
                <Row>
                    {this.createUserCards(chunk)}
                </Row>
            )
        });


    }
}

export default ContactsListPage;