const Admin = require('../models/adminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')

module.exports.loginUser = async (req, res) => {
  let response = {}

  try {
    const admin = await Admin.findOne({ email: req.email })
    const isValid = await bcrypt.compare(req.password, admin.password)

    if (!admin) {
      throw new Error('User not found!')
    }

    if (!isValid) {
      throw new Error('Password is invalid')
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    )

    response.body = token
    response.status = 200
  } catch (error) {
    console.error('Error in loginUser (userController.js)', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}