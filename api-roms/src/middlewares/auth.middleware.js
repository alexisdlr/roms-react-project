import jwt from "jsonwebtoken";
import { pool } from "../connect.js";
const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      console.log('decoded', decoded)
      const q = `SELECT * FROM users where id = ?`
      const [user] = await pool.query(q, [decoded.id])
      req.user = user[0]
      return next()
    } catch (error) {
     return res.status(403).json({msg: 'Token no valido'})      
    }
  }

  if(!token) return res.status(403).json({msg: 'Token no valido o inexistente'})
  next();
};
export default checkAuth;