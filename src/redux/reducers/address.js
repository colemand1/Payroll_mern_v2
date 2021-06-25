import {setID, getIndexByName, getFromStorage, setToStorage, getState, setAllId} from '../../utils/utilMethods'
const methods = {
    employeeList: 'employeeList',
    addressBook: 'addressBook'
}
//get state from sessionStorage
var useState = getState(methods.addressBook)

const addressReducer = (state=useState, action) =>{
    switch(action.type){
        case "address/add":
        const employeeList = getFromStorage(methods.employeeList)
        let updated = []
            //check if the addressBook state was loaded from session
            if(state.length > 0){
                updated = action.payload.map(item =>{
                    //check if action.payload.item is in state array
                    let index = getIndexByName(state, item)
                    //if payload employee is in state
                    if(index !== null){
                        let employee = state[index]
                        //check if phone numbers are equal
                        if(item.phoneNumber !== employee.phoneNumber){

                            //return the object w/ updated phone number
                            //return the names 'key' from previous state
                            return{
                                ...employee,
                                phoneNumber: item.phoneNumber
                            }
                        }
                    }
                    return item
                })
            }else{
                action.payload.map((item, index) =>{
                    updated=[
                        ...updated,
                        item
                    ]
                })
            }
            //check if employee hours/pay is stored in sessionStorage
            if(employeeList){
                //set the Id's from employee hours/pay
                updated = setAllId(updated, employeeList)
            }
            setToStorage(methods.addressBook, updated)
            return updated
        default:
            return state    
    }
}

export default addressReducer