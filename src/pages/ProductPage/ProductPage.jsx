import React from "react";
import "./Product.css";
import MachineSpecs from "../../component/Table/ProductTable";
import productPage from "../../assets/product-page.png";
import featurecnc from "../../assets/features-cnc.webp";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="product-hero-section">
        <h2>OUR PRODUCTS</h2>
      </div>

      <div className="content-section">
        <div className="heading-breadcrumb">
          <div className="breadcrumb">&lt; Our Products</div>
          <button className="category-button">CNC Lathe Trainers</button>
          <h1 className="features-heading">
            CNC Lathe Trainers with Industrial Controller
          </h1>
        </div>
        <div className="product-container">
          <div className="features">
            <h3>Features:</h3>
            <ul>
              <li>Rugged Machine with Boxed Bed</li>
              <li>8 Station Programmable Turret</li>
              <li>Fully Enclosed Working Area</li>
              <li>Programmable Spindle</li>
              <li>Manual Pulse Generator (Optional)</li>
              <li>RS 232C Compatibility</li>
              <li>Hydraulic Chuck (Optional)</li>
              <li>Auto Door (Optional)</li>
            </ul>
          </div>
          <div className="image-container-product">
            <img src={productPage} alt="CNC Lathe" className="product-image" />
          </div>
        </div>
        <div className="specifications">
          <MachineSpecs />
          <div className="image-container-product-features">
            <img src={featurecnc} alt="CNC Lathe" className="features-image" />
          </div>
        </div>
        <div className="arrow-container">
          <div className="arrow-left">
            <span>&#60;</span>
          </div>
          <div className="arrow-right">
            <span>&#62;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
