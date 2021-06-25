const express = require('express');
const router = express.Router();
const Employees = require('../src/controllers/employee-ctrl');

/* GET home page. */
router.get('/', function(req, res, next) {
  Employees.getEmployees(req, res)
});

router.get('/:id', function(req, res){
  Employees.getEmployeeById(req, res)
});

router.post('/', function (req, res){
  Employees.updateEmployee(req,res)
});

router.put('/:id', function (req, res) {
  Employees.updateEmployeeById(req, res)
});

router.delete('/:id', function (req, res) {
  Employees.deleteEmployee(req, res)
});

router.get('/:lastName/:firstName', function (req, res) {
  Employees.getEmployeeByName(req, res)
})

module.exports = router;
