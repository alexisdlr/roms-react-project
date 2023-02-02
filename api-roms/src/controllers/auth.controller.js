import { pool } from "../connect.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import generateJWT from "../helpers/generateJWT.js";
export const register = async (req, res) => {
    //check if user exists
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const select = "SELECT * FROM users where username = ?";
    const [rows] = await pool.query(select, [req.body.username]);
    if (rows.length) return res.status(409).json("User Already exists");
    //hash password
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(req.body.password, salt);
    const q =
      "INSERT INTO users (`username`, `email`, `password`,`name`) VALUES (?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedPass,
      req.body.name
        ];
    const [data] = await pool.query(q, [values]);
    res.status(200).send({
      id: data.insertId,
      username: req.body.username,
      name: req.body.name
    });
};

export const login = async (req, res) => {
  const q = 'SELECT * FROM users WHERE username = ?'
  const [user] = await pool.query(q, [req.body.username])
  if(user.length === 0) return res.status(404).send('usuario no encontrado')

  const checkPass = bcrypt.compareSync(req.body.password, user[0].password)
  if (!checkPass) return res.status(400).json('password incorrecta')

  res.json({
    id: user[0].id,
    name: user[0].name,
    username: user[0].username,
    email: user[0].email,
    token: generateJWT(user[0].id, user[0].email)})

};

export const profile = async (req, res) => {
  const {user} = req
  console.log('user',user);
  res.json(user)

}
export const logout = (req, res) => {
  res.clearCookie('accessToken', {
    secure: true,
    sameSite: 'none'
  }).status(200).json('user has been logged out')
};