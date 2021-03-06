import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form';
import {Row, Col, Button, FormGroup, FormControl} from 'react-bootstrap';


const renderField = ({input, label, type, meta: {touched, error}}) => {
    return <FormControl
        type={type}
        placeholder={label}
        value={input.value}
        onChange={input.onChange}/>
};

class UserForm extends Component {
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
    form: 'UserForm',  // a unique identifier for this form
    enableReinitialize: true,
})(UserForm);
