import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {Container, Row, Col} from 'react-bootstrap'
import WeekPicker from './Components/WeekPicker'

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { DayContext } from "twilio/lib/rest/bulkexports/v1/export/day";

function DatePick(){ 
  const [startDate, setStartDate] = useState(new Date());
  var printDate = startDate.toString
  const handleCalendarClose = (date) =>{
      console.log(date)
  }

  const handleChange = (date) =>{
      const day = date.getDay()
      const month = date.getMonth()
    //   console.log("Date Picker Date", date)
    //   console.log("Date Picker: Day", day)
    //   console.log("Date Picker: Month", month)
  }
  return (
        <Container>
            <Row>
                <Col className="m-4">
                    <h3>Pay Week</h3>
                    <WeekPicker />
                </Col>
                <Col className="m-4">
                    <h3>Pay Day</h3>
                    <DatePicker 
                            selected={startDate} 
                            onChange={date => handleChange(date)} 
                            inline
                        />
                </Col>
            </Row>
        </Container>
  );
};

export default DatePick