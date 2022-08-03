/*
    host + /api/auth
*/
const { Router } = require("express");
const router = Router();
const {
  revalidateToken,
  loginUser,
  createUser,
} = require("../controllers/auth");

router.get("/", revalidateToken);
router.post("/login", loginUser);
router.post("/create", createUser);

module.exports = router;
