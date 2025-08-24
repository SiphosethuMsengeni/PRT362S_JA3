import React from 'react';
// import './App.css';

// Import images from src/images
import laptopImg from '../images/Computer&Laptop.png';
import virusImg from '../images/viruses.png';
import powerJackImg from '../images/Laptop-dc-power-jack-repair.png';
import dataRecoveryImg from '../images/DataRecovery.png';
import crackedScreenImg from '../images/Cracked.png';
import inHomeImg from '../images/In_Home.png';

const repairServices = [
  {
    title: 'Computer & Laptop',
    description: 'With our 24 hour turnaround time, it’ll be back up in no time.',
    image: laptopImg
  },
  {
    title: 'Virus Removal',
    description: 'Computer slowing you down? We’ll remove all viruses and malware.',
    image: virusImg
  },
  {
    title: 'Power Jack Repair',
    description: 'We specialize in DC power jack repairs for all laptops and PCs.',
    image: powerJackImg
  },
  {
    title: 'Data Recovery',
    description: 'Recover lost files from broken computers or damaged drives.',
    image: dataRecoveryImg
  },
  {
    title: 'Cracked Screen Repair',
    description: 'Same day cracked screen repairs available for most models.',
    image: crackedScreenImg
  },
  {
    title: 'In-Home Service',
    description: 'We pick up and drop off your computer. No hidden costs.',
    image: inHomeImg
  }
];

const RepairPage = () => {
  return (
    <div className="repair-page">
      <h1 className="repair-title">Get Started With Your Computer Repairs</h1>
      <p className="repair-subtitle">
        We are quick and effective at repairing non-working, broken, or damaged computing items. 
        We will exceed your expectations at a highly competitive rate.
      </p>
      <div className="repair-grid">
        {repairServices.map((service, index) => (
          <div key={index} className="repair-card">
            <img src={service.image} alt={service.title} className="repair-image" />
            <h2 className="repair-card-title">{service.title}</h2>
            <p className="repair-card-desc">{service.description}</p>
            <button className="repair-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepairPage;
