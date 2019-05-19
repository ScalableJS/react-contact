import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAllContacts, deleteContact} from '../actions/index';
import {Row, Col} from 'react-bootstrap';
import UserCard from '../components/user-card';

class ContactsListPage extends Component {
    componentDidMount() {
        this.props.getAllContacts();
    };

    createUserCards(contacts) {
        return contacts.map((contact, idx) => (
                <Col md={6} lg={4} key={idx}>
                    <UserCard key={contact._id} contact={contact} deleteContact={this.props.deleteContact}
                              callPhone={null}/>
                </Col>
            )
        );
    }

    render() {
        if (this.props.contacts) {
            return (<Row>{this.createUserCards(this.props.contacts)}</Row>)
        } else {
            return <h1>Loading ...</h1>
        }
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contactStore.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllContacts, deleteContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListPage);