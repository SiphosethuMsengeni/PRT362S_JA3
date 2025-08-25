import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const CrackedScreenRepair = () => {
  return (
    <div className="service-page">
      <h1>Cracked Screen Repair</h1>
      <p>
        Cracked screen ruining your workflow? Same-day screen repairs are available for
        most laptop and monitor models, restoring clarity and touch functionality.
      </p>
      <ul>
        <li>Replacement screens for laptops, monitors, and tablets</li>
        <li>Fast, reliable, and clean repair</li>
        <li>Tested for quality and touch responsiveness</li>
      </ul>
      <Link to="/repair">
        <button className="repair-button">Back to Repair Page</button>
      </Link>
    </div>
  );
};

export default CrackedScreenRepair;