import React from "react";
import "./ProductSection.css";

import cnclathe from "../../assets/cnc-lathe-Trainers.webp";
import cncmil from "../../assets/cnc-mill-trainers.webp";
import mmssetup from "../../assets/mms-setup.png";
import cimsetup from "../../assets/material-handling.png";
import hydraulic from "../../assets/hydraulic.png";
import labequipment from "../../assets/lab.png";

const products = [
  { name: "CNC Lathe Trainers", image: cnclathe },
  { name: "CNC Mill Trainers", image: cncmil },
  { name: "MMS Setup", image: mmssetup },
  { name: "Hydraulic & Pneumatic Trainers", image: hydraulic },
  { name: "CIM Setup Material Handling System", image: cimsetup },
  { name: "Lab Equipments", image: labequipment },
];

const ProductSection = () => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p className="product-name">
            {product.name} <span>&#x276F;</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
