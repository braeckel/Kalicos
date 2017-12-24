const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
  username: {
    type: String,
    minLength: 1,
    trim: true
  },
  email: {
    type: String,
    minLength: 1,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minLength: 1,
    trim: true,
    required: true,
    unique: true
  }
})

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users
