const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: String,
  id: { type: String, unique: true },
  src: String,
  description: String,
  Institution: String,
  availability: String
});

module.exports = mongoose.model('Event', EventSchema);
