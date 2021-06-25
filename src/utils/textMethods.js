

export const buildEmployee = (state) =>{
    const employee = {
        id: state.id,
        firstName: state.firstName,
        lastName: state.lastName,
        netPay: state.netPay,
        totalHours: state.totalHours,
        overtimeHours: state.overtimeHours,
        dates:{
            monday: state.mondayDates,
            tuesday: state.tuesdayDates,
            wednesday: state.wednesdayDates,
            thursday: state.thursdayDates,
            friday: state.fridayDates,
            saturday: state.saturdayDates,
            sunday: state.sundayDates,
            payDay: state.payDay
        },
        dailyHours:{
            monday: state.mondayHours,
            tuesday: state.tuesdayHours,
            wednesday: state.wednesdayHours,
            thursday: state.thursdayHours,
            friday: state.fridayHours,
            saturday: state.saturdayHours,
            sunday: state.sundayHours
        }
    }
    console.log("textMethodsJS.buildEmployee.variable.employee: ", employee)
    return employee
}