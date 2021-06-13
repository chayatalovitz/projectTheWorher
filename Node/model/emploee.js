
const mongoose=require('mongoose')
const employeSchema = mongoose.Schema({
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
      },
      password: {
        type: String,
      },
      status: {
        type: Boolean,
      }
    }
  )
  module.exports=mongoose.model('employee',employeSchema)