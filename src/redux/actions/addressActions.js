export const addAddress = (address) => {
    return{
        type: "ADD",
        payload: address
     } 
   };
   export const deleteAddress = (address) =>{
     return{
         type: "DELETE",
         payload: address
     }
   };
   
   export const updateAddress = (address) =>{
     return {
         type: "UPDATE",
         payload: address
     }
   };
   
   export const getAllAddress = () =>{
     return {type: "GET_ALL"}
   };