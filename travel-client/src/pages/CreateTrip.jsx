import React, { useState } from "react";
import "./CreateTrip.css";

const CreateTrip = () => {
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    persons: "",
    days: "",
    tripType: "Internal",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trip Created:", formData);
    alert("Trip created successfully!");
  };

  return (
    <div className="create-trip-bg d-flex align-items-center justify-content-center">
      <div className="trip-form-card shadow-lg">
        <h2 className="text-center mb-4">Create Your Trip</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="form-control"
              placeholder="e.g., Paris"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Number of Persons</label>
            <input
              type="number"
              name="persons"
              value={formData.persons}
              onChange={handleChange}
              className="form-control"
              min="1"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Number of Days</label>
            <input
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              className="form-control"
              min="1"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label>Trip Type</label>
            <select
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
              className="form-control"
              required
            >
              
              <option value="Domestic">Domestic Trip</option>
              <option value="International">International Trip</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Create Trip</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTrip;
