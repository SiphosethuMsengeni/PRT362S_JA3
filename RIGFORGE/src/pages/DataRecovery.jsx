import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const DataRecovery = () => {
  return (
    <div className="service-page">
      <h1>Data Recovery</h1>
      <p>
        Accidentally deleted files or have a failing hard drive? We recover lost files from
        broken computers or damaged drives safely and efficiently.
      </p>
      <ul>
        <li>Recover photos, documents, videos, and more</li>
        <li>Works on HDDs, SSDs, USB drives, and memory cards</li>
        <li>Confidential and secure process</li>
      </ul>
      <Link to="/repair">
        <button className="repair-button">Back to Repair Page</button>
      </Link>
    </div>
  );
};

export default DataRecovery;