const Event = require('../models/Event');

exports.listEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ id: req.params.id });
    if (!event) {
      res.status(404).send('Event not found');
    } else {
      res.json(event);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedEvent) {
      res.status(404).send('Event not found');
    } else {
      res.json(updatedEvent);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findOneAndDelete({ id: req.params.id });
    if (!deletedEvent) {
      res.status(404).send('Event not found');
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
