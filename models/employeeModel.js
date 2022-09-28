const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    birthDay: String,
    startDate: String,
    street: String,
    city: String,
    state: String,
    stateAb: String,
    zipCode: String,
    department: String,
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('Employees', employeeSchema, 'employees')