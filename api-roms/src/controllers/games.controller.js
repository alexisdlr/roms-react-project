import { pool } from "../connect.js"

export const getGames = async (req,res) => {
  try {
    const q = 'SELECT * FROM games'
    const [rows] = await pool.query(q);
    return res.status(200).json(rows)

  } catch (error) {
    console.log(error);
  }
}