const { response, request } = require("express");
const Event = require("../models/Event");

const getEvents = async (req = request, res = response) => {
  const events = await Event.find().populate("user", "name");

  res.status(200).json({
    ok: true,
    events,
  });
};

const createEvent = async (req = request, res = response) => {
  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const result = await event.save();

    res.status(200).json({
      ok: true,
      event: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hablar con el admin",
    });
  }
};

const updateEvent = async (req = request, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Id del evento no existente",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene permisos para realizar esta accion",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid,
    };

    const updateEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true,
    });

    res.status(200).json({
      ok: true,
      event: updateEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hablar con el admin",
    });
  }
};

const deleteEvent = async (req = request, res = response) => {
  const eventId = req.params.id;
  const uid = req.uid;

  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: "Id del evento no existente",
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene permisos para realizar esta accion",
      });
    }

    await Event.findByIdAndRemove(eventId);

    res.status(200).json({
      ok: true,
      msg: "Evento eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hablar con el admin",
    });
  }
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
