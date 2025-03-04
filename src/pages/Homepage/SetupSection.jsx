import React from 'react';
import './SetupSection.css';
import cimlucknow from '../../assets/CIM-Setup-Lucknow.webp';
import cimpune from '../../assets/CIM-Setup-Pune.webp';
import cimjalgaon from '../../assets/CIM-Setup-Jalgaon.webp';
const SetupSection = () => {
  const setups = [
    { name: 'CIM Setup Jalgao', image: cimjalgaon },
    { name: 'CIM Setup Lucknow', image: cimlucknow },
    { name: 'CIM Setup Pune', image: cimpune },
  ];

  return (
    <div className='container'>
      <div className='header'>Products & Solutions</div>
      <h2 className='description'>
        Through our products and solutions, we empower engineering colleges,
        polytechnic institutes, and industrial training centers to bridge the
        gap between academic knowledge and industry demands
      </h2>
      <h3 className='sub-header'>CIM Setups:</h3>
      <div className='setups-container'>
        {setups.map((setup, index) => (
          <div key={index} className='setup-card'>
            <img src={setup.image} alt={setup.name} className='setup-image' />
            <div className='setup-name'>{setup.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupSection;
