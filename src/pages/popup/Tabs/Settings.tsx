import "@pages/popup/Popup.css";
import { useState } from "react";
import { GithubPicker } from 'react-color';

const Settings = () => {
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState('#00FF00');

    const handleColorChange = (color) => {
        setSelectedColor(color.hex);
        document.documentElement.style.setProperty('--tdl-color-primary', color.hex);
    };

    const toggleColorPicker = () => {
        setShowColorPicker(!showColorPicker);
    };

    const closeColorPicker = () => {
        setShowColorPicker(false);
    };

  return (
    <div className="w-full text-white">
        <h1>Settings:</h1>
        <GithubPicker color={selectedColor} onChange={handleColorChange} />
    </div>
  );
};

export default Settings;
