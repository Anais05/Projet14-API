const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/login', userController.loginUser)

router.get('/employee-list', userController.getEmployeeList)


module.exports = router