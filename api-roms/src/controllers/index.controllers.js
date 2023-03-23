import { pool } from "../config/db.js";

export const index = async (req, res) => {
  let games = [];

  const json = {
    name: "Mortal kombat",
    link: "https://freeromsdownload.com/download/roms/playstation-2/mortal-kombat-deception-usa",
    img: "https://freeromsdownload.com/imgs/roms/playstation-2/m/mortal-kombat-deception-usa.jpg",
  };

  for (let index = 0; index < 100000; index++) {
    const { name, link, img } = json;
    const values = { name, link, img };
    games.push(values);
  }

  const sql = "INSERT INTO GAMES (name, link, img) values (?, ?, ?)";
  games.forEach(async (game) => {
    const [rows] = await pool.query(sql, [game.name, game.link, game.img]);
  })
  return res.status(200).json({ msg: "Insertado correctamente" });
};
