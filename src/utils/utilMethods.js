const day = 86400000

export const returnWeeks = (start, end) =>{
    var dates = {
        monday: start.getTime(),
        tuesday: null,
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: null,
        sunday: end.getTime()
    }

    var current = dates.monday + day;

    //set Tuesday - Saturday
    for(var i = 1; i < 6; i++){
        switch (i) {
            case 1:
                dates.tuesday = current
                current += day
                break;
            case 2:
                dates.wednesday = current
                current += day
                break;
            case 3:
                dates.thursday = current
                current += day
                break;
            case 4:
                dates.friday = current
                current += day
                break;
            default:
                dates.saturday = current
                break;
        }
    }
    return dates
}

const returnDate = date =>{
    return new Date(date)
}

export const returnPayDate = end =>{
    var payDay = day * 5
    //set Payday
    payDay += end.getTime()
    const date = returnDate(payDay)
    return date.getTime()
}

export const setDates = (week, payDay) =>{
    sessionStorage.setItem('week', JSON.stringify(week))
    sessionStorage.setItem('payDay', payDay.toString())
}

export const getPayDay = () =>{
    const date = Number(sessionStorage.getItem('payDay'))
    //console.log("UtilMethods.getPayDay.sessionStorage.payDay: ", date)
    return formatDay(date)
}

export const getWeek = () =>{
    const dates = sessionStorage.getItem('week')
    return JSON.parse(dates)
}

export const formatDay = date =>{
    const day = returnDate(date)
    return{
        month: day.getMonth() + 1,
        day: day.getDate()
    }
}

export const getDay = date =>{
    const day = formatDay(date)
    const ret = day.month + "/" + day.day
    return ret
}

export const setEmployeetoStorage = employee =>{
    console.log("UtilMethods.setEmployeetoStorage.Input: ", employee)
    sessionStorage.removeItem('employeeList');
    sessionStorage.setItem('employeeList', JSON.stringify(employee))
}

export const getEmployeefromStorage = employee =>{
    const list = sessionStorage.getItem('employeeList')
    return JSON.parse(list)
}

export const trimLower = input =>{
    let updated = input.toLowerCase()
    updated = input.trim()
    return updated
}

export const setID = (input, id) =>{
    return {
        ...input,
        id: id
    }
}

export const getFromStorage = item =>{
    const list = sessionStorage.getItem(item)
    return JSON.parse(list)
}

export const setToStorage = (key, value) =>{
    console.log("UtilMethods.setToStorage.value: ", value)
    console.log("UtilMethods.setToStorage.name: ", key)
    sessionStorage.removeItem(key);
    sessionStorage.setItem(key, JSON.stringify(value))

}
export const getIndexByName = (arInput, input) =>{
    var firstName = trimLower(input.firstName)
    var lastName = trimLower(input.lastName)
    var index = null;

    arInput.map( (item, indx) =>{
        if(item.lastName.includes(firstName) && item.lastName.includes(lastName)){
            index = indx
            return item
        }
    })
    
    return index
}

export const getItemByName = (arInput, input) =>{
    console.log("utilMethods.getItemByName.arInput: ", arInput)
    console.log("utilMethods.getItemByName.input: ", input)
    var firstName = trimLower(input.firstName)
    var lastName = trimLower(input.lastName)
    var retItem = null;

    arInput.map( (item, indx) =>{
        if(item.firstName.includes(firstName) && item.lastName.includes(lastName)){
            console.log("utilMethods.getItemByName.arInput.map.item condition-true: ", item)
            retItem = {
                ...item,
                index: indx
            }
        }
    })
    
    return retItem
}

export const getState = name =>{
    const value = getFromStorage(name)
    const retValue = value !== null ? value : []
    return retValue
}

export const setAllId = (inputAr, stateAr) =>{
    console.log("utilMethods.setAllId.inputAr: ", inputAr)
    console.log("utilMethods.setAllId.stateAr: ", stateAr)
    var list = []
    //map the new array
    list = inputAr.map(item =>{
        //console.log("utilMethods.setAllId.inputAr.map.item: ", item)
        //get the item form the state array
        let stateItem = getItemByName(stateAr, item)
        //console.log("utilMethods.setAllId.stateItem: ", stateItem)
        if(stateItem !== null){
            return setID(item, stateItem.id)
        }else{
            //if no id exists then set to -1 
            //So it won't break w/ null reference
            return setID(item, -1)
        }
        return item
    })

    return list
}