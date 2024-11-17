import React, { useState } from "react";

const VehicleConfigurator = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [optionsEnabled, setOptionsEnabled] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>("#000000");

  // Vehicle images based on type and color
  const vehicleImages: { [key: string]: string } = {
    SUV: `/images/suv.png`,
    Sedan: `/images/sedan.png`,
    "Two-Seater": `/images/two-seater.png`,
  };

  const handleGetRecommendations = () => {
    // Logic for recommendations
    setOptionsEnabled(true); // Enable the vehicle options
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value); // Update color based on input
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Vehicle Configurator</h1>

      {/* Commute Distance Input */}
      <label>Commute Distance:</label>
      <br />
      <input type="number" placeholder="Enter distance in km" />
      <br /><br />

      {/* Preference Dropdown */}
      <label>Preference:</label>
      <br />
      <select>
        <option value="Luxury">Luxury</option>
        <option value="Economy">Economy</option>
      </select>
      <br /><br />

      {/* Get Recommendations Button */}
      <button onClick={handleGetRecommendations}>Get Recommendations</button>
      <br /><br />

      {/* Vehicle Options */}
      <button
        onClick={() => setSelectedVehicle("SUV")}
        disabled={!optionsEnabled}
        style={{ margin: "5px" }}
      >
        SUV
      </button>
      <button
        onClick={() => setSelectedVehicle("Sedan")}
        disabled={!optionsEnabled}
        style={{ margin: "5px" }}
      >
        Sedan
      </button>
      <button
        onClick={() => setSelectedVehicle("Two-Seater")}
        disabled={!optionsEnabled}
        style={{ margin: "5px" }}
      >
        Two-Seater
      </button>
      <br /><br />

      {/* Selected Vehicle Display */}
      <h2>Selected Vehicle: {selectedVehicle || "None"}</h2>
      {selectedVehicle && (
        <div
          style={{
            border: `5px solid ${selectedColor}`,
            width: "300px",
            margin: "0 auto",
          }}
        >
          <img
            src={vehicleImages[selectedVehicle]}
            alt={selectedVehicle}
            style={{ width: "100%" }}
          />
        </div>
      )}
      <br /><br />

      {/* Color Picker */}
      <label>Select Color:</label>
      <br />
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        style={{ width: "50px", height: "50px", border: "none" }}
      />
      <br /><br />

      <p>Selected Color Code: {selectedColor}</p>
    </div>
  );
};

export default VehicleConfigurator;
