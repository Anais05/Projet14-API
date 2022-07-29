const Admin = require('./models/adminModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.loginUser = async serviceData => {
  try {
    const admin = await Admin.find({email: serviceData.email})

    if (!admin) {
      throw new Error('User not found!')
    }

    const isValid = bcrypt.compare(serviceData.password, admin.password)

    if (!isValid) {
      throw new Error('Password is invalid')
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    )

    return { token }
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}