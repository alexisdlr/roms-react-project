import mongoose from "mongoose";
const GamesSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
  },
  img: {
    type: String, 
    required: true
  },
  console:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Console"
  }
})

const Game = mongoose.model('Game', GamesSchema)

export default Game