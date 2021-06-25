import React from 'react'
import {Container, Row, Col, Button, Form, InputGroup, FormControl} from 'react-bootstrap'

export default class Text extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            message: {
              to: '6146957708',
              body: 'Test message'
            },
            submitting: false,
            error: false,
            employee: null
          };
          this.onHandleChange = this.onHandleChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
      this.setState({
        employee: this.props.employee
      })
    }
    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
      }

      onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        console.log("TextJS.OnSubmit.this.state.message: ", this.state.message)
        try {
          fetch('http://localhost:3000/text/api/messages', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  to: '',
                  body: ''
                }
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
        } catch (error) {
          console.log(error)
        }
        
      }
    render(){
        return(
            <Container>
            <Row>
              <Form onSubmit={this.onSubmit}>
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="numberIcon">Send to #</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="To"
                    aria-label="To"
                    aria-describedby="basic-addon1"
                    type="tel"
                    name="to"
                    id="to"
                    value={this.state.message.to}
                    onChange={this.onHandleChange}
                />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                    <InputGroup.Text htmlFor="body">Body:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        as="textarea" 
                        aria-label="With textarea"
                        name="body"
                        id="body"
                        value={this.state.message.body}
                        onChange={this.onHandleChange}
                    />
                </InputGroup>
                <Button 
                    type="submit"
                    disabled={this.state.submitting}
                    
                >
                    Send message
                </Button>
              </Form>
                
            </Row>
            </Container>
        )
    }
}