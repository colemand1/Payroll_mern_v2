export const addEmployee = (employee) => {
   return{
       type: "ADD",
       payload: employee
    } 
  };
  export const deleteEmployee = (employee) =>{
    return{
        type: "DELETE",
        payload: employee
    }
  };
  
  export const updateEmployee = (employee) =>{
    return {
        type: "UPDATE",
        payload: employee,
    }
  };

  export const updateText = (employee) =>{
    return {
        type: "UPDATE_TEXT",
        payload: employee,
    }
  };
  
  export const getAllEmployee = () =>{
    return {type: "GET_ALL"}
  };
  
  export const findEmployee = (employee) =>{
    return {
        type: "GET_ONE",
        payload: employee
    }
  };

  export const toggleDisplay = () =>{
    return{
      type: "TOGGLE_DISPLAY"
    }
  }

  export const addAddressList = (addressList) =>{
    return{
      type: "address/add",
      payload: addressList
    }
  }

  export const updateAddress = (employee) =>{
    return{
      type:"UPDATE",
      payload: employee
    }
  }
  