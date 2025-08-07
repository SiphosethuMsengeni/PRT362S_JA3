// src/pages/ReadyBuilt/ReadyBuilt.jsx
import { useState } from 'react';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ReadyBuilt.css';

const ReadyBuilt = () => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');

  // Sample data
  const systems = [
    {
      id: 1,
      name: 'RigForge Titan X',
      specs: ['Intel Core i9-13900K', 'NVIDIA RTX 4090', '32GB DDR5 RAM', '2TB NVMe SSD'],
      price: 3499.99,
      image: '/system-titan.jpg',
      category: 'gaming'
    },
    // More systems...
  ];

  const filteredSystems = systems.filter(system => {
    if (filter === 'all') return true;
    return system.category === filter;
  });

  const sortedSystems = [...filteredSystems].sort((a, b) => {
    if (sort === 'price-low') return a.price - b.price;
    if (sort === 'price-high') return b.price - a.price;
    return 0; // Default sorting (featured)
  });

  return (
    <div className="ready-built-page">
      <Header />
      <div className="page-container">
        <h1 className="page-title">Ready-Built Computers</h1>
        
        <div className="filter-bar">
          <select 
            className="filter-select" 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="gaming">Gaming</option>
            <option value="workstation">Workstation</option>
            <option value="budget">Budget</option>
          </select>
          
          <select 
            className="filter-select" 
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="featured">Sort By: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
        
        <div className="systems-grid">
          {sortedSystems.map(system => (
            <ProductCard 
              key={system.id}
              product={system}
              showDetailsButton
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadyBuilt;