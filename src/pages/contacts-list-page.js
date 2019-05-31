import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchContacts} from '../actions/contacts';
import {deleteContact} from '../actions/deleteContact';
import {Row, Col, Pagination} from 'react-bootstrap';
import UserCard from '../components/user-card';

const LIMIT = 5;
class ContactsListPage extends Component {
    componentDidMount() {
        const page = Number(this.props.match.params.page) || 1;
        this.props.fetchContacts(page, LIMIT);
    };

    createUserCards(contacts) {
        return contacts.map((contact, idx) => (
                <Col md={6} lg={4} key={idx}>
                    <UserCard key={contact.id} contact={contact} deleteContact={this.props.deleteContact}
                              callPhone={null}/>
                </Col>
            )
        );
    }

    render() {
        if (this.props.pending) {
            return <h1>Loading ...</h1>
        } else {
            return ([
                <Row key={1}>{this.createUserCards(this.props.contacts)}</Row>,
                <Row key={2}>
                    {this.props.count}
                </Row>
            ])
        }
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contactStore.contacts,
        count: state.contactStore.count
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchContacts, deleteContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListPage);