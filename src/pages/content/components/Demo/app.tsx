import { useState } from "react";
import { SketchPicker } from 'react-color';


export default function App() {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#00FF00');

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const closeColorPicker = () => {
    setShowColorPicker(false);
  };

  return (
    <div className="text-lime-400">
      <button onClick={toggleColorPicker}>
        Color
      </button>

      {showColorPicker && (
        <div
          onBlur={closeColorPicker}
          tabIndex="0"
          onMouseEnter={() => {}}
          onMouseLeave={closeColorPicker}
        >
          <SketchPicker color={selectedColor} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
}
