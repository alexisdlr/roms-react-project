import mongoose from "mongoose";
const ConsolesSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String, 
    required: true
  }

})

const Console = mongoose.model('Console', ConsolesSchema)

export default Console