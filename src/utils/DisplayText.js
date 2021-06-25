import React from 'react'
import {connect} from 'react-redux'
import Employee from '../Employee-Model'
import {Button, Container} from 'react-bootstrap'
import {updateEmployee} from '../redux/actions'

class DisplayText extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data: [],
            isShowing: false,
            type: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.dispalyData = this.dispalyData.bind(this);
    }
    
    componentDidMount(){
        this.setState({
            type: this.props.type,
            data: this.props.employee
        })
        console.log("Display Componenet-> state.data", this.state.data)
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({
            isShowing: !this.state.isShowing,
            data: this.props.employee
        });
    }
    dispalyData(e){
        e.preventDefault();
        this.setState({
            isShowing: !this.state.isShowing
        })
    }
    render(){
        return(
            
            <Container className="display-container scroll">
                <h3>ShowState</h3>
                <Button type="submit" onClick={this.onSubmit} id="load" variant="outline-dark">Load State</Button>
                <br />
                <label>Display State</label>
                {this.state.data.map((item, index) => (
                    <Employee 
                        key = {index}
                        employee = {item}
                        type={this.state.type}
                    />
                ))}
            </Container>
            )
        } 
    }
function mapStateToProps(state){
   return{
       employee: state.employee,
       address: state.address

   }
}
export default connect(
    mapStateToProps,
    {updateEmployee}
    )(DisplayText)