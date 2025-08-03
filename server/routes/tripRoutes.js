const express = require("express");
const router = express.Router();
const Trip = require("../models/Trip");

// Create a trip
router.post("/", async (req, res) => {
  try {
    const { destination, date, numberOfPersons, numberOfDays } = req.body;
    const newTrip = new Trip({ destination, date, numberOfPersons, numberOfDays });
    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error creating trip" });
  }
});

// Get all trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: "Error fetching trips" });
  }
});

// Update a trip
router.put("/:id", async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTrip);
  } catch (err) {
    res.status(500).json({ message: "Error updating trip" });
  }
});

// Delete a trip
router.delete("/:id", async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.json({ message: "Trip deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting trip" });
  }
});

module.exports = router;
