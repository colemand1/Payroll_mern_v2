import axios from 'axios'

const baseRefUrl = 'http://localhost:3000/address/'

const updateEntry = employee =>{
    axios.post(baseRefUrl, {
        id: employee.id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        netPay: employee.netPay,
        totalHours: employee.totalHours,
        overtimeHours: employee.overtimeHours,
        dates:{
            monday: employee.dates.monday,
            tuesday: employee.dates.tuesday,
            wednesday: employee.dates.wednesday,
            thursday: employee.dates.thursday,
            friday: employee.dates.friday,
            saturday: employee.dates.saturday,
            sunday: employee.dates.sunday,
            payDay: employee.dates.payDay
        },
        dailyHours:{
            monday: employee.dailyHours.monday,
            tuesday: employee.dailyHours.tuesday,
            wednesday: employee.dailyHours.wednesday,
            thursday: employee.dailyHours.thursday,
            friday: employee.dailyHours.friday,
            saturday: employee.dailyHours.saturday,
            sunday: employee.dailyHours.sunday
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const updateEntryById = employee =>{
    let query = baseRefUrl + toString(employee.id)
    axios.put( query, {
        id: employee.id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        netPay: employee.netPay,
        totalHours: employee.totalHours,
        overtimeHours: employee.overtimeHours,
        dates:{
            monday: employee.dates.monday,
            tuesday: employee.dates.tuesday,
            wednesday: employee.dates.wednesday,
            thursday: employee.dates.thursday,
            friday: employee.dates.friday,
            saturday: employee.dates.saturday,
            sunday: employee.dates.sunday,
            payDay: employee.dates.payDay
        },
        dailyHours:{
            monday: employee.dailyHours.monday,
            tuesday: employee.dailyHours.tuesday,
            wednesday: employee.dailyHours.wednesday,
            thursday: employee.dailyHours.thursday,
            friday: employee.dailyHours.friday,
            saturday: employee.dailyHours.saturday,
            sunday: employee.dailyHours.sunday
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const getEntries = () =>{
    axios.get(baseRefUrl)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

const getEntryById = id =>{
    let query = baseRefUrl + toString(id)
    axios.get(query)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const getEntryByName = (firstName, lastName) =>{
    let query = baseRefUrl + toString(lastName) + '/' + toString(firstName) + '/'
    axios.get(query)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const deleteEntry = id =>{
    let query = baseRefUrl + toString(id)
    axios.delete(query)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

const findOneAndUpdate = id =>{
    
}


export {
    updateEntry,
    updateEntryById,
    deleteEntry,
    getEntries,
    getEntryById,
    getEntryByName,
    findOneAndUpdate
}