import React, {Component} from 'react';
import {Redirect} from 'react-router';
import UserCall from "../components/user-call";

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col} from 'react-bootstrap';
import {getContact, newContact, saveContact, updateContact} from "../actions";


class ContactsCallPage extends Component {
    state = {
        redirect: false
    };

    componentDidMount() {
        const {_id} = this.props.match.params;
        if (_id) {
            this.props.getContact(_id);
        }
    }

    render() {
        const {_id} = this.props.match.params;
        if (this.state.redirect) {
            return <Redirect to="/"/>
        } else {
            if (_id) {
                if (this.props.contact) {
                    return (
                        <UserCall
                            contact={this.props.contact}
                        />)
                } else if (this.props.contact === null) {
                    return <h1>The contact is missing or deleted</h1>
                } else {
                    return <h1>Loading ...</h1>
                }
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