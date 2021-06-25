import {setEmployeetoStorage, getEmployeefromStorage, trimLower} from "../../utils/utilMethods"

//get the state from sessionStorage
const getEmployee = getEmployeefromStorage()
const useState = getEmployee !== null ? getEmployee : []


const employeeReducer = (state = useState, action) => {
    switch (action.type) {
      case "ADD":
        action.payload.map((item, index) => {
          const overtimePay = item.overtimeHours !== null ? item.overtimeHours : 0;
          // add the id to the employee
          const newItem = {
            ...item,
            id: index,
            overtimeHours: overtimePay
          } 
          console.log("EmployeeReducer.ADD.newItem: ", newItem)
            state = [
                ...state,
                newItem
            ]
        });
        return state
      case "DELETE":
        return [
            ...state,
            action.payload.employee
        ]

      case "UPDATE":
        var employee = action.payload;
        var newState = state;

    
        console.log("EmployeeReducer.UPDATE.initial state: ", newState)
        console.log("EmployeeReducer.UPDATE.action.payload: ", employee)

        employee.map((item, index) => {
          var itemLastName = trimLower(item.lastName);
          var itemFirstname = trimLower(item.firstName);

          newState.map((obj) => {
            var employeeFirstname = trimLower(obj.firstName);
            var employeeLastName = trimLower(obj.lastName);

            if(employeeLastName.includes(itemLastName)  && employeeFirstname.includes(itemFirstname)){
              obj.netPay = item.netPay
            }
            return obj
          })
          return item
        })
        setEmployeetoStorage(newState)
        console.log('ReduxReducer-employeeJS.UPDATE.returnVariable.state: ', state)
        return newState

      case "UPDATE_TEXT":
        var textState = state
        const newItem = action.payload
        var saveIndex = 0
        console.log('ReduxReducer-employeeJS.UPDATE_TEXT.Variable.action.payload (intial): ', newItem)
        const retState = textState.map( (item1, index) =>{
          if(newItem.id === item1.id){
            saveIndex = index
            item1 = newItem
            console.log('ReduxReducer-employeeJS.UPDATE_TEXT.Variable.newItem (after): ', item1)
          }
          console.log('ReduxReducer-employeeJS.UPDATE_TEXT.Variable.newItem (outside): ', item1)
          return{
            ...item1
          }
        })
        console.log('ReduxReducer-employeeJS.UPDATE_TEXT.state.employee: ', textState[saveIndex])
        console.log('ReduxReducer-employeeJS.UPDATE_TEXT.state.textState: ', textState)
        console.log('ReduxReducer-employeeJS.UPDATE_TEXT.state.retState: ', retState)
        setEmployeetoStorage(retState)
        return retState
      case "GET_ALL":
        return [
            ...state,
            action.payload.employee
        ]
      case "GET_ONE":
        return [
            ...state,
            action.payload.employee
        ]
      default:
        return state
    }
  };
  
  export default employeeReducer;
  