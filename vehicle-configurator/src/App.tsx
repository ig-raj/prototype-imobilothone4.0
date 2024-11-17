import React, { useState } from "react";
import './App.css';
import axios from "axios";
import ColorPicker from "./ColorPicker";
import VehicleSelector from "./VehicleSelecto";
import VehicleImage from "./VehicleImage";


// Define types for user data and recommendations
interface UserData {
  commute_distance: number;
  preference: string;
}

interface Recommendation {
  fuel_type: string;
  seating: string;
  extras: string[];
}

const App: React.FC = () => {
  // State for user input, recommendation, selected vehicle, and color
  const [userData, setUserData] = useState<UserData>({ commute_distance: 0, preference: "" });
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<"SUV" | "Sedan" | "Two-Seater">("SUV");
  const [color, setColor] = useState<string>("#ffffff");

  // Handle changes in form input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: name === "commute_distance" ? Number(value) : value }));
  };

  // Handle form submission for recommendations
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send user data to Flask API
      const response = await axios.post<Recommendation>("http://127.0.0.1:5000/api/recommend", userData);
      setRecommendation(response.data);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
    }
  };

  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}> 
      <h2>Vehicle Configurator</h2>

      {/* User input form for recommendation */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <div>
          <label>Commute Distance:</label>
          <input
            type="number"
            name="commute_distance"
            value={userData.commute_distance}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Preference:</label>
          <select name="preference" value={userData.preference} onChange={handleChange}>
            <option value="luxury">Luxury</option>
            <option value="eco">Eco</option>
            <option value="standard">Standard</option>
          </select>
        </div>
        <button type="submit">Get Recommendations</button>
      </form>

      {recommendation && (
        <div>
          <h3>Recommended Configuration:</h3>
          <p>Fuel Type: {recommendation.fuel_type}</p>
          <p>Seating: {recommendation.seating}</p>
          <p>Extras: {recommendation.extras.join(", ")}</p>
        </div>
      )}

      {/* Vehicle selection and customization */}
      <VehicleSelector selectedVehicle={selectedVehicle} setSelectedVehicle={setSelectedVehicle} />
      <VehicleImage vehicleType={selectedVehicle} color={color} />
      <ColorPicker color={color} setColor={setColor} />
    </div>
  );
};

export default App;
