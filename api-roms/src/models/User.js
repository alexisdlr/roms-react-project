import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import generateToken from "../helpers/generateToken.js";
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  name:{
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  role: {
    type: String, 
    default: "user"
  },
  token: {
    type: String,
    default: generateToken()
  },
  isConfirmed: {
    type: Boolean,
    default:false
  }
})

userSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSaltSync(10);
  this.password  = await bcrypt.hashSync(this.password, salt); 
})
userSchema.methods.comparePass = function (p) {
  return bcrypt.compareSync(p, this.password)
}
const User = mongoose.model('User', userSchema)

export default User