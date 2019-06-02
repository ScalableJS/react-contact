import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchContacts} from '../actions/contacts';
import {deleteContact} from '../actions/deleteContact';
import {Row, Col} from 'react-bootstrap';
import Pages from '../components/pages';
import UserCard from '../components/user-card';

const LIMIT = 6;
class ContactsListPage extends Component {
    componentDidMount() {
        const activePage = Number(this.props.match.params.page) || 1;
        this.props.fetchContacts(activePage, LIMIT);
    };

    componentDidUpdate(prevProps) {

        if (this.props.match.params.page !== prevProps.match.params.page) {
            const activePage = Number(this.props.match.params.page) || 1;
            this.props.fetchContacts(activePage, LIMIT);
        }

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
        const activePage = Number(this.props.match.params.page) || 1;
        if (this.props.pending) {
            return <h1>Loading ...</h1>
        } else {
            return ([
                <Row key={1}>{this.createUserCards(this.props.contacts)}</Row>,
                <Row key={2}>
                    <Pages active={activePage} count={this.props.count} limit={LIMIT}></Pages>
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