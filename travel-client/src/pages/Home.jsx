import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Explore the World with Us</h1>
        <p>Plan your next adventure effortlessly</p>
        <Link to="/register" className="btn btn-primary mt-3">Get Started</Link>
      </section>

      {/* Popular Destinations */}
<section className="text-center my-5">
  <h2 className="mb-4">Popular Destinations</h2>
  <div className="row justify-content-center popular-destination">
    <div className="col-md-3 mb-4">
      <div className="destination-card">
        <img src="https://wallpaperaccess.com/full/1721414.jpg" alt="Paris" className="img-fluid" />
        <div className="overlay">Paris</div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="destination-card">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Goa" className="img-fluid" />
        <div className="overlay">Goa</div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="destination-card">
        <img src="https://www.holidify.com/images/bgImages/SWITZERLAND.jpg" alt="Switzerland" className="img-fluid" />
        <div className="overlay">Switzerland</div>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
<section className="text-center my-5">
  <h2 className="mb-4">What People Are Saying</h2>
  <div className="row justify-content-center">
    <div className="col-md-4 mb-3">
      <div className="testimonial-card p-4 border rounded shadow-sm bg-light">
        <p>"Amazing experience! The planning was seamless and hassle-free."</p>
        <strong>- Priya</strong>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="testimonial-card p-4 border rounded shadow-sm bg-light">
        <p>"Perfect for spontaneous getaways. Loved the trip suggestions!"</p>
        <strong>- Arjun</strong>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="testimonial-card p-4 border rounded shadow-sm bg-light">
        <p>"Amazing Trip Planner.. Everything was perfect and exiting!"</p>
        <strong>- Janani</strong>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-dark text-white pt-4 pb-3">
        <div className="container">
          <div className="row text-center text-md-left">
            <div className="col-md-4 mb-3">
              <h5>Travel Planner</h5>
              <p>Your perfect travel companion for hassle-free planning.</p>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link className="footer-link" to="/">Home</Link></li>
                <li><Link className="footer-link" to="/create-trip">Create Trip</Link></li>
                <li><Link className="footer-link" to="/dashboard">Dashboard</Link></li>
                <li><Link className="footer-link" to="/login">Login</Link></li>
              </ul>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Follow Us</h5>
              <a href="https://facebook.com" className="me-2 text-white"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="https://twitter.com" className="me-2 text-white"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="https://instagram.com" className="text-white"><i className="fab fa-instagram fa-lg"></i></a>
            </div>
          </div>
          <hr className="bg-light" />
          <p className="text-center mb-0">&copy; 2025 Travel Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
