import Console from "../models/Consoles.js"


export const addConsoles = async (req, res) => {
  try {
    const newConsole = new Console(req.body)
    const consoleSaved = await newConsole.save()
    return res.status(200).json(consoleSaved)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}
export const getConsoles = async (req,res) => {
  try {
    
    const consoles = await Console.find()
    return res.status(200).json(consoles)
  } catch (error) {
    console.log(error);
  }
}