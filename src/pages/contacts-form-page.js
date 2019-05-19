import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {getContact} from '../actions';
import UserForm from '../components/user-form';




class ContactsFormPage extends Component {
    componentDidMount() {
        const { _id } = this.props.match.params;
        if(_id) {
            this.props.getContact(_id);
        } else {

        }
    }

    submit = (contact) => {
        alert('submited')
    };


    render() {
        if (this.props.contact) {
            return (
                <UserForm
                    onSubmit={this.submit} contact={this.props.contact}></UserForm>
            )
        } else {
            return <h1>Loading ...</h1>
        }
    }
}



function mapStateToProps(state) {
    return {
        contact: state.contactStore.contact
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getContact: getContact}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsFormPage);
