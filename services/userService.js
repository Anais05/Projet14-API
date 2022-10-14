const Admin = require('../models/adminModel')
const Employee = require('../models/employeeModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.createAdmin = async serviceData => {
  try {
    const admin = await Admin.findOne({ email: serviceData.email })
    if (admin) {
      throw new Error('Email already exists')
    }

    const hashPassword = await bcrypt.hash(serviceData.password, 12)

    const newAdmin = new Admin({
      email: serviceData.email,
      password: hashPassword,
    })

    let result = await newAdmin.save()

    return result
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.loginUser = async serviceData => {
  try {
    const admin = await Admin.findOne({email: serviceData.email})

    if (!admin) {
      throw new Error('User not found!')
    }

    const isValid = await bcrypt.compare(serviceData.password, admin.password);

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

module.exports.getEmployeeProfile = async () => {
  try {
    const employee = await Employee.find()

    if (!employee) {
      throw new Error('User not found!')
    }

    return employee
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.addEmployee = async serviceData => {
  try {
    const newUser = new Employee ({
      firstName: serviceData.firstName,
      lastName: serviceData.lastName,
      birthDay: serviceData.birthDay,
      startDate: serviceData.startDate,
      street: serviceData.street,
      city: serviceData.city,
      state: serviceData.state,
      stateAb: serviceData.stateAb,
      zipCode: serviceData.zipCode,
      department: serviceData.department,
    })
    let result = await newUser.save()

    return result.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.updateEmployee = async serviceData => {
  try {
    const employee = await Employee.findOneAndUpdate(
      { _id: serviceData.params.id },
      {
        firstName: serviceData.body.firstName,
        lastName: serviceData.body.lastName,
        birthDay: serviceData.body.birthDay,
        startDate: serviceData.body.startDate,
        street: serviceData.body.street,
        city: serviceData.body.city,
        state: serviceData.body.state,
        stateAb: serviceData.body.stateAb,
        zipCode: serviceData.body.zipCode,
        department: serviceData.body.department,
      },
      { new: true }
    )

    if (!employee) {
      throw new Error('User not found!')
    }

    return employee.toObject()
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}

module.exports.deleteEmployee = async serviceData => {
  try {
    await Employee.deleteOne(
      { _id: serviceData.id },
    )
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
