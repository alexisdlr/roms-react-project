import { pool } from "../connect.js"

export const getGames = async (req,res) => {
  try {
    const consoleId = req.query.consoleId
    const q = consoleId ? 'SELECT * FROM games where consoleId = ?' :'SELECT * FROM games' 
    const [rows] = consoleId ? await pool.query(q, [consoleId]) : await pool.query(q);
    return res.status(200).json(rows)

  } catch (error) {
    console.log(error);
  }
}