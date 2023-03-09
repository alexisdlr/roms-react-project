import Game from '../models/Games.js'
export const getGames = async (req,res) => {
  try {
   
    const games = await Game.find()
    return res.status(200).json(games)

  } catch (error) {
    console.log(error);
  }
}
export const addGames = async (req,res) => {
  try {
    const {consoleId} = req.body
    const newGame = new Game(req.body)
    newGame.console = consoleId
    const gameSaved = await newGame.save()
    return res.status(200).json(gameSaved)

  } catch (error) {
    console.log(error);
  }
}