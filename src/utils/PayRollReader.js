import readXlsxFile from "read-excel-file";
import React from "react";
import Employee from "../Employee-Model";
import Keys from "./Keys"
import {connect} from 'react-redux';
import {updateEmployee} from '../redux/actions'

class PayRollReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        key: {},
        data: [],
        isSubmitted: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.logState = this.logState.bind(this);
  }
  componentDidMount(){
      this.setState({
          key: Keys.payroll
      });
  }
  onChange(e) {
      try{ 
        const key = this.state.key
        var newAr = [];
        readXlsxFile(e.target.files[0]).then((rows) => {
          console.log("Payrol Rows:", rows);
        if(rows != null){
            //iterate through the rows
            rows.map((item, index) =>{
                if(index > 7){
                    if(item[1] !== null && item[2] !== null){
                        var payrollObject = {
                            firstName: item[key.firstname],
                            lastName: item[key.lastName],
                            netPay: item[key.netPay]
                        }
                        newAr.push(payrollObject)
                    }
                }
                return newAr
            })
        }
        console.log("Payroll Array", newAr)
        
    });
      this.setState({
        data: newAr
      })
    
    }catch(err){
        console.log(err)
    }
  }
  logState(e){
    e.preventDefault();
    console.log("PayrollReader - this.props",this.props)
    }   
  onSubmit(e){
      e.preventDefault();
      this.props.updateEmployee(this.state.data)
      this.setState({
          isSubmitted: !this.state.isSubmitted
      })
  }
  render() {

    return (
      <div>
        <div>
                <input type="file" id="input" onChange={this.onChange}/>
            <form>
                <label>Would you like to add this?</label>
                <input type="submit" id="redux" onClick={this.onSubmit} />
            </form>
          {/* {this.state.data.map((item, index) => (
            console.log("PayRollReaderJS.ItemAddedToState: ", item)
          ))} */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
    return {employees: state.employee}
}
export default connect(
    mapStateToProps,
    {updateEmployee}
    )(PayRollReader)
