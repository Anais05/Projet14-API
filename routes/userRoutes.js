const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/login', userController.loginUser)

router.get('/employee-list', userController.getEmployeeList)

router.post('/create', userController.createEmployee)

router.put('/create', userController.updateEmployee)

module.exports = router