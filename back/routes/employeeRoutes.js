const express = require('express');
const { AddEmployee, FindAllEmployees, FindSingleEmployee, UpdateEmployee, DeleteEmployee, AuthEmployee } = require('../controllers/employee.controller');
const router = express.Router();

// add employee
router.post('/employee', AddEmployee);

// find all employees
router.get('/employee',FindAllEmployees );

// find single employee
router.get('/employee/:id', FindSingleEmployee);

// modify employee
router.put('/employee/:id',UpdateEmployee );

// add employee
router.delete('/employee/:id', DeleteEmployee);

// router.post('/employee/login', AuthEmployee);



module.exports = router;
