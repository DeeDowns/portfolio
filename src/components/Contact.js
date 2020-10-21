import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { Col, Button, Form, FormGroup, Label, Input, FormText  } from 'reactstrap'
import Footer from './Footer'

const initialFormValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const Contact = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChanges = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const sendEmail = event => {
        event.preventDefault()

        emailjs.sendForm('service_2t2az7k', 'port-contact-template', event.target, 'user_T8Vpe2eBIkZG2esgr2x3Z')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setFormValues(initialFormValues)
    }

    const consoleThis = event => {
        event.preventDefault()
        console.log('hi')
    }

    return (
        <div className='contact-container'>
            
            <Form className='contact-form' onSubmit={sendEmail}>
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
                            onChange={handleChanges}
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
                            onChange={handleChanges}
                        />
                    </Col>
                </FormGroup>
               
                <FormGroup>
                    <Label sm={3} >Subject</Label>
                    <Col sm={8}>
                        <Input
                            style={{ fontSize: '1.8rem'}}
                            type='text'
                            name='subject'
                            id='name'
                            placeholder='Cool Subject'
                            value={formValues.subject}
                            onChange={handleChanges}
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
                            onChange={handleChanges}
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