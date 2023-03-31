import { pool } from "../config/db.js";

export const getPrice = async (req, res) => {
  const { username } = req.params;

  const userq = "select * from users where username = ?";
  const result = await pool.query(userq, username);
  if (result[0][0].role !== "admin")
    return res.status(403).json("No tienes acceso a esta informacion");
  const q =
    "select costo_actual as 'Costo actual en dolares $', costo_total as 'Costo total en dolares $' from costos";
  const [rows] = await pool.query(q);
  res.json({ "Renta mensual": 10, "Espacio de la base de datos (Mb)": 244.44, "Costo por cada 10Mb ($USD)": 0.1, Costos: rows });
};
