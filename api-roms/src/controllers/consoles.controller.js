import { pool } from "../connect.js"



export const addConsoles = async (req, res) => {
  try {
    
    
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}
export const getConsoles = async (req,res) => {
  try {
    const q = 'SELECT * FROM consoles'
    const [rows] = await pool.query(q);
    return res.status(200).json(rows)

  } catch (error) {
    console.log(error);
  }
}