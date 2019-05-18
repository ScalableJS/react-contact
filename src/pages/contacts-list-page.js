import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import UserCard from '../components/user-card';
import contacts from '../DummyData/dummy-users';

class ContactsListPage extends Component {
    createUserCards(contacts) {
        return contacts.map((contact, idx) => (
                <Col md={6} lg={4} key={idx}>
                    <UserCard key={contact._id} contact={contact} deleteContact={null}/>
                </Col>
            )
        );
    }

    render() {
        return (<Row>{this.createUserCards(contacts)}</Row>)
    }
}

export default ContactsListPage;