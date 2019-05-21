import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ListGroup} from 'react-bootstrap';
import {getContact} from "../actions";
import UserCall from "../components/user-call";

class ContactsCallPage extends Component {
    componentDidMount() {
        const {_id} = this.props.match.params;
        this.props.getContact(_id);
    }

    render() {
        const {_id} = this.props.match.params;
        const {contact} = this.props;

        if (_id) {
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
    return bindActionCreators({getContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsCallPage);