import { validationResult } from "express-validator";
import emailRegistro from '../helpers/emailRegistro.js'

import generateJWT from "../helpers/generateJWT.js";
import generateToken from "../helpers/generateToken.js";
export const register = async (req, res) => {
  //check if user exists
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  try {
    const { email, name, token } = req.body;

    //register on bd
   // const user = new User(req.body);
  //  const userSaved = await user.save();
    emailRegistro({ email, name: name, token: token });
   // return res.json(userSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  //if (!user) return res.status(500).json("Usuario no existe" );

  //if (!user.isConfirmed)
   // return res.status(500).json("Usuario no confirmado");
  //if (await !user.comparePass(password))
  //return res.status(500).json("Las contraseñas no coinciden");

  // res.json({
  //   _id: user.id,
  //   name: user.name,
  //   email: user.email,
  //   token: generateJWT(user.id, user.email),
  // });
};

export const profile = async (req, res) => {
  const { user } = req;
  console.log("user", user);
  res.json(user);
};
export const confirmAccount = async (req, res) => {
  const { token } = req.params;

  // if (!userConfirm)
  //   return res.status(404).json( "Token no válido");
  // try {
  //   userConfirm.token = null;
  //   userConfirm.isConfirmed = true;
  //   await userConfirm.save();
  //   res.json("cuenta confirmada exitosamente");
  // } catch (error) {
  //   return res.status(500).json("Hubo un error");
  // }
}
export const forgotPass = async (req, res) => {
  // const { email } = req.body;

  // const existUser = await User.findOne({ email });

  // if (!existUser)
  //   return res.status(403).json("el usuario no existe");

  // try {
  //   existUser.token = generateToken();
  //   await existUser.save();
  //   emailPassword({
  //     email,
  //     name: existUser.name,
  //     token: existUser.token,
  //   });
  //   return res.json("Hemos enviado un email con las instrucciones");
  // } catch (error) {
  //   console.log(error);
  //   return res.json(error);
  // }
};

export const checkToken = async (req, res) => {
  const { token } = req.params;

  const tokenValido = await User.findOne({ token });

  if (!tokenValido) return res.status(400).json({ msg: "Token no válido" });

  return res.json({ msg: "Token valido y el usuario si existe" });
};

export const newPass = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  // const user = await User.findOne({ token });
  // if (!user) return res.status(400).json({ msg: "Token no válido" });

  // try {
  //   user.token = null;
  //   user.password = password;
  //   await user.save();
  //   return res.json({ msg: "Password modificado correctamente" });
  // } catch (error) {
  //   console.log(error);
  // }
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
