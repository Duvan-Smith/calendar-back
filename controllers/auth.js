const { response, request } = require("express");
const { validationResult } = require("express-validator");

const revalidateToken = (req = request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "get",
  });
};

const loginUser = (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  const { email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const createUser = (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "create",
    name,
    email,
    password,
  });
};

module.exports = { revalidateToken, loginUser, createUser };
