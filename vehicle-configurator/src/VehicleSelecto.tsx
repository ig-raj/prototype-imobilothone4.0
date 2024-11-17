import React from "react";

interface VehicleSelectorProps {
  selectedVehicle: "SUV" | "Sedan" | "Two-Seater";
  setSelectedVehicle: React.Dispatch<React.SetStateAction<"SUV" | "Sedan" | "Two-Seater">>;
}

const VehicleSelector: React.FC<VehicleSelectorProps> = ({ selectedVehicle, setSelectedVehicle }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => setSelectedVehicle("SUV")} style={{ margin: "0 10px" }}>
        SUV
      </button>
      <button onClick={() => setSelectedVehicle("Sedan")} style={{ margin: "0 10px" }}>
        Sedan
      </button>
      <button onClick={() => setSelectedVehicle("Two-Seater")} style={{ margin: "0 10px" }}>
        Two-Seater
      </button>
      <p>Selected Vehicle: <b>{selectedVehicle}</b></p>
    </div>
  );
};

export default VehicleSelector;
