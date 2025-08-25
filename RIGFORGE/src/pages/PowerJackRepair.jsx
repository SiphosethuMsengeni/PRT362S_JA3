import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const PowerJackRepair = () => {
  return (
    <div className="service-page">
      <h1>Power Jack Repair</h1>
      <p>
        Laptop won't charge properly? We specialize in DC power jack repairs for all
        laptops and PCs, ensuring a reliable connection so your device powers up every
        time.
      </p>
      <ul>
        <li>Repair or replace faulty power jacks</li>
        <li>Compatible with most laptop models</li>
        <li>Fast turnaround, minimal downtime</li>
      </ul>
      <Link to="/repair">
        <button className="repair-button">Back to Repair Page</button>
      </Link>
    </div>
  );
};

export default PowerJackRepair;