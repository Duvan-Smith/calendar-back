const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

const revalidateToken = (req = request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "get",
  });
};

const loginUser = (req = request, res = response) => {
  const { email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const createUser = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Correo existente",
      });
    }

    usuario = Usuario(req.body);

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hablar con el admin",
    });
  }
};

module.exports = { revalidateToken, loginUser, createUser };
