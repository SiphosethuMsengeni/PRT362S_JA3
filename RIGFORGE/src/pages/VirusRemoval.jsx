import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const VirusRemoval = () => {
  return (
    <div className="service-page">
      <h1>Virus Removal</h1>
      <p>
        Is your computer slowing down or acting strangely? We remove all viruses,
        malware, and spyware safely, restoring your system's speed and security.
      </p>
      <ul>
        <li>Full system scan and malware cleanup</li>
        <li>Safe removal without losing files</li>
        <li>Preventive advice to avoid future infections</li>
      </ul>
      <Link to="/repair">
        <button className="repair-button">Back to Repair Page</button>
      </Link>
    </div>
  );
};

export default VirusRemoval;