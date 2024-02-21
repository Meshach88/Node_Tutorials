const express = require('express')
const router = express.Router()
const employeesController = require('../../controllers/employeesController')

router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployees)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee)


router.route('/:id')
    .get(employeesController.getEmployee)


module.exports = router


// MVC - stands for module view controller - it's a popular pattern
// Express is an unopinionated framework-meaning you can organize your code however you like
