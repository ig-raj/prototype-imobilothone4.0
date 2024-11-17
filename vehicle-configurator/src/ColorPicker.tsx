import React from "react";
import { SketchPicker } from "react-color";

interface ColorPickerProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <SketchPicker
        color={color}
        onChangeComplete={(newColor) => setColor(newColor.hex)}
      />
    </div>
  );
};

export default ColorPicker;
