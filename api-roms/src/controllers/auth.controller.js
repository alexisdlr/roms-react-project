import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import generateJWT from "../helpers/generateJWT.js";
import User from "../models/User.js";
export const register = async (req, res) => {
  //check if user exists
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email } = req.body;
    const userExist = await User.find({ email });
    if (userExist) return res.status(409).json("Este usuario ya existe");

    //register on bd
    const user = new User(req.body);
    const userSaved = await user.save();
    return res.json(userSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email });
  if (!user)
    return res.status(404).json({
      msg: "usuario no encontrado",
    });

  if (await !user.comparePass(password))
    return res.status(500).json({ msg: "Las contraseñas no coinciden" });

  res.json({
    _id: user.id,
    name: user.nombre,
    email: user.email,
    token: generateJWT(user.id, user.email),
  });
};

export const profile = async (req, res) => {
  const { user } = req;
  console.log("user", user);
  res.json(user);
};
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("user has been logged out");
};
