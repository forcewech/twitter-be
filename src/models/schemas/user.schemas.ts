import mongoose, { Schema } from 'mongoose'
import { UserVerifyStatus } from '~/constants/enum'

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  emailVerifyToken: {
    type: String,
    require: true
  },
  forgotPasswordToken: {
    type: String,
    require: true
  },
  verify: {
    type: UserVerifyStatus,
    require: true
  },
  bio: String,
  location: String,
  website: String,
  username: String,
  avatar: String,
  coverPhoto: String
})
const User = mongoose.model('User', userSchema)

export { User }
