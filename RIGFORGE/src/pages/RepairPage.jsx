import React from 'react';
//import './App.css';

const repairServices = [
  {
    title: 'Computer & Laptop',
    description: 'With our 24 hour turnaround time, it’ll be back up in no time.',
    image: '/images/computer-laptop.jpg'
  },
  {
    title: 'Virus Removal',
    description: 'Computer slowing you down? We’ll remove all viruses and malware.',
    image: '/images/virus-removal.jpg'
  },
  {
    title: 'Power Jack Repair',
    description: 'We specialize in DC power jack repairs for all laptops and PCs.',
    image: '/images/power-jack.jpg'
  },
  {
    title: 'Data Recovery',
    description: 'Recover lost files from broken computers or damaged drives.',
    image: '/images/data-recovery.jpg'
  },
  {
    title: 'Cracked Screen Repair',
    description: 'Same day cracked screen repairs available for most models.',
    image: '/images/cracked-screen.jpg'
  },
  {
    title: 'In-Home Service',
    description: 'We pick up and drop off your computer. No hidden costs.',
    image: '/images/in-home-service.jpg'
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
