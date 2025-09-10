import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

// Import images from src/images
import gamingDesktop from '../images/Gaming-Desktop.jpg';
import workstationDesktop from '../images/Workstation-Desktop.webp'; 
import budgetPC from '../images/Budget-PC.jpg';
import gamingPC from '../images/Gaming-PC.jpg';
import ultrabook from '../images/Ultrabook(MacBook).jpg';
import miniPC from '../images/Mini-PC.webp';
import creatorPC from '../images/Creator-PC.jpg';
import officeDesktop from '../images/Office-Desktop.jpg';
import highEndGamingRig from '../images/High-End-Gaming-Desktop.jpg';
import pc from '../images/PC.webp';

const pcs = [
  {
    id: 1,
    name: 'Gaming Desktop',
    processor: 'Intel Core i9',
    ram: '32GB',
    storage: '1TB SSD',
    os: 'Windows 11',
  image: gamingDesktop
  },
  {
    id: 2,
    name: 'Workstation Desktop',
    processor: 'AMD Ryzen 9',
    ram: '64GB',
    storage: '2TB SSD',
    os: 'Ubuntu 20.04',
  image: workstationDesktop
  },
  {
    id: 3,
    name: 'Budget PC',
    processor: 'Intel Core i5',
    ram: '16GB',
    storage: '512GB SSD',
    os: 'Windows 10',
  image: budgetPC
  },
  {
    id: 4,
    name: 'Gaming PC',
    processor: 'AMD Ryzen 7',
    ram: '16GB',
    storage: '1TB SSD',
    os: 'Windows 11',
  image: gamingPC
  },
  {
    id: 5,
    name: 'Ultrabook',
    processor: 'Intel Core i7',
    ram: '16GB',
    storage: '512GB SSD',
    os: 'macOS Monterey',
  image: ultrabook
  },
  {
    id: 6,
    name: 'Mini PC',
    processor: 'Celeron',
    ram: '500GB',
    storage: '256GB SSD',
    os: 'OS',
  image: miniPC
  },
  {
    id: 7,
    name: 'Creator PC',
    processor: 'Intel Core i7',
    ram: '32GB',
    storage: '2TB NVMe SSD',
    os: 'Windows 11 Pro',
    image: creatorPC
  },
  {
    id: 8,
    name: 'Office Desktop',
    processor: 'Intel Core i5',
    ram: '8GB',
    storage: '1TB HDD',
    os: 'Windows 10 Pro',
    image: officeDesktop
  },
  {
    id: 9,
    name: 'High-End Gaming Rig',
    processor: 'AMD Ryzen 9 7950X',
    ram: '64GB DDR5',
    storage: '2TB NVMe SSD + 4TB HDD',
    os: 'Windows 11 Pro',
    image: highEndGamingRig
  },
  {
    id: 10,
    name: 'PC',
    processor: 'Intel Core i3',
    ram: '8GB',
    storage: '256GB SSD',
    os: 'Windows 10',
    image: pc
  }
];

const ComponentViewPage = () => {
  const { id } = useParams();
  const pc = pcs.find((item) => item.id === parseInt(id));

  if (!pc) {
    return <h2 style={{ textAlign: 'center', color: 'red' }}>PC not found!</h2>;
  }

  return (
    <div className="component-page">
      <img src={pc.image} alt={pc.name} className="pc-image-large"/>
      <h1>{pc.name}</h1>
      <p><strong>Processor:</strong> {pc.processor}</p>
      <p><strong>RAM:</strong> {pc.ram}</p>
      <p><strong>Storage:</strong> {pc.storage}</p>
      <p><strong>OS:</strong> {pc.os}</p>
      <Link to="/ready-built">
        <button className="view-button">Back to Ready Built</button>
      </Link>
    </div>
  );
};

export default ComponentViewPage;