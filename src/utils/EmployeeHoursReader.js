import readXlsxFile from "read-excel-file";
import React from "react";
import Employee from "../Employee-Model";
import Keys from "./Keys"
import ExcelReader from './Reader'
import {useSelector, useDispatch, connect} from 'react-redux';
import {addEmployee, deleteEmployee, updateEmployee, getAllEmployee, findEmployee} from '../redux/actions'
import {Button, Form, FormFile} from 'react-bootstrap'

class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: {},
        data: [],
        sheet: 0,
        isSubmitted: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
      this.setState({
          key: Keys.key,
          sheet: this.props.sheet
      });
      return
  }
  onChange(e) {
    const sheet = this.state.sheet
      try{
    readXlsxFile(e.target.files[0], {sheet}).then((rows) => {
        const key = this.state.key
        const retRows = ExcelReader (key,rows);
        if(retRows){
            this.setState({
                isSubmitted: !this.state.isSubmitted,
                data: retRows
            })
        }
        return retRows
    });
    }catch(err){
        console.log(err)
    }
  }

  onSubmit(e){
      e.preventDefault();
      this.props.addEmployee(this.state.data)
      this.setState({
          isSubmitted: !this.state.isSubmitted
      })
  }
  render() {
    return (
      <div>
        <div>
            <Form onSubmit={this.onSubmit}>
              <Form.File id="input" onChange={this.onChange} />
                <Form.Label>Add Employee Hours Form</Form.Label>
                <Button 
                  variant="dark"
                  type="submit"
                  id="redux"
                >
                    Enter Employee Hours
                </Button>
            </Form>
          {this.state.data.map((item, index) => (
              <Employee 
                key = {index}
                employee = {item}
                type="reader"
              />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
    null,
    {addEmployee}
    )(Reader)
