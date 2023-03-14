import Console from "../models/Consoles.js"


export const addConsoles = async (req, res) => {
  try {
    console.log(req.body)
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
export const deleteConsole = async (req, res) => {
  try {
    const {id} = req.params
    const consola = await Console.findById(id)
  
    console.log(consola)
    if(!consola) return res.status(404).json({msg: 'No se encontró la consola'})

    await consola.deleteOne()    
    return res.json('Consola eliminada')

  } catch (error) {
    console.log(error)
  }
}