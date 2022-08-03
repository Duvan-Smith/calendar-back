const { response, request } = require("express");

const revalidateToken = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "get",
  });
};

const loginUser = (req = request, res = response) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const createUser = (req = request, res = response) => {
  const { name, email, password } = req.body;

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: "Tamaño del nombre incorrecto",
    });
  }

  res.json({
    ok: true,
    msg: "create",
    name,
    email,
    password,
  });
};

module.exports = { revalidateToken, loginUser, createUser };
