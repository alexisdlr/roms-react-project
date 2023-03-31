import { pool } from "../config/db.js";

export const getGames = async (req, res) => {
  const pageNumber = req.query.pageNumber || 1;
  const pageSize = req.query.pageSize || 10;

  const offset = (pageNumber - 1) * pageSize;
  const limit = parseInt(pageSize);

  try {
    const sql = `SELECT * FROM GAMES LIMIT ?,?`
    const [rows] = await pool.query(sql, [offset, limit])
    return res.status(200).json({ games: rows, pageNumber, pageSize, totalRows: rows.length})

  } catch (error) {
    console.log(error);
    return res.status(405).json(error);
  }
};
export const addGames = async (req, res) => {
  try {
    const { consoleId } = req.body;
    const { name, link, img } = req.body;
    if (!consoleId) return res.status(400).json("Falta el ID de la consola");
    const sql = "INSERT INTO GAMES (name, link, img) values (?, ? ,?)";
    const [rows] = await pool.query(sql, [name, link, img]);
    return res
      .status(200)
      .json({ msg: "Insertado correctamente", id: rows.insertId });
  } catch (error) {
    console.log(error);
    return res.status(405).json(error);
  }
};
