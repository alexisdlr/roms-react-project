import { Router } from "express";
import { check } from "express-validator";
import {
  login,
  register,
  logout,
  profile,
  confirmAccount,
  forgotPass,
  checkToken,
  newPass,
} from "../controllers/auth.controller.js";
import checkAuth from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
  "/login",
  check("email").isEmail().normalizeEmail().withMessage("Email invalido"),
  login
);
router.post(
  "/register",
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Introduce un email valido"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("La contraseña debe tener al menos 5 caracteres")
    .matches(/\d/)
    .withMessage("La contraseña debe contener un numero")
    .isLength({ min: 6 }),
  check("name").isString().withMessage("Debe ser un string"),
  register
);
router.post("/logout", logout);
router.get("/confirm/:token", confirmAccount)
router.post("/olvide-password", forgotPass);
router.route("/olvide-password/:token").get(checkToken).post(newPass);
//private route
router.get("/profile", checkAuth, profile);

export default router;
