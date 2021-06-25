import readXlsxFile from "read-excel-file";
import React from "react";
import Employee from "../Employee-Model";
import Keys from "./Keys"
import ReaderAddress from './Reader-Address'
import {connect} from 'react-redux';
import {addAddressList} from '../redux/actions'
import {Button, Form, FormFile} from 'react-bootstrap'

class AddressReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: {},
        data: [],
        isSubmitted: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount(){
      this.setState({
          key: Keys.addressKey
      });
      return
  }
  onChange(e) {
      try{
        readXlsxFile(e.target.files[0]).then((rows) => {
            const key = this.state.key
            const retRows = ReaderAddress(key,rows);
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
      this.props.addAddressList(this.state.data)
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
                <Form.Label>Add Address Book</Form.Label>
                <Button 
                  variant="dark"
                  type="submit"
                  id="redux"
                >
                    Add
                </Button>
            </Form>
          {this.state.data.map((item, index) => (
              // <Employee 
              //   key = {index}
              //   employee = {item}
              //   type="reader"
              // />
              console.log("AddressReader.render.this.state.data.item",item)
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
    null,
    {addAddressList}
    )(AddressReader)
