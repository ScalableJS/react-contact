import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form, Row, Col, Button, FormGroup, FormControl} from 'react-bootstrap';


const renderField = ({input, label, type, meta: {touched, error}}) => {
    return <FormControl
        type={type}
        placeholder={label}

        value={input.value}
        onChange={input.onChange} />
    //  return <div>
    //
    //     <label>{label}</label>
    //     <input {...input} placeholder={label} type={type}/>
    //     {touched && error && <span className="error">{error.message}</span>}
    // </div>
};

class UserForm extends Component {

    // Load Contact Asynchronously
    componentDidMount() {
        this.props.initialize(this.props.contact)
    };


    render() {
        const {handleSubmit, pristine, submitting} = this.props;
        return (
            <Row>
                <Col>
                    <h1>Add New Contact</h1>
                    <Form onSubmit={handleSubmit} loading={`true`}>
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

export default reduxForm({form: 'contact'})(UserForm);