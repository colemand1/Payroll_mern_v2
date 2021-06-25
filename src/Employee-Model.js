import React from "react";
import {Form, Button, InputGroup, FormControl, Row, Col, Container, Alert} from 'react-bootstrap'
import TextSingle from './Components/Text-Single'



const Employee = (props) => {
  const employee = props.employee; 
  const Overtime = employee.overtimeHours != null ? <p>Overtime Worked: {employee.overtimeHours} </p> : <p> No Overtime Worked </p>

  return (
    <div>
      <h3>
        {employee.lastName}, {employee.firstName}
      </h3>
      <h4>Here is your paystub for Friday {employee.dates.payDay} </h4>
      <p>
        Hours Worked Last Week: <strong>{employee.totalHours}</strong>
      </p>
        {Overtime}
      <p>
        Monday {employee.dates.monday}: <strong>{employee.dailyHours.monday}</strong>
      </p>
      <p>
        Tuesday {employee.dates.tuesday}: <strong>{employee.dailyHours.tuesday}</strong>
      </p>
      <p>
        Wednesday {employee.dates.wednesday}:{" "}<strong>{employee.dailyHours.wednesday}</strong>
      </p>
      <p>
        Thursday {employee.dates.thursday}:{" "}
        <strong>{employee.dailyHours.thursday}</strong>
      </p>
      <p>
        Friday {employee.dates.friday}: <strong>{employee.dailyHours.friday}</strong>
      </p>
      <p>
        Saturday {employee.dates.saturday}:{" "}
        <strong>{employee.dailyHours.saturday}</strong>
      </p>
      <p>
        Sunday {employee.dates.sunday}: <strong>{employee.dailyHours.sunday}</strong>
      </p>
      <h5>Check Amount: ${employee.netPay}</h5>
      <p>
        If you have any questions/concerns TEXT Meaghan at {" "}
        <strong>513-208-7376</strong>
      </p>
      <hr />
    </div>
  );
}
//takes props.employee and props.type
export default class EmployeeModal extends React.Component{
  constructor(props){
    super(props)
    this.state={
      employee:{},
      type: ""
    }
  }

  componentDidMount(){
    this.setState({
      employee: this.props.employee,
      type: this.props.type
    })
  }



  render(){
    var value = null
    switch (this.state.type) {
      case 'text':
       value = <TextSingle employee={this.state.employee} type="text" />
          break;
        
      case 'reader':
          value = <Employee employee={this.state.employee} type='reader'/>
          break;
      default:
          value =(
            <Alert variant='danger'>
              {JSON.stringify(this.state)}
            </Alert>)
          break;
          
    }
    return value
  
}
}
  



      
