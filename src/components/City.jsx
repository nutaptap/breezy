import React, { useContext } from "react";
import Tabs from "./Tabs";
import Search from "./Search";
import SettingsContext from "../context/SettingsContext";

const City = (props) => {
  const { settings } = useContext(SettingsContext);

  const renderTemperature = () => {
    if (settings.units === "celsius") {
      return <p>{props.data.main.temp} °C</p>;
    } else {
      const fahrenheit = Math.floor(props.data.main.temp * 1.8 + 32);
      return <p>{fahrenheit} °F</p>;
    }
  };

  return (
    <>
      <Search />
      <div className="city-container">
        <div>
          <h2>{props.data.name}</h2>
          {renderTemperature()}
        </div>
        <Tabs data={props.data} pollution={props.pollution} />
      </div>
    </>
  );
};

export default City;
