import React, { useState } from "react";

const UnitsSettings = () => {
  const [unit, setUnit] = useState("celsius");

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    console.log(unit);
  };

  return (
    <form>
      <input
        id="celsius"
        type="radio"
        name="unit"
        value="celsius"
        defaultChecked
        onChange={handleUnitChange}
        checked={unit === "celsius"}
      />
      <label htmlFor="celsius">Celsius</label>
      <input
        id="fahrenheit"
        type="radio"
        name="unit"
        value="fahrenheit"
        onChange={handleUnitChange}
        checked={unit === "fahrenheit"}
      />
      <label htmlFor="fahrenheit">Fahrenheit</label>
    </form>
  );
};

export default UnitsSettings;
