import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const InHomeService = () => {
  return (
    <div className="service-page">
      <h1>In-Home Service</h1>
      <p>
        Too busy to visit our shop? We pick up and drop off your computer
        at your convenience. Transparent pricing, no hidden costs
      </p>
      <ul>
        <li>Door-to-door pickup and delivery</li>
        <li>Professional, insured handling</li>
        <li>Real-time updates on repair status</li>
      </ul>
      <Link to="/repair">
        <button className="repair-button">Back to Repair Page</button>
      </Link>
    </div>
  );
};

export default InHomeService;