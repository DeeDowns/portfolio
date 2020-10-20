import React, { useState } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap'
import Footer from './Footer'

const initialFormValues = {
    name: '',
    email: '',
    message: ''
}
const Contact = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    return (
        <div className='contact-container'>
            
            <Form className='contact-form'>
                <h1>Get In Touch</h1>
                <FormGroup>
                    <Label sm={3} >Name</Label>
                    <Col sm={8}>
                        <Input
                            style={{ fontSize: '1.8rem'}}
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Cool Kid'
                            value={formValues.name}
                            // onChange={}
                        />
                    </Col>
                   
                </FormGroup>
                
                <FormGroup>
                    <Label sm={3} >Email</Label>
                    <Col sm={8}>
                        <Input
                            style={{ fontSize: '1.8rem'}}
                            type='email'
                            name='email'
                            id='email'
                            placeholder='CoolKid@email.com'
                            value={formValues.email}
                            // onChange={}
                        />
                    </Col>
                </FormGroup>
               

                <FormGroup>
                    <Label sm={3} >Message</Label>
                    <Col sm={10}>
                        <Input 
                            style={{ fontSize: '1.8rem', height: '300px'}}
                            type='textarea'
                            name='message'
                            id='message'
                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            value={formValues.message}
                            // onChange={}
                        />
                    </Col>
                </FormGroup>
                <Col sm={10}>
                    <Button style={{ fontSize: '1.8rem' }}>Submit</Button>
                </Col>
            </Form>
            <Footer/>
        </div>
    )
}

export default Contact