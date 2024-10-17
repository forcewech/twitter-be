import mongoose, { Schema } from 'mongoose'

const refreshTokenSchema = new Schema({
  token: {
    type: String,
    require: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})
const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema)

export { RefreshToken }
