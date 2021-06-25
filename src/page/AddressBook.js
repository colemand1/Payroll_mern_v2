import React from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'

class AddressBook extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            phoneNumber:""
        }
    }

    handleChange(e){
        const target = e.target
        const name = target.id
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <Container
                 
                
            >
                <Row className="justify-content-center">
                    <div
                        style={{
                            height:"400px",
                            width:"600px",
                            border: "1px solid black"
                        }}
                    >
                    </div>
                </Row>
                <Form>
                    <Form.Group controlId="firstName">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="phoneNumber">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="number" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="isActive">
                        <Form.Check type="checkbox" label="disable" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
                    
            </Container>
        )
    }

}

export default connect(
    null,
    null
)(AddressBook)