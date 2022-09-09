const userService = require('../userService')

module.exports.loginUser = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.loginUser(req.body)
    response.status = 200
    response.message = 'Admin successfully logged in'
    response.body = responseFromService
  } catch (error) {
    console.error('Error in loginUser (userController.js)')
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
    console.log('Error in getEmployeeList (userController.js)')
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
    console.error('Something went wrong in userController.js', error)
    response.status = 400
    response.message = error.message
  }
}

module.exports.updateEmployee = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.updateEmployee(req)
    response.status = 200
    response.message = 'Successfully updated employee'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateUserProfile - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}