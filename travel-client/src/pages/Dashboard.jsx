import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/trips");
      setTrips(response.data);
    } catch (error) {
      console.error("Error fetching trips:", error);
    }
  };

  const deleteTrip = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/trips/${id}`);
      fetchTrips();
    } catch (error) {
      console.error("Error deleting trip:", error);
    }
  };

  // Function to format date
  const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
  };

  return (
    <div className="dashboard-page">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="text-white text-center">Your Planned Trips</h1>
      </div>

      {/* Trip Cards */}
      <div className="container my-5">
        <div className="row justify-content-center">
          {trips.length > 0 ? (
            trips.map((trip) => (
              <div className="col-md-4 mb-4" key={trip._id}>
                <div className="card trip-card">
                  <div className="card-body">
                    <h5 className="card-title">{trip.destination}</h5>
                    <p className="card-text">
                      <strong>Date:</strong> {formatDate(trip.date)}<br />
                      <strong>Persons:</strong> {trip.numPersons}<br />
                      <strong>Days:</strong> {trip.numDays}
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-sm btn-outline-primary">
                        <FaEdit /> Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteTrip(trip._id)}
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center mt-5">
              <h4>No trips planned yet. Start your adventure now!</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
