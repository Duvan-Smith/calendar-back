/*
    host + /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const {
  revalidateToken,
  loginUser,
  createUser,
} = require("../controllers/auth");

router.get("/", revalidateToken);

router.post(
  "/login",
  [
    check("email", "El correo es obligatorio").not().isEmpty(),
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("password", "La contraseña debe contener 6 caracteres").isLength({
      min: 6,
    }),
  ],
  loginUser
);

router.post(
  "/create",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El correo es obligatorio").not().isEmpty(),
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("password", "La contraseña debe contener 6 caracteres").isLength({
      min: 6,
    }),
  ],
  createUser
);

module.exports = router;
