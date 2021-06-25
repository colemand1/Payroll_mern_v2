import readXlsxFile from "read-excel-file";
import React from "react";
//import Employee from "../Employee-Model";
import Keys from "../utils/Keys"
import ExcelReader from '../utils/Reader'
import {connect} from 'react-redux';
import {addEmployee} from '../redux/actions'
import {Button, Form} from 'react-bootstrap'

class Reader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: {},
        data: [],
        sheet: 8, //There are 8 Companies
        isSubmitted: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
      this.setState({
          key: Keys.key,
      });
      return
  }
  onChange(e) {
      try{
        var i
        for(i=this.state.sheet; i>0; i--) {
            console.log("Reader Checker Ran")
            readXlsxFile(e.target.files[0], {sheet:i}).then((rows) => {
                const key = this.state.key
                var retRows = ExcelReader (key,rows);
                console.log(retRows, "Returned from the reader");
                if(retRows){
                    console.log("Reader.OnChange.retRows: ", retRows)
                    var newData = this.state.data;
                    retRows.forEach(item =>{
                        newData.push(item)
                    });
                    console.log("Reader.OnChange.NewData: ", newData)
                    
                    this.setState({
                        isSubmitted: !this.state.isSubmitted,
                        data: newData
                    })
                }
                return retRows
            });
        }
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
          <Form>
            <Form.File >
              <Form.File.Input id="input" onChange={this.onChange} />
            </Form.File>
              
          </Form>
            <Form>
                <Form.Label>Would you like to add this?</Form.Label>
                <Button
                  type="submit"
                  id="redux"
                  onClick={this.onSubmit}
                  variant="outline-dark"
                >
                  Add to State
                </Button>
            </Form>
          {/* {this.state.data.map((item, index) => (
              <Employee 
                key = {index}
                employee = {item}
                type='reader'
              />
          ))} */}
        </div>
      </div>
    );
  }
}

export default connect(
    null,
    {addEmployee}
    )(Reader)
