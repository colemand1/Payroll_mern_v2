import React from "react";
import DatePicker from "react-datepicker";
import {returnWeeks, returnPayDate, setDates} from '../utils/utilMethods'
import {Button} from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
export default class WeekPicker extends React.Component{
    constructor(props){
        super(props)
        this.state={
            startDate: new Date(),
            endDate: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = dates => {
        const [start, end] = dates;
        this.setState({
            startDate: start,
            endDate: end
        })
      };

    handleSubmit = e =>{
        e.preventDefault()
        const start = this.state.startDate
        const end = this.state.endDate
        const weeks = returnWeeks(start,end)
        const payDay = returnPayDate(end)
        console.log("Monday: ", weeks.monday)
        console.log("Tuesday: ", weeks.tuesday)
        console.log("Wednesday: ", weeks.wednesday)
        console.log("Thursday: ", weeks.thursday)
        console.log("Friday: ", weeks.friday)
        console.log("Saturday: ", weeks.saturday)
        console.log("Sunday: ", weeks.sunday)
        setDates(weeks, payDay)

    }
    render(){
        return(
            <>
                <DatePicker 
                    selected={this.state.startDate} 
                    onChange={this.handleChange} 
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    monthsShown={2}
                    selectsRange
                    inline
                />
                <Button
                    type="submit"
                    onClick={this.handleSubmit}
                    variant="outline-dark"
                >
                    Submit
                </Button>
            </>
        )
    }
}