import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form';
import {Row, Col, Button, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from "react-redux";
import {fetchContact} from '../actions/contact'

const renderField = ({input, label, type, meta: {touched, error}}) => {
    return <FormControl
        type={type}
        placeholder={label}

        value={input.value}
        onChange={input.onChange}/>
    //  return <div>
    //
    //     <label>{label}</label>
    //     <input {...input} placeholder={label} type={type}/>
    //     {touched && error && <span className="error">{error.message}</span>}
    // </div>
};

class UserForm extends Component {
    // Load Contact Asynchronously
    // componentDidMount() {
    //     this.props.dispatch(fetchContact).then(()=>{
    //         this.props.initialize(this.props.data)
    //         this.setState({load:true})
    //     })
    // };

    // Load Contact Asynchronously
    // componentWillReceiveProps = (nextProps) => {
    //     const { contact } = nextProps;
    //     // Initialize form only once
    //     if(contact._id !== this.props.contact._id) {
    //         this.props.initialize(contact)
    //     }
    // }

    render() {

        const {handleSubmit, pristine, submitting, isNew} = this.props;
        return (
            <Row>
                <Col>
                    <h1>{isNew ? `Add New Contact` : `Edit Contact`}</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Field component={renderField} name="name.first" type="text" label="First Name"/>
                            <Field component={renderField} name="name.last" type="text" label="Last Name"/>
                        </FormGroup>
                        <Field name="phone" type="text" label="Phone" component={renderField}/>
                        <Field name="email" type="text" label="Email" component={renderField}/>
                        <Button variant="primary" type='submit' disabled={pristine || submitting}>Save</Button>
                    </Form>
                </Col>
            </Row>


        )
    }
}

export default reduxForm({
    form: 'UserForm',
    enableReinitialize: true
})(UserForm);

