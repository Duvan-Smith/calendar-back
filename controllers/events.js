const { response, request } = require("express");

const getEvents = async (req = request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "getEvents",
  });
};

const createEvent = async (req = request, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "createEvent",
  });
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
    msg: "updateEvent",
  });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
