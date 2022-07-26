const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/signup', userController.createAdmin)

router.post('/login', userController.loginUser)

router.get('/employee-list', userController.getEmployeeList)

router.post('/create-employee', userController.createEmployee)

router.put('/edit-employee/:id', userController.updateEmployee)

router.delete('/delete-employee/:id', userController.deleteEmployee)


module.exports = router