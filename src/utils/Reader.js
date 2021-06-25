import React from 'react';
import {getWeek, getPayDay, getDay} from '../utils/utilMethods'



const Reader = (key, rows) =>{
    try{
                var stateArray = [];
                const week = getWeek()
                const payDay = getPayDay()
                console.log("Reader.payDay: ", payDay)
                console.log("week.monday", week.monday)
                console.log("Reader.Rows: Input Value", rows );
                console.log("Reader.Key: Input Value", key )
                if (rows !== null) {
                    //iterate through all the rows
                    rows.map((item, index) => {
                    if (index !== 0) {
                        //if it's not a blank header section
                        if (item[1] !== null && item[2] !== null) {
                        var employeeObj = {
                            firstName: item[key.firstname],
                            lastName: item[key.lastName],
                            overtimeHours: item[key.overtimeHours],
                            totalHours: item[key.totalHours],
                            dailyHours: {
                            monday: item[key.dates.monday],
                            tuesday: item[key.dates.tuesday],
                            wednesday: item[key.dates.wednesday],
                            thursday: item[key.dates.thursday],
                            friday: item[key.dates.friday],
                            saturday: item[key.dates.saturday],
                            sunday: item[key.dates.sunday]
                            },
                            dates: {
                            monday: getDay(week.monday),
                            tuesday: getDay(week.tuesday),
                            wednesday: getDay(week.wednesday),
                            thursday: getDay(week.thursday),
                            friday: getDay(week.friday),
                            saturday: getDay(week.saturday),
                            sunday: getDay(week.sunday),
                            payDay: payDay.month + "/" + payDay.day
                            } 
                        }
                        console.log("Reader.Employee Object", employeeObj )
                        stateArray.push(employeeObj);
                        }
          
                    }
                        return stateArray;
                    }); 
                }
                return stateArray;
    }catch(err) {
        console.log(err);
    }
    
}

export default Reader;