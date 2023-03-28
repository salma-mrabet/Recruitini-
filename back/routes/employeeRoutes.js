const express = require('express');
const requireAuth= require ('../middleware/requireAuth')


const { AddEmployee, FindAllEmployees, FindSingleEmployee, UpdateEmployee, DeleteEmployee, AuthEmployee } = require('../controllers/employee.controller');

const router = express.Router();
// require auth for all job routes
router.use(requireAuth);

// add employee
router.post('/employee', AddEmployee);

// find all employees
router.get('/employee',FindAllEmployees );

// find single employee
router.get('/employee/:id', FindSingleEmployee);

// modify employee
router.put('/employeeupdate',UpdateEmployee );

// add employee
router.delete('/employee/:id', DeleteEmployee);

// router.post('/employee/login', AuthEmployee);



module.exports = router;
