const express = require('express');
const requireAuth= require ('../middleware/requireAuth')


const { AddEmployee, FindAllEmployees, FindSingleEmployee, UpdateEmployee, DeleteEmployee,  UpdateCv} = require('../controllers/employee.controller');

const router = express.Router();
// require auth for all  routes
router.use(requireAuth);

// add employee
router.post('/employee', AddEmployee);

// find all employees
router.get('/employee',FindAllEmployees );

// find single employee
router.get('/employee/:id', FindSingleEmployee);

// modify employee
router.put('/employeeupdate',UpdateEmployee );
//update cv
router.put('/employeupdatecv', UpdateCv );

// add employee
router.delete('/employeedelete', DeleteEmployee);

// router.post('/employee/login', AuthEmployee);



module.exports = router;
