
const Employee = require("../models/employee"); 

const updateEmployee = async (req, res) => {
  try{
    const body = req.body;
    const filter = { firstName: body.firstName, lastName: body.lastName }
    const options = {upsert: true, new: true}

    if (!body) {
      return res.status(400).json({
        success: false,
        error: "You must provide a body to update"
      });
    }
    const result = await Employee.updateOne(filter, body, options)
    
    if(result){
        return res.status(200).json({
          success: true,
          message: "Employee Updated",
          data: result
        })
    }else{
        console.log("employee-ctrl.func.updateEmployee: Update failed - returned value: ", result)
        console.log("employee-ctrl.func.updateEmployee: Failed Search firstName: ", body.firstName)
        console.log("employee-ctrl.func.updateEmployee: Failed Search lastName: ", body.lastName)
        return res.status(404).json({
          success: false,
          message: "Update failed: Something went wrong with updateOne",
        })
    }

  }catch(err){
    return res.status(404).json({
      err,
      message: "Employee not updated!"
    });
  }    
};

const updateEmployeeById = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update"
    });
  }
  Employee.findOne({ _id: req.params.id }, (err, employee) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Employee not found!"
      });
    }
    const body = req.body;
    console.log(body)
    employee.firstName = body.firstName;
    employee.lastName = body.lastName;
    employee.netPay = body.netPay;
    employee.totalHours = body.totalHours;
    employee.dailyHours = body.dailyHours;
    employee.dates = body.dates;
    employee.overtimeHours = body.overtimeHours;
    employee
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: Employee._id,
          message: "Employee updated!"
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Employee not updated!"
        });
      });
  });
};

const deleteEmployee = async (req, res) => {
  await Employee.findOneAndDelete({ _id: req.params.id }, (err, employee) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!employee) {
      return res.status(404).json({ success: false, error: `Employee not found` });
    }

    return res.status(200).json({ success: true, data: employee });
  }).catch((err) => console.log(err));
};

const getEmployeeById = async (req, res) => {
  await Employee.findOne({ _id: req.params.id }, (err, employee) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!employee) {
      return res.status(404).json({ success: false, error: `Employee not found` });
    }
    return res.status(200).json({ success: true, data: employee });
  }).catch((err) => console.log(err));
};

const getEmployees = async (req, res) => {
  await Employee.find({}, (err, employee) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!Employee.length) {
      return res.status(404).json({ success: false, error: `Employees not found` });
    }
    return res.status(200).json({ success: true, data: employee });
  }).catch((err) => console.log(err));
};

const getEmployeeByName = async (req, res) =>{
  await Employee.findOne({ firstName: req.params.firstName, lastName: req.params.lastName }, (err, employee) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!employee) {
      return res.status(404).json({ success: false, error: `Employee not found` });
    }
    return res.status(200).json({ success: true, data: employee });
  }).catch((err) => console.log(err));
}

module.exports = {
  updateEmployee,
  updateEmployeeById,
  deleteEmployee,
  getEmployees,
  getEmployeeById,
  getEmployeeByName
};
