import { Router } from "express";
import { body, check } from "express-validator";
import { login, register, logout, profile } from "../controllers/auth.controller.js";
import checkAuth from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", login);
router.post(
  "/register",
  body("email").isEmail().normalizeEmail(),
  check('password')
  .isLength({ min: 5 })
  .withMessage('La contraseña debe tener al menos 5 caracteres')
  .matches(/\d/)
  .withMessage('La contraseña debe contener un numero')
  .isLength({ min: 6 }),
  check('name').isString().withMessage('Debe ser un string'),
  register
);
router.post("/logout", logout);

//private route
router.get('/profile', checkAuth, profile)

export default router;
