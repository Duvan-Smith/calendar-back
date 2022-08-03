const { response, request } = require("express");

const revalidateToken = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "get",
  });
};

const loginUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

const createUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "create",
  });
};

module.exports = { revalidateToken, loginUser, createUser };
