const userService = require('../services/userService')

module.exports.createAdmin = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.createAdmin(req.body)
    response.status = 200
    response.message = 'Admin successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Error in loginUser (userController.js)', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.loginUser = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.loginUser(req.body)
    response.status = 200
    response.message = 'Admin successfully logged in'
    response.body = responseFromService
  } catch (error) {
    console.error('Error in loginUser (userController.js)', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.getEmployeeList = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.getEmployeeProfile(req)
    response.status = 200
    response.message = 'Successfully got employees profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in getEmployeeList (userController.js)', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.createEmployee = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.addEmployee(req.body)
    response.status = 200
    response.message = 'employee successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Error in createEmployee (userController.js)', error)
    response.status = 400
    response.message = error.message
  }
  return res.status(response.status).send(response)
}

module.exports.updateEmployee = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.updateEmployee(req)
    response.status = 200
    response.message = 'Successfully updated employee'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateEmployee (userController.js)', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.deleteEmployee = async (req, res) => {
  let response = {}

  try {
    await userService.deleteEmployee(req.params)
    response.status = 200
    response.message = 'Successfully delete employee'
  } catch (error) {
    console.log('Error in deleteEmployee (userController.js)', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}