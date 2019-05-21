import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import UserForm from '../components/user-form';
import { SubmissionError } from 'redux-form';
import {getContact, newContact, updateContact, saveContact} from '../actions';


class ContactsFormPage extends Component {
    state = {
        redirect: false
    };

    componentDidMount() {
        const {_id} = this.props.match.params;
        if (_id) {
            this.props.getContact(_id);
        } else {
            this.props.newContact();
        }
    }

    submit = (contact) => {
        if (contact._id) {
            return this.props.updateContact(contact)
                .then(response => this.setState({redirect: true}))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        } else {
            return this.props.saveContact(contact)
                .then(response => this.setState({redirect: true}))
                .catch(err => {
                    throw new SubmissionError(this.props.errors)
                })
        }
    };

    render() {
        const {_id} = this.props.match.params;
        if (this.state.redirect) {
            return <Redirect to="/"/>
        } else {
            if (_id) {
                if (this.props.contact) {
                    return (
                        <UserForm
                            onSubmit={this.submit}
                            contact={this.props.contact}
                            isNew={false}
                        />)
                } else if (this.props.contact === null) {
                    return <h1>The contact is missing or deleted</h1>
                } else {
                    return <h1>Loading ...</h1>
                }
            } else {
                return (
                    <UserForm
                        onSubmit={this.submit}
                        contact={{}}
                        isNew={true}

                    />)
            }
        }
    }
}

function mapStateToProps(state) {
    return {
        contact: state.contactStore.contact,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getContact, newContact, updateContact, saveContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFormPage);
