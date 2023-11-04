const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const cors = require('cors');
app.use(cors());

// Middleware for body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
require('./config/db')(mongoose);

// Event Routes
app.use('/api/events', eventRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
