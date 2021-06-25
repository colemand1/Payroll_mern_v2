import React from "react";
import {Form, Button, InputGroup, FormControl, Row, Col, Container, Alert} from 'react-bootstrap'
import {connect} from 'react-redux'
import {updateText} from '../redux/actions'
import {buildEmployee} from '../utils/textMethods'

class TextSingle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstName: "",
            lastName: "",
            totalHours: 0,
            mondayDates: "",
            tuesdayDates: "",
            wednesdayDates: "",
            thursdayDates: "",
            fridayDates: "",
            saturdayDates: "",
            sundayDates: "",
            mondayHours: 0,
            tuesdayHours: 0,
            wednesdayHours: 0,
            thursdayHours: 0,
            fridayHours: 0,
            saturdayHours: 0,
            sundayHours: 0,
            netPay: 0,
            payDay: "",
            overtime: 0,
            id: 0
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        const employee = this.props.employee;
        console.log("Text-Single.ComponentDidMount.Variable.overtimeHours", employee.overtimeHours)
        this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        totalHours: employee.totalHours,
        overtimeHours: employee.overtimeHours,
        mondayDates: employee.dates.monday,
        tuesdayDates: employee.dates.tuesday,
        wednesdayDates: employee.dates.wednesday,
        thursdayDates: employee.dates.thursday,
        fridayDates: employee.dates.friday,
        saturdayDates: employee.dates.saturday,
        sundayDates: employee.dates.sunday,
        mondayHours: employee.dailyHours.monday,
        tuesdayHours: employee.dailyHours.tuesday,
        wednesdayHours: employee.dailyHours.wednesday,
        thursdayHours: employee.dailyHours.thursday,
        fridayHours: employee.dailyHours.friday,
        saturdayHours: employee.dailyHours.saturday,
        sundayHours: employee.dailyHours.sunday,
        netPay: employee.netPay,
        payDay: employee.dates.payDay,
        id: employee.id
        })
    }
    onChange(event) {
        const name = event.target.id;
        var value = event.target.value;
        if(event.target.type === "number"){
            value = parseFloat(event.target.value).toFixed(2)
        }
        this.setState({
          [name]: value
        });
      }

    onSubmit(event) {
        event.preventDefault()
        const employee = buildEmployee(this.state)
        console.log('Redux.Text-SingleJS.TextSingle.OnSubmit.buildEmployee.return', employee)
        this.props.updateText(employee)
    }
    render(){
        return(

            <Container>
            <hr />
            <h1>{this.state.firstName}, {this.state.lastName}</h1>
            <h4>ID# {this.state.id}</h4>
            <Form onSubmit={this.onSubmit}>
              <Row>
                <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="First Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="firstName"
                    value = {this.state.firstName}
                    onChange= {this.onChange}
                  />
                </InputGroup>
                </Col>
                <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Last Name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="lastName"
                    onChange= {this.onChange}
                    value = {this.state.lastName}
                  />
                </InputGroup>
                </Col>
                <Col>
                <Row>
                  <Row>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Total</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="totalHours"
                      type="number"
                      value = {parseFloat(this.state.totalHours).toFixed(2)}
                      onChange= {this.onChange}
                    />
                  </InputGroup>
                  </Row>
                  <Row>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Overtime</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="number"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="overtimeHours"
                      onChange= {this.onChange}
                      value = {parseFloat(this.state.overtimeHours)}
                    />
                  </InputGroup>
                  </Row>
                </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Monday</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="mondayDates"
                          onChange= {this.onChange}
                          value = {this.state.mondayDates}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Hours</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          type="number"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="mondayHours"
                          onChange= {this.onChange}
                          value = {parseFloat(this.state.mondayHours).toFixed(2)}
                        />
                      </InputGroup>              
                    </Col>
                    <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Tuesday</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="tuesdayDates"
                        onChange= {this.onChange}
                        value = {this.state.tuesdayDates}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Hours</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="number"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="tuesdayHours"
                        onChange= {this.onChange}
                        value = {parseFloat(this.state.tuesdayHours).toFixed(2)}
                      />
                    </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Wednesday</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="wednesdayDates"
                          onChange= {this.onChange}
                          value = {this.state.wednesdayDates}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Hours</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          type="number"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="wednesdayHours"
                          onChange= {this.onChange}
                          value = {parseFloat(this.state.wednesdayHours).toFixed(2)}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Thursday</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="thursdayDates"
                        onChange= {this.onChange}
                        value = {this.state.thursdayDates}
                      />
                    </InputGroup>   
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Hours</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="number"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="thursdayHours"
                        onChange= {this.onChange}
                        value = {parseFloat(this.state.thursdayHours).toFixed(2)}
                      />
                    </InputGroup>              
                    </Col>
                    <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Friday</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="fridayDates"
                        onChange= {this.onChange}
                        value = {this.state.fridayDates}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Hours</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="number"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="fridayHours"
                        onChange= {this.onChange}
                        value = {parseFloat(this.state.fridayHours).toFixed(2)}
                      />
                    </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Saturday</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="saturdayDates"
                          onChange= {this.onChange}
                          value = {this.state.saturdayDates}
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">Hours</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          type="number"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="saturdayHours"
                          onChange= {this.onChange}
                          value = {parseFloat(this.state.saturdayHours).toFixed(2)}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Sunday</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="sundayDates"
                        onChange= {this.onChange}
                        value = {this.state.sundayDates}
                      />
                    </InputGroup>     
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Hours</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="number"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="sundayHours"
                        onChange= {this.onChange}
                        value = {parseFloat(this.state.sundayHours).toFixed(2)}
                      />
                    </InputGroup>           
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                     <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">NetPay</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          type="number"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="netPay"
                          onChange= {this.onChange}
                          value = {parseFloat(this.state.netPay).toFixed(2)}
                        />
                      </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">PayDay</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        id="payDay"
                        onChange= {this.onChange}
                        value = {this.state.payDay}
                      />
                    </InputGroup>
                </Col>
              </Row>
       
                <Button type="submit" variant="outline-dark">Submit Changes</Button>
            </Form>
            <hr />
          </Container>
        )
    }
}

export default connect(
    null,
    {updateText}
    )(TextSingle)