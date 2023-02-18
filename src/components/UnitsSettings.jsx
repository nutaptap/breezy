import React, { useContext } from "react";
import SettingsContext from "../context/SettingsContext";

const UnitsSettings = () => {
  const { settings, updateSetting } = useContext(SettingsContext);

  const handleUnitChange = (event) => {
    const newSetting = event.target.value;
    updateSetting("units", newSetting);
  };

  return (
    <form>
      <input
        id="celsius"
        type="radio"
        name="unit"
        value="celsius"
        defaultChecked={settings.units === "celsius"}
        onChange={handleUnitChange}
      />
      <label htmlFor="celsius">Celsius</label>
      <input
        id="fahrenheit"
        type="radio"
        name="unit"
        value="fahrenheit"
        defaultChecked={settings.units === "fahrenheit"}
        onChange={handleUnitChange}
      />
      <label htmlFor="fahrenheit">Fahrenheit</label>
    </form>
  );
};

export default UnitsSettings;
