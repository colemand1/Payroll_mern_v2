const { getEmployeefromStorage, setEmployeetoStorage } = require("../utilMethods")
const { getEmployeeById, updateEmployee, updateEmployeeById } = require("./dbEmployeeMethods")

export const convertFromStorage = () =>{
    try {
        //get array of Id's from storage
        var idArr = getEmployeefromStorage()
        //if storage is empty return false
        if(idArr === null){
            console.log("SessionId Conversion failed. Session Storage Empty")
            return false
        }
        //else retrieve the objects that match the id from db
        const id = idArr.map(item =>{
            var employee = getEmployeeById(item)
            return employee
        })
        return id
    } catch (error) {
        console.log(error)
    }
}

export const convertToStorage = input =>{
    var retArr = []
    input.forEach( item =>{
        retArr.push(item.id)
    })

    setEmployeetoStorage(retArr)
    return true
}

//add many
//returns same object list w/ id
export const addManyByName = (input) =>{
    console.log("dbUtilMethods.func.addManyByName.param: ", input)
    var retValue = input.map(item =>{
        var employee = updateEmployee(item)
        return employee
    })
    console.log("dbUtilMethods.func.addManyByName.retValue: ", retValue)
    return retValue
}

export const addManyById = input =>{
    var retValue = input.map(item =>{
        var employee = updateEmployeeById(item.id)
        return employee
    })
    return retValue
}

