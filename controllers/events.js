const { response, request } = require("express");
const Event = require("../models/Event");

const getEvents = async (req = request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "getEvents",
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
  res.status(200).json({
    ok: true,
    msg: "updateEvent",
  });
};

const deleteEvent = async (req = request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "deleteEvent",
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
