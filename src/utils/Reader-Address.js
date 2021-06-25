import React from 'react';
import {getWeek, getPayDay, getDay} from '../utils/utilMethods'



const ReaderAddress = (key, rows) =>{
    try{
                var stateArray = [];
                if (rows !== null) {
                    //iterate through all the rows
                    rows.map((item, index) => {
                        //if it's not a blank header section
                        if (index > 6) {
                        var employeeObj = {
                            firstName: item[key.firstname],
                            lastName: item[key.lastName],
                            phoneNumber: item[key.phoneNumber]
                            
                        }
                        console.log("Reader.Employee Object", employeeObj )
                        stateArray.push(employeeObj);
                        }
                        return stateArray;
                    }); 
                }
                return stateArray;
    }catch(err) {
        console.log(err);
    }
    
}

export default ReaderAddress;