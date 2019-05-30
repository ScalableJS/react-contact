import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ListGroup} from 'react-bootstrap';
import UserCall from "../components/user-call";
import {fetchContact} from '../actions/contact';

class ContactsCallPage extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchContact(id);
    }

    render() {
        const {id} = this.props.match.params;
        const {contact} = this.props;


        if (id) {
            if (this.props.contact) {
                return (
                    <ListGroup>
                        <UserCall
                            contact={contact}
                        />
                    </ListGroup>)
            } else if (this.props.contact === null) {
                return <h1>The contact is missing or deleted</h1>
            } else {
                return <h1>Loading ...</h1>
            }
        }

    }
}

function mapStateToProps(state) {
    return {
        contact: state.contactStore.contact
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsCallPage);