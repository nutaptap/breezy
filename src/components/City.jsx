import React, { useContext } from "react";
import Tabs from "./Tabs";
import Search from "./Search";
import SettingsContext from "../context/SettingsContext";

const City = (props) => {
  const { settings } = useContext(SettingsContext);

  const renderTemperature = () => {
    if (settings.units === "celsius") {
      return <p>{Math.floor(props.data.main.temp)} °C</p>;
    } else {
      const fahrenheit = Math.floor(props.data.main.temp * 1.8 + 32);
      return <p>{fahrenheit} °F</p>;
    }
  };

  return (
    <div className="city">
      <Search />
      <div className="city-container">
        <div>
          <h2>{props.data.name}</h2>
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
          {renderTemperature()}
        </div>
        <Tabs data={props.data} pollution={props.pollution} />
      </div>
    </div>
  );
};

export default City;
