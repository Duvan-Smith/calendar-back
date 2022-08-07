const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");

const router = Router();

router.get("/", validarJWT, getEvents);
router.post("/", validarJWT, createEvent);
router.put("/:id", validarJWT, updateEvent);
router.delete("/:id", validarJWT, deleteEvent);

module.exports = router;
