import React from 'react'
import {send} from '../utils/textMethods'
import {connect} from 'react-redux'
import Display  from '../utils/DisplayText'
import {Container, Row, Col, Button, Form, InputGroup, FormControl} from 'react-bootstrap'
import Text from '../Components/Text'
import {getEmployeefromStorage} from '../utils/utilMethods'

class Twillio extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: {}
        }
        this.onSendIt = this.onSendIt.bind(this)
    }

    componentDidMount(){
        console.log("Twillio.getEmployeefromStorage: ", getEmployeefromStorage())
        this.setState({
            data: this.props.employee
        })
    }

    onSendIt(){ 
        send() 
        console.log("Sending Text")
        return
    }

    render(){
        return (
        
        <Container>
            <Row>
                <Col><Display data={this.state.data} type='text' /></Col>
                {/* <Col>
                   <Text />
                </Col> */}
            </Row>

        </Container>
        
        )
    }
}function mapStateToProps(state){
    return{
        employee: state
    }
 }
 export default connect(mapStateToProps)(Twillio)