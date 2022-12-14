/*
    host + /api/auth
*/
const { Router } = require("express");
const { check } = require("express-validator");
const {
  revalidateToken,
  loginUser,
  createUser,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.get("/renew", validarJWT, revalidateToken);

router.post(
  "/",
  [
    check("email", "El correo es obligatorio").not().isEmpty(),
    check("email", "El correo es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("password", "La contraseña debe contener 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
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
    validarCampos,
  ],
  createUser
);

module.exports = router;
