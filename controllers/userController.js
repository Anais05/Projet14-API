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