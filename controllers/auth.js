const { response, request } = require("express");
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
  // const { name, email, password } = req.body;
  const usuario = Usuario(req.body);

  try {
    await usuario.save();

    res.status(201).json({
      ok: true,
      msg: "create",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hablar con el admin",
    });
  }
};

module.exports = { revalidateToken, loginUser, createUser };
