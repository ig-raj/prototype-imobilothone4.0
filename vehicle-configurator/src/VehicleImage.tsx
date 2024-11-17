import React from "react";

interface VehicleImageProps {
  vehicleType: "SUV" | "Sedan" | "Two-Seater";
  color: string;
}

const VehicleImage: React.FC<VehicleImageProps> = ({ vehicleType, color }) => {
  const vehicleImages: { [key: string]: string } = {
    SUV: `/images/suv.png`,
    Sedan: `/images/sedan.png`,
    "Two-Seater": `/images/two-seater.png`,
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          display: "inline-block",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <img
          src={vehicleImages[vehicleType]}
          alt={vehicleType}
          style={{ width: "300px", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default VehicleImage;
