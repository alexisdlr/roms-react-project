import mongoose from "mongoose";
const ConsolesSchema = mongoose.Schema({
  nombre:{
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String, 
    required: true
  }

})

const Console = mongoose.model('Veterinario', ConsolesSchema)

export default Console