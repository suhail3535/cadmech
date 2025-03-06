import React from "react";
import "./Table.css";

const MachineSpecs = () => {
  const specifications = [
    { label: "X – Axis Travel", value: "150 mm" },
    { label: "Z – Axis Travel", value: "200 mm" },
    { label: "Chuck Size", value: "100 mm (Hydraulic chuck ø 135mm optional)" },
    { label: "Maximum Turning Diameter", value: "30 mm" },
    { label: "Maximum Turning Length", value: "150 mm" },
    { label: "Swing Over Cross Slide", value: "80 mm" },
    { label: "Spindle Nose Taper", value: "MT3" },
    { label: "Standard Cutting Tool Size", value: "16 x 16 mm" },
    { label: "Spindle Motor", value: "2 H.P AC/DC Motor (300 - 3000 RPM)" },
    { label: "Resolution", value: "0.005 mm" },
    { label: "Repeatability Automatic", value: "± 0.01 mm" },
    { label: "Lubrication Points", value: "Provided" },
    { label: "Interpolation", value: "Linear, Circular" },
    { label: "Programmable Feed Rate", value: "0-800 mm/Min." },
    { label: "Rapid Feed Rate", value: "0-1200 mm/Min." },
    { label: "Control System", value: "PC Based / Industrial" },
    { label: "Turret", value: "8 Station (Electro - Pneumatic)" },
    { label: "Coolant System", value: "40 Lts. (Programmable)" },
    { label: "Lubrication", value: "Centralized (Programmable)" },
    { label: "Axis Motor", value: "Stepper / Servo Motor" },
    { label: "Mains Supply", value: "415 V AC, Three Phase" },
    { label: "Machine Dimensions", value: "Approx. 1500 x 900 x 1500 mm" },
    { label: "Total Weight", value: "Approx. 900 Kg." },
  ];

  return (
    <div className="specs-container">
      <table className="specs-table">
        <thead>
          <tr>
            <th>Specifications:</th>
            <th>Model: VLM-IT-100</th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <td className="spec-label">
                <span>.</span>
                {spec.label}
              </td>
              <td className="spec-value">
                {" "}
                <span> :</span>
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MachineSpecs;
