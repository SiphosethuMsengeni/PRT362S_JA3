import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const ComputerLaptop = () => {
  return (
    <div className="service-page">
      <h1>Computer & Laptop Repair</h1>
      <p>
        With our 24-hour turnaround time, we get your device back up and running fast. 
        From hardware upgrades to system troubleshooting, our certified technicians 
        handle all brands and models.
      </p>
      <ul>
        <li>Quick diagnostics and repair</li>
        <li>Hardware & software troubleshooting</li>
        <li>Quality parts and workmanship guaranteed</li>
      </ul>
      <Link to="/repair">
        <button className="repair-button">Back to Repair Page</button>
      </Link>
    </div>
  );
};

export default ComputerLaptop;
