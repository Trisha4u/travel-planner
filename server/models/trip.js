const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  numberOfPersons: {
    type: Number,
    required: true,
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Trip", tripSchema);
