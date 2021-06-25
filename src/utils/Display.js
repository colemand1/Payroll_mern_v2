import React from 'react'
import {connect} from 'react-redux'
import Employee from '../Employee-Model'
import {Button, Container} from 'react-bootstrap'

class Display extends React.Component{
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
    
    onSubmit(e){
        e.preventDefault();
        this.setState({
            data: this.props.employee,
            type: this.props.type
        });
        console.log("Display Componenet-> state.data", this.state.data)

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
                <h3>Display State</h3>
                <Button type="submit" onClick={this.onSubmit} id="load" variant="outline-dark">Display</Button>
                <br />
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
       employee: state.employee
   }
}
export default connect(mapStateToProps)(Display)